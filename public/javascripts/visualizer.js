/**
 * Created by ryosuke on 2016/05/26.
 */
/*可視化領域描画処理*/
$(function(){

    $('canvas').setLayer('mainLayer', {
        visible: false//高速化・ちらつき防止のため最終的な状態になるまで描画しない
    }).drawLayers();


    var memory = [];
    memory.push(new segment("データ"));//0

    memory.push(new segment("ヒープ"));//1

    memory.push(new segment("main"));//2
    memory[2].add("int","aaaa","1");
    memory[2].add("int","b","2");
    memory[2].add("int","c","300000");
    memory[2].add("int","d","4");

    memory.push(new segment("add"));//3
    memory[3].add("int","x","1");
    memory[3].add("int","y","2");

    //メモリ領域クラス
    function segment(name)
    {
        this.name=name;//データ、ヒープ、main,addなど
        this.variables = [];//変数が順番に入っていく
        this.add = function(type_,name_,value_)
        {
            this.variables.push(new variable(type_,name_,value_));//3
        }
    }

    //変数クラス
    function variable(type,name,value)
    {
        this.type = type;//"int"
        this.name = name;//"a"
        this.value = value;//"3"
    }
    

    $.jCanvas.defaults.fromCenter = false;//座標を図形の中央ではなく左上に
    $.jCanvas.defaults.layer = true;//図形のレイヤー処理を有効化(グループ処理)

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
            text: " "+text +" ",
            name: name + "-text",//スタック名-変数名-列名-text
            draggable: true,
            groups: [groupname],//スタック名,変数名
            dragGroups: [groupname]//スタック名,変数名
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
                drawText(v.type,   pos.x, pos.y, name+"type", memoryName);
                var typeWidth = $("#display").getLayer(name+"type" + "-text").width;
                drawText(v.name,   pos.x+typeWidth, pos.y, name+"name",memoryName);
                var nameWidth = $("#display").getLayer(name +"name"+ "-text").width;
                drawText(v.value,  pos.x+typeWidth+nameWidth, pos.y, name+"value",memoryName);
                var valueWidth = $("#display").getLayer(name +"value"+ "-text").width;

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
                var leftPosX = $("#display").getLayer(name+"type" + "-text").x;
                $("#display").getLayer(name +"name"+ "-text").x  = leftPosX + maxTypeWidth;
                $("#display").getLayer(name +"value"+ "-text").x = leftPosX + maxTypeWidth + maxNameWidth;
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
                dragGroups: [memoryName]
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

    function drawArrow(start,mid,end)
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
            x2: end.x, y2: end.y
        })
    }
    drawArrow(new Victor(40, 160),new Victor(10, 120),new Victor(40, 90));


    $('canvas').setLayer('mainLayer', {
        visible: true//ここまでの処理が終わって初めて描画する
    }).drawLayers();
});

