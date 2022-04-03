import { rowLocation, colLocation, mouseposition } from '../global/location';
import { selectHightlightShow } from './select';
import menuButton from './menuButton';
import tibetsheetsFreezen from './freezen';
import Store from '../store';

//设备是移动端
export default function mobileinit(){
    //去除滚动条
    Store.cellMainSrollBarSize = 0;

    //滑动滚动表格
    let tibetsheets_touchmove_status = false,
        tibetsheets_touchmove_startPos = {},
        tibetsheets_touchhandle_status = false,
        _scrollTimer = null;
    $(document).on("touchstart", "#tibetsheets-grid-window-1", function(event){
        clearInterval(_scrollTimer);//clear timer
        tibetsheets_touchmove_status = true;

        let touch = event.originalEvent.targetTouches[0];
        tibetsheets_touchmove_startPos = {
            x: touch.pageX,
            y: touch.pageY,
            vy:0, //vy可以理解为滑动的力度
            moveType:"y",
        }
    })
    $(document).on("touchmove", "#tibetsheets-grid-window-1", function(event){
        if(event.originalEvent.targetTouches.length > 1 || (event.scale && event.scale !== 1)){
            return;
        }

        let touch = event.originalEvent.targetTouches[0];

        if(tibetsheets_touchmove_status){//滚动
            let slideX = touch.pageX - tibetsheets_touchmove_startPos.x;
            let slideY = touch.pageY - tibetsheets_touchmove_startPos.y;

            tibetsheets_touchmove_startPos.x = touch.pageX;
            tibetsheets_touchmove_startPos.y = touch.pageY;

            let scrollLeft = $("#tibetsheets-scrollbar-x").scrollLeft();
            let scrollTop = $("#tibetsheets-scrollbar-y").scrollTop();

            // console.log("start",scrollTop, slideY,touch.pageY);

            scrollLeft -= slideX;
            scrollTop -= slideY;

            // console.log(touch,touch.pageY, tibetsheets_touchmove_startPos.y, slideY);

            if(scrollLeft < 0){
                scrollLeft = 0;
            }

            if(scrollTop < 0){
                scrollTop = 0;
            }
            
            $("#tibetsheets-scrollbar-y").scrollTop(scrollTop);

            tibetsheets_touchmove_startPos.vy_y = slideY;
            tibetsheets_touchmove_startPos.scrollTop = scrollTop;

            $("#tibetsheets-scrollbar-x").scrollLeft(scrollLeft);

            tibetsheets_touchmove_startPos.vy_x = slideX;

            tibetsheets_touchmove_startPos.scrollLeft = scrollLeft;
   

        }
        else if(tibetsheets_touchhandle_status){//选区
            let mouse = mouseposition(touch.pageX, touch.pageY);
            let x = mouse[0] + $("#tibetsheets-cell-main").scrollLeft();
            let y = mouse[1] + $("#tibetsheets-cell-main").scrollTop();

            let row_location = rowLocation(y), 
                row = row_location[1], 
                row_pre = row_location[0], 
                row_index = row_location[2];
            let col_location = colLocation(x), 
                col = col_location[1], 
                col_pre = col_location[0], 
                col_index = col_location[2];

            let last = $.extend(true, {}, Store.tibetsheets_select_save[Store.tibetsheets_select_save.length - 1]);

            let top = 0, height = 0, rowseleted = [];
            if (last.top > row_pre) {
                top = row_pre;
                height = last.top + last.height - row_pre;

                if(last.row[1] > last.row_focus){
                    last.row[1] = last.row_focus;
                }

                rowseleted = [row_index, last.row[1]];
            }
            else if (last.top == row_pre) {
                top = row_pre;
                height = last.top + last.height - row_pre;
                rowseleted = [row_index, last.row[0]];
            }
            else {
                top = last.top;
                height = row - last.top - 1;

                if(last.row[0] < last.row_focus){
                    last.row[0] = last.row_focus;
                }

                rowseleted = [last.row[0], row_index];
            }

            let left = 0, width = 0, columnseleted = [];
            if (last.left > col_pre) {
                left = col_pre;
                width = last.left + last.width - col_pre;

                if(last.column[1] > last.column_focus){
                    last.column[1] = last.column_focus;
                }

                columnseleted = [col_index, last.column[1]];
            }
            else if (last.left == col_pre) {
                left = col_pre;
                width = last.left + last.width - col_pre;
                columnseleted = [col_index, last.column[0]];
            }
            else {
                left = last.left;
                width = col - last.left - 1;

                if(last.column[0] < last.column_focus){
                    last.column[0] = last.column_focus;
                }

                columnseleted = [last.column[0], col_index];
            }

            let changeparam = menuButton.mergeMoveMain(columnseleted, rowseleted, last, top, height, left, width);
            if(changeparam != null){
                columnseleted = changeparam[0];
                rowseleted= changeparam[1];
                top = changeparam[2];
                height = changeparam[3];
                left = changeparam[4];
                width = changeparam[5];
            }

            last["row"] = rowseleted;
            last["column"] = columnseleted;

            last["left_move"] = left;
            last["width_move"] = width;
            last["top_move"] = top;
            last["height_move"] = height;

            Store.tibetsheets_select_save[Store.tibetsheets_select_save.length - 1] = last;

            selectHightlightShow();
            
            tibetsheetsFreezen.scrollFreezen();
        }

        event.stopPropagation();
    })
    $(document).on("touchend", function(event){
        if(tibetsheets_touchmove_status){
            let vy_x = Math.abs(tibetsheets_touchmove_startPos.vy_x), friction_x = ((vy_x >> 31) * 2 + 1) * 0.25;

            let vy_y = Math.abs(tibetsheets_touchmove_startPos.vy_y), friction_y = ((vy_y >> 31) * 2 + 1) * 0.25;
            if(vy_x>0 || vy_y>0){
                _scrollTimer = setInterval(function () {//
                    vy_x -= friction_x;//力度按 惯性的大小递减
                    vy_y -= friction_y;//力度按 惯性的大小递减

                    if(vy_x<=0){
                        vy_x = 0;
                    }
                    if(vy_y<=0){
                        vy_y = 0;
                    }
         
                    if(tibetsheets_touchmove_startPos.vy_y>0){
                        tibetsheets_touchmove_startPos.scrollTop -= vy_y;
                    }
                    else{
                        tibetsheets_touchmove_startPos.scrollTop += vy_y;
                    }
            
                    $("#tibetsheets-scrollbar-y").scrollTop(tibetsheets_touchmove_startPos.scrollTop);
            
                    if(tibetsheets_touchmove_startPos.vy_x>0){
                        tibetsheets_touchmove_startPos.scrollLeft -= vy_x;
                    }
                    else{
                        tibetsheets_touchmove_startPos.scrollLeft += vy_x;
                    }
            
                    $("#tibetsheets-scrollbar-x").scrollLeft(tibetsheets_touchmove_startPos.scrollLeft);
         
                    if(vy_x<=0 && vy_y<=0){
                        clearInterval(_scrollTimer);
                    }
                }, 20); 
            }

        }
        tibetsheets_touchmove_status = false;
        // tibetsheets_touchmove_startPos = {};

        tibetsheets_touchhandle_status = false;
    })

    //滑动选择选区
    $(document).on("touchstart", ".tibetsheets-cs-touchhandle", function(event){
        tibetsheets_touchhandle_status = true;
        tibetsheets_touchmove_status = false;
        // console.log(1111111111);
        event.stopPropagation();
    })  

    //禁止微信下拉拖出微信背景
    document.addEventListener("touchmove", function(event){
        event.preventDefault();
    }, {
        passive: false
    })
}
