/**
 * Created by ryosuke on 2016/05/26.
 */
/*可視化領域描画処理*/
//$(function(){

    function drawMemoryState(data){

        //一度全て削除する
        $('canvas').clearCanvas();
        var alllayers = $('canvas').getLayers();
        for(var i=alllayers.length-1;0<=i;--i)
            $('canvas').removeLayer(alllayers[i]).drawLayers();


        $.jCanvas.defaults.fromCenter = false;//座標を図形の中央ではなく左上に
        $.jCanvas.defaults.layer = true;//図形のレイヤー処理を有効化(グループ処理)

        $('canvas').setLayer('mainLayer', {
            visible: false//高速化・ちらつき防止のため最終的な状態になるまで描画しない
        }).drawLayers();
        
        var origin = new Victor(50, 50);//図形描画の基準位置
        var nextPos = origin.clone();//次のRectの左上の位置

        var stacks = data.stacks;
        for (var i = 0, len = stacks.length; i < len; ++i) {
            drawStack(stacks[i]);//それぞれのスタックについて描画
        }


        function drawStack(stack) {
            var pos = nextPos.clone();//次の変数の左上の位置
            var memoryName = stack.name;//nameはその関数名など
            var variables = stack.variables;//変数一覧
            var numOfVars = variables.length;

            if (0 < numOfVars)//そのスタック内の変数を全て描画
            {
                drawText(memoryName, pos.x, pos.y, memoryName, memoryName);
                var heightOffset = 25;
                var borderHeight = heightOffset;
                var maxTypeWidth = 0;
                var maxNameWidth = 0;
                var maxValueWidth = 0;
                for (var i = 0; i < numOfVars; ++i) {
                    pos.addY(new Victor(0, heightOffset))
                    var v = variables[i];
                    var name = memoryName + "-" + v.name;//ユニークな名前: スタック名+変数名+列名+テキスト
                    drawVariable(v.type, pos.x, pos.y, name + "-type", memoryName, v.type + "-var");
                    var typeWidth = $("#display").getLayer(name + "-type" + "-text").width;

                    drawVariable(v.name, pos.x + typeWidth, pos.y, name + "-name", memoryName, "&&&" + v.name, name + "-var");
                    var nameWidth = $("#display").getLayer(name + "-name" + "-text").width;

                    drawVariable(v.value, pos.x + typeWidth + nameWidth, pos.y, name + "-value", memoryName, "Ox" + v.address.toString(16), name + "-var");
                    var valueWidth = Math.max($("#display").getLayer(name + "-value" + "-text").width,80);

                    //列を揃えるために最大幅を計算
                    maxTypeWidth = Math.max(maxTypeWidth, typeWidth);
                    maxNameWidth = Math.max(maxNameWidth, nameWidth);
                    maxValueWidth = Math.max(maxValueWidth, valueWidth);
                    borderHeight += heightOffset;
                    //構造体などの場合はネストして高さが*メンバ数になる
                }
                //各列の最大幅に合わせてx座標修正
                var memoryTextLayer = $("#display").getLayer(memoryName + "-text");
                var borderWidth = Math.max(memoryTextLayer.width, maxTypeWidth + maxNameWidth + maxValueWidth);
                memoryTextLayer.x = memoryTextLayer.x + (borderWidth / 2) - (memoryTextLayer.width / 2);
                for (var i = 0; i < numOfVars; ++i) {
                    var v = variables[i];
                    var name = memoryName + "-" + v.name;//ユニークな名前: スタック名+変数名+列名+テキスト
                    var leftPosX = $("#display").getLayer(name + "-type" + "-text").x;
                    $("#display").getLayer(name + "-name" + "-text").x = leftPosX + maxTypeWidth;
                    $("#display").getLayer(name + "-value" + "-text").x = leftPosX + maxTypeWidth + maxNameWidth;
                }

                //スタックを囲む四角形を描画
                var posTopLeft = nextPos.clone().add(new Victor(-5, -5));
                $("#display").drawRect({
                    strokeStyle: "black",
                    strokeWidth: 1,
                    x: posTopLeft.x,
                    y: posTopLeft.y,
                    width: borderWidth + 10,
                    height: borderHeight,
                    draggable: true,
                    name: memoryName + "-rect",
                    groups: [memoryName],
                    dragGroups: [memoryName],
                    click: function (layer) {
                        // Click a star to spin it
                        $(this).animateLayer(layer, {
                            rotate: '+=360'
                        })
                    }
                });


                function drawLine(start, end, name, groupname) {
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
                var start = new Victor(memoryRectLayer.x + maxTypeWidth + 5, memoryRectLayer.y + heightOffset);
                var end = start.clone().addY(new Victor(0, memoryRectLayer.height - heightOffset));
                drawLine(start, end, memoryName + "_" + 0 + "-colline", memoryName);
                drawLine(start.addX(new Victor(maxNameWidth, 0)), end.addX(new Victor(maxNameWidth, 0)), memoryName + "_" + 1 + "-colline", memoryName);
                //変数単位で横線を描画
                var lineLeft = posTopLeft.clone();
                var lineRight = lineLeft.clone().addX(new Victor(borderWidth + 10, 0));
                for (var i = 0; i < numOfVars; ++i) {
                    var start = lineLeft.addY(new Victor(0, heightOffset));
                    var end = lineRight.addY(new Victor(0, heightOffset));
                    var name = memoryName + "_" + i + "-rowline";
                    var groupname = memoryName;
                    drawLine(start, end, name, groupname);
                }
                nextPos = pos.addX(new Victor(borderWidth + 100, 0)).clone();
            }
        }

        function drawText(text, x, y, name, groupname) {
            $("#display").drawText({
                fillStyle: "black",
                strokeStyle: "black",
                strokeWidth: "0.5",
                x: x,
                y: y,
                fontSize: 14,
                fontFamily: "sans-serif",
                text: " " + text + " ",
                name: name + "-text",//スタック名-変数名-列名-text
                draggable: true,
                groups: [groupname],//スタック名,変数名
                dragGroups: [groupname]//スタック名,変数名
            });
        }

        function drawVariable(t, x, y, name, groupname, t2, group2) {
            $("#display").drawText({
                fillStyle: "black",
                strokeStyle: "black",
                strokeWidth: "0.5",
                x: x,
                y: y,
                fontSize: 14,
                fontFamily: "sans-serif",
                text: "   " + t + "   ",
                text2: "   " + t2 + "   ",
                name: name + "-text",//スタック名-変数名-列名-text
                draggable: true,
                groups: [groupname, group2],//スタック名,変数名
                dragGroups: [groupname],//スタック名,変数名
                click: function (layer) {
                    // Click a star to spin it
                    var group = $(this).getLayerGroup(group2);
                    //$('canvas').triggerLayerEvent('myLayer', 'click');
                    for (var i = 0; i < group.length; ++i) {
                        var _text = group[i].text;
                        var _text2 = group[i].text2;
                        _text2 = _text2.replace(" Ox", "0x");
                        _text2 = _text2.replace(" &&&", "&");
                        group[i].text = _text2;
                        group[i].text2 = _text;

                        $(this).setLayer(group[i], {
                            //text:_text2,
                            //text2:_text,
                        })
                    }
                }
            });
        }

        function drawArrow(start, mid, end, name, groupname) {
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
                name: name + "-arrow",
                groups: [groupname],
                dragGroups: [groupname]
            })
        }

        //アドレスから矢印描画
        for (var i = 0, memlen = stacks.length; i < memlen; ++i) {
            for (var j = 0, varlen = stacks[i].variables.length; j < varlen; ++j) {
                var val = stacks[i].variables[j];
                var isTypePtr = (val.type.indexOf('*') != -1);
                if (isTypePtr) {
                    var layerName = stacks[i].name + "-" + val.name + "-value" + "-text";
                    var fromValue = $("#display").getLayer(layerName);
                    var x = $("#display").getLayer(stacks[i].name + "-rect").x;
                    var y = fromValue.y + fromValue.height / 2;
                    var from = new Victor(x, y);

                    for (var i2 = 0, memlen2 = stacks.length; i2 < memlen2; ++i2) {
                        for (var j2 = 0, varlen2 = memory[i2].variables.length; j2 < varlen2; ++j2) {
                            var val2 = memory[i2].variables[j2];
                            if (val2.address == val.value) {
                                var layerName2 = memory[i2].name + "-" + val2.name + "-value" + "-text";
                                var fromValue2 = $("#display").getLayer(layerName2);
                                var x2 = $("#display").getLayer(memory[i2].name + "-rect").x;
                                var y2 = fromValue2.y + fromValue2.height / 2;
                                var to = new Victor(x2, y2);

                                var mid = new Victor((from.x + to.x) / 2, (from.y + to.y) / 2);
                                var dir = (to.clone().subtract(from.clone()));
                                var length = dir.length();
                                dir.normalize();
                                dir.rotateDeg(-90);
                                mid.add(dir.multiply(new Victor(length / 4, length / 4)));

                                var name = stacks[i].name + "-" + val.name + "-to-" + memory[i2].name + "-" + val2.name;
                                drawArrow(from, mid, to, name, stacks[i].name);//もう一つ必要
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

        return data;
    }
//});

