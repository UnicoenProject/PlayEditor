/**
 * Created by ryosuke on 2016/05/26.
 */
/*可視化領域描画処理*/
$(function(){


    $.jCanvas.defaults.fromCenter = false;//座標を図形の中央ではなく左上に
    $.jCanvas.defaults.layer = true;//図形のレイヤー処理を有効化(グループ処理)

    $('canvas').setLayer('mainLayer', {
        visible: false//高速化・ちらつき防止のため最終的な状態になるまで描画しない
    }).drawLayers();

    var memory = [];
    memory.push(new segment("データ"));//0

    memory.push(new segment("ヒープ"));//1


    var root = data[0][0];

    function statement(mem,stack)
    {
        memory.push(new segment(stack.methodName));
        var block =stack.block.body;
        for(var i=0;i<block.length;++i)
        {
            if(block[i].type)//変数宣言
                mem.add(block[i].type, block[i].name, block[i].value);
            else if(block[i].operator)//代入などの式
                mem.operate(block[i]);
        }
    }
    if(root[0])//mainのみの時はdata[0]がmainブロック
    {
        var numOfStack =root.length;
        for(var j=0;j<numOfStack;++j)
        {
            memory.push(new segment(root[j].methodName));
            statement(memory[2+j],root[j]);
        }
    }
    else
    {
        memory.push(new segment(root.methodName));
        statement(memory[2],root)
    }


    //memory.push(new segment("add"));//3
    //memory[3].add("int","x","1");
    //memory[3].add("int","y","2");


    function calcExpr(seg,expr)
    {

        var ope = expr.operator;

        //単項演算子の場合
        var exp = expr.expr;
        if(exp)
        {
            if(ope=="&")//アドレスを取得
            {
                var val = seg.get(exp.name).value;
                var addr = "0x"+seg.get(exp.name).address.toString(16);
                return addr;
            }
            return -1;
        }
        //二項演算子の場合
        var left = expr.left;
        var right = expr.right;

        var leftValue;
        if(left.value)
            leftValue=left.value;
        else if(left.name)
            leftValue = seg.get(left.name).value;
        else if(left.operator)
            leftValue = calcExpr(seg,left);

        var rightValue;
        if(right.value)
            rightValue=right.value;
        else if(right.name)
            rightValue = seg.get(right.name).value;
        else if(right.operator)
            rightValue = calcExpr(seg,right);

        var expr = leftValue + ope + rightValue;
        var result = eval(expr);
        return result;
    }
    //メモリ領域クラス
    function segment(name)
    {
        this.name=name;//データ、ヒープ、main,addなど
        this.variables = [];//変数が順番に入っていく

        this.get = function(varName)
        {
            var filtered = $.grep(this.variables,
                function(elem, index)
                {
                    // ageプロパティの値でフィルター
                    return (elem.name == varName);
                }
            );
            return filtered.pop();
        }

        this.set = function(varName,value)
        {
            this.get(varName).value = value;
        }

        this.add = function(type_,name_,value_)
        {
            if(value_)
            {
                if(value_.value)//int a = 3;など数値の場合
                {
                    this.variables.push(new variable(type_, name_, value_.value));
                }
                else if(value_.name)//int a = c;など変数の場合
                {

                    this.variables.push(new variable(type_, name_, this.get(value_.name).value));
                    //this.variables.push(new variable(type_, name_, value_.name));
                }
                else if(value_.operator)
                {
                    var result = calcExpr(this,value_);
                    this.variables.push(new variable(type_, name_, result));
                }
            }
            else//int a;など宣言のみの場合
                this.variables.push(new variable(type_,name_,'?'));
        }

        this.operate = function(expr)
        {
            var left = expr.left;
            var leftName = left.name;

            var right = expr.right;
            var rightValue;
            if(right.value)
                rightValue=right.value;
            else if(right.name)
                rightValue = seg.get(right.name).value;
            else if(right.operator)
                rightValue = calcExpr(this,right);
            this.set(leftName,rightValue);
        }
    }

    //変数クラス
    function variable(type,name,value)
    {
        this.type = type;//"int"
        this.name = name;//"a"
        this.value = value;//"3"
        if(typeof(arguments.callee.address) == 'undefined')
        {
            arguments.callee.address = 0;// このfalseがデフォルト値。
        }
        else
        {
            if(type=="double")
                arguments.callee.address+=8;
            else if(type=="short")
                arguments.callee.address+=2;
            else if(type=="char")
                arguments.callee.address+=1;
            else
                arguments.callee.address+=4;
        }
        this.address = arguments.callee.address;
    }


    //$("#display").drawXXXX したものはnameプロパティを設定しておくと$("canvas").getLayer(name)で取得できる
    //name:("canvas").getLayer(name)でプロパティ取得：ユニーク(スタック名-
    //groupname:draggableなどで一緒に動かす範囲:複数設定可
    //type:name
    function drawText(text, x, y, name, groupname)
    {
        $("#display").drawText({
            fillStyle: "black",
            strokeStyle: "black",
            strokeWidth: "0.5",
            x: x,
            y: y,
            fontSize: 14,
            fontFamily: "sans-serif",
            text: " "+text+" ",
            name: name + "-text",//スタック名-変数名-列名-text
            draggable: true,
            groups: [groupname],//スタック名,変数名
            dragGroups: [groupname]//スタック名,変数名
        });
    }
    function drawVariable(text, x, y, name, groupname, text2,group2)
    {
        $("#display").drawText({
            fillStyle: "black",
            strokeStyle: "black",
            strokeWidth: "0.5",
            x: x,
            y: y,
            fontSize: 14,
            fontFamily: "sans-serif",
            text: " "+text+" ",
            name: name + "-text",//スタック名-変数名-列名-text
            draggable: true,
            groups: [groupname,group2],//スタック名,変数名
            dragGroups: [groupname],//スタック名,変数名
            click: function(layer) {
                // Click a star to spin it
                var group = $(this).getLayerGroup(group2);
                for(var i=0;i<group.length;++i)
                {
                    $(this).animateLayer(group[i], {
                        rotate: '+=360'
                    })
                }
            }
        });
    }
    var origin = new Victor(50, 50);//図形描画の基準位置
    var nextPos = origin.clone();//次のRectの左上の位置
    function drawSegment(mem)
    {
        var pos = nextPos.clone();//次の変数の左上の位置
        var memoryName = mem.name;//nameはその関数名など
        var variables = mem.variables;//変数一覧
        var numOfVars=variables.length;

        if (0 < numOfVars)//そのスタック内の変数を全て描画
        {
            drawText(memoryName, pos.x,pos.y, memoryName, memoryName);
            var heightOffset = 25;
            var borderHeight = heightOffset;
            var maxTypeWidth=0;
            var maxNameWidth=0;
            var maxValueWidth=0;
            for(var i=0; i<numOfVars; ++i)
            {
                pos.addY(new Victor(0, heightOffset))
                var v = variables[i];
                var name = memoryName+"-"+v.name;//ユニークな名前: スタック名+変数名+列名+テキスト
                drawVariable(v.type,   pos.x, pos.y, name+"-type", memoryName,"int",name+"-var");
                var typeWidth = $("#display").getLayer(name+"-type" + "-text").width;

                drawVariable(v.name,   pos.x+typeWidth, pos.y, name+"-name",memoryName,"&"+v.name,name+"-var");
                var nameWidth = $("#display").getLayer(name +"-name"+ "-text").width;

                drawVariable(v.value,  pos.x+typeWidth+nameWidth, pos.y, name+"-value",memoryName,v.address,name+"-var");
                var valueWidth = $("#display").getLayer(name +"-value"+ "-text").width;

                //列を揃えるために最大幅を計算
                maxTypeWidth = Math.max(maxTypeWidth,typeWidth);
                maxNameWidth = Math.max(maxNameWidth,nameWidth);
                maxValueWidth = Math.max(maxValueWidth,valueWidth);
                borderHeight += heightOffset;
                //構造体などの場合はネストして高さが*メンバ数になる
            }
            //各列の最大幅に合わせてx座標修正
            var memoryTextLayer = $("#display").getLayer(memoryName + "-text");
            var borderWidth = Math.max(memoryTextLayer.width,maxTypeWidth+maxNameWidth+maxValueWidth);
            memoryTextLayer.x = memoryTextLayer.x + (borderWidth/2)-(memoryTextLayer.width/2);
            for(var i=0; i<numOfVars; ++i)
            {
                var v = variables[i];
                var name = memoryName+"-"+v.name;//ユニークな名前: スタック名+変数名+列名+テキスト
                var leftPosX = $("#display").getLayer(name+"-type" + "-text").x;
                $("#display").getLayer(name +"-name"+ "-text").x  = leftPosX + maxTypeWidth;
                $("#display").getLayer(name +"-value"+ "-text").x = leftPosX + maxTypeWidth + maxNameWidth;
            }

            //スタックを囲む四角形を描画
            var posTopLeft = nextPos.clone().add(new Victor(-5,-5));
            $("#display").drawRect({
                strokeStyle: "black",
                strokeWidth: 1,
                x: posTopLeft.x,
                y: posTopLeft.y,
                width: borderWidth+10,
                height: borderHeight,
                draggable: true,
                name: memoryName +"-rect",
                groups: [memoryName],
                dragGroups: [memoryName],
                click: function(layer) {
                    // Click a star to spin it
                    $(this).animateLayer(layer, {
                        rotate: '+=360'
                    })
                }
            });


            function drawLine(start,end,name,groupname)
            {
                $('#display').drawLine({
                    strokeStyle: '#000',
                    strokeWidth: 1,
                    x1: start.x, y1: start.y,
                    x2: end.x, y2: end.y,
                    name: name,
                    groups: [groupname],
                    dragGroups: [groupname]
                });
            }

            //列単位で縦線を描画
            var memoryRectLayer = $("#display").getLayer(memoryName + "-rect");
            var start = new Victor(memoryRectLayer.x+maxTypeWidth+5,memoryRectLayer.y+heightOffset);
            var end = start.clone().addY(new Victor(0,memoryRectLayer.height-heightOffset));
            drawLine(start,end,memoryName+"_" + 0  +"-colline",memoryName);
            drawLine(start.addX(new Victor(maxNameWidth,0)),end.addX(new Victor(maxNameWidth,0)),memoryName+"_" + 1  +"-colline",memoryName);
            //変数単位で横線を描画
            var lineLeft = posTopLeft.clone();
            var lineRight = lineLeft.clone().addX(new Victor(borderWidth+10,0));
            for(var i=0; i<numOfVars; ++i)
            {
                var start = lineLeft.addY(new Victor(0,heightOffset));
                var end = lineRight.addY(new Victor(0,heightOffset));
                var name = memoryName+"_" + i  +"-rowline";
                var groupname = memoryName;
                drawLine(start,end,name,groupname);
            }
            nextPos=pos.addX(new Victor(borderWidth+100,0)).clone();
        }
    }
    for(var i=0, len=memory.length; i<len; ++i)
    {
        drawSegment(memory[i]);//それぞれのスタックについて描画
    }

    function drawArrow(start,mid,end,name,groupname)
    {
        $('#display').drawQuadratic({
            strokeStyle: '#000',
            strokeWidth: 4,
            rounded: true,
            endArrow: true,
            arrowRadius: 15,
            arrowAngle: 60,
            x1: start.x, y1: start.y,
            cx1: mid.x, cy1: mid.y,
            x2: end.x, y2: end.y,
            name: name+"-arrow",
            groups: [groupname],
            dragGroups: [groupname]
        })
    }

    //アドレスから矢印描画
    for(var i=0, memlen=memory.length; i<memlen; ++i)
    {
        for(var j=0, varlen=memory[i].variables.length; j<varlen; ++j)
        {
            var val = memory[i].variables[j];
            var isTypePtr = (val.type.indexOf('*') != -1);
            if(isTypePtr)
            {
                var layerName = memory[i].name+"-"+val.name+"-value"+"-text";
                var fromValue = $("#display").getLayer(layerName);
                var x = $("#display").getLayer(memory[i].name +"-rect").x;
                var y = fromValue.y+fromValue.height/2;
                var from = new Victor(x, y);

                for(var i2=0, memlen2=memory.length; i2<memlen2; ++i2)
                {
                    for (var j2 = 0, varlen2=memory[i2].variables.length; j2 < varlen2; ++j2)
                    {
                        var val2 = memory[i2].variables[j2];
                        if(val2.address==val.value)
                        {
                            var layerName2 = memory[i2].name+"-"+val2.name+"-value"+"-text";
                            var fromValue2 = $("#display").getLayer(layerName2);
                            var x2 = $("#display").getLayer(memory[i2].name +"-rect").x;
                            var y2 = fromValue2.y+fromValue2.height/2;
                            var to = new Victor(x2, y2);

                            var mid = new Victor((from.x+to.x)/2,(from.y+to.y)/2);
                            var dir = (to.clone().subtract(from.clone()));
                            var length = dir.length();
                            dir.normalize();
                            dir.rotateDeg(-90);
                            mid.add(dir.multiply(new Victor(length/4,length/4)));

                            var name = memory[i].name+"-"+val.name+"-to-"+memory[i2].name+"-"+val2.name;
                            drawArrow(from,mid,to,name,memory[i].name);//もう一つ必要
                        }
                    }
                }
            }
        }
    }
    $('canvas').getLayers().reverse();//スタックのRectが最前面になり内側に対するマウスイベントを全て全て受け取ってしまう。
    $('canvas').setLayer('mainLayer', {
        visible: true//ここまでの処理が終わって初めて描画する
    }).drawLayers();
});

