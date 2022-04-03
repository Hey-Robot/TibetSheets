import menuButton from './menuButton';
import {tibetsheetsupdateCell} from './updateCell';
import { keycode } from './constant';
import { 
    tibetsheetsMoveHighlightCell,
} from './sheetMove';

import insertFormula from './insertFormula';
import { 
    rowLocation, 
    colLocation, 
    mouseposition 
} from '../global/location';
import { isEditMode } from '../global/validate';
import formula from '../global/formula';
import tooltip from '../global/tooltip';
import locale from '../locale/locale';
import Store from '../store';

export function formulaBarInitial(){
    //公式栏处理

    const _locale = locale();
    const locale_formula= _locale.formula;

    $("#tibetsheets-functionbox-cell").focus(function () {
        if(isEditMode()){//此模式下禁用公式栏
            return;
        }

        if(Store.tibetsheets_select_save.length > 0){
            let last = Store.tibetsheets_select_save[Store.tibetsheets_select_save.length - 1];

            let row_index = last["row_focus"], col_index = last["column_focus"];
            
            // let $input = $("#tibetsheets-rich-text-editor"),value = $input.text();
            // if(value) {
            //     formula.updatecell(row_index, col_index);
            // }
            tibetsheetsupdateCell(row_index, col_index, Store.flowdata, null, true);
            formula.rangeResizeTo = $("#tibetsheets-functionbox-cell");
        }
    }).keydown(function (event) {
        if(isEditMode()){//此模式下禁用公式栏
            return;
        }

        let ctrlKey = event.ctrlKey;
        let altKey = event.altKey;
        let shiftKey = event.shiftKey;
        let kcode = event.keyCode;
        let $inputbox = $("#tibetsheets-input-box");

        if (kcode == keycode.ENTER && parseInt($inputbox.css("top")) > 0) {
            if ($("#tibetsheets-formula-search-c").is(":visible") && formula.searchFunctionCell != null) {
                formula.searchFunctionEnter($("#tibetsheets-formula-search-c").find(".tibetsheets-formula-search-item-active"));
            }
            else {
                formula.updatecell(Store.tibetsheetsCellUpdate[0], Store.tibetsheetsCellUpdate[1]);
                Store.tibetsheets_select_save = [{ "row": [Store.tibetsheetsCellUpdate[0], Store.tibetsheetsCellUpdate[0]], "column": [Store.tibetsheetsCellUpdate[1], Store.tibetsheetsCellUpdate[1]], "row_focus": Store.tibetsheetsCellUpdate[0], "column_focus": Store.tibetsheetsCellUpdate[1] }];
                tibetsheetsMoveHighlightCell("down", 1, "rangeOfSelect");
                //$("#tibetsheets-functionbox-cell").blur();
                $("#tibetsheets-rich-text-editor").focus();
            }
            event.preventDefault();
        }
        else if (kcode == keycode.ESC && parseInt($inputbox.css("top")) > 0) {
            formula.dontupdate();
            tibetsheetsMoveHighlightCell("down", 0, "rangeOfSelect");
            //$("#tibetsheets-functionbox-cell").blur();
            $("#tibetsheets-rich-text-editor").focus();
            event.preventDefault();
        }
        else if (kcode == keycode.F4 && parseInt($inputbox.css("top")) > 0) {
            formula.setfreezonFuc(event);
            event.preventDefault();
        }
        else if (kcode == keycode.UP && parseInt($inputbox.css("top")) > 0) {
            if ($("#tibetsheets-formula-search-c").is(":visible")) {
                let $up = $("#tibetsheets-formula-search-c").find(".tibetsheets-formula-search-item-active").prev();
                if ($up.length == 0) {
                    $up = $("#tibetsheets-formula-search-c").find(".tibetsheets-formula-search-item").last();
                }
                $("#tibetsheets-formula-search-c").find(".tibetsheets-formula-search-item").removeClass("tibetsheets-formula-search-item-active");
                $up.addClass("tibetsheets-formula-search-item-active");
                event.preventDefault();
            }
        }
        else if (kcode == keycode.DOWN && parseInt($inputbox.css("top")) > 0) {
            if ($("#tibetsheets-formula-search-c").is(":visible")) {
                let $up = $("#tibetsheets-formula-search-c").find(".tibetsheets-formula-search-item-active").next();
                if ($up.length == 0) {
                    $up = $("#tibetsheets-formula-search-c").find(".tibetsheets-formula-search-item").first();
                }
                $("#tibetsheets-formula-search-c").find(".tibetsheets-formula-search-item").removeClass("tibetsheets-formula-search-item-active");
                $up.addClass("tibetsheets-formula-search-item-active");
                event.preventDefault();
            }
        }
        else if (kcode == keycode.LEFT && parseInt($inputbox.css("top")) > 0) {
            formula.rangeHightlightselected($("#tibetsheets-functionbox-cell"));
        }
        else if (kcode == keycode.RIGHT && parseInt($inputbox.css("top")) > 0) {
            formula.rangeHightlightselected($("#tibetsheets-functionbox-cell"));
        }
        else if (!((kcode >= 112 && kcode <= 123) || kcode <= 46 || kcode == 144 || kcode == 108 || event.ctrlKey || event.altKey || (event.shiftKey && (kcode == 37 || kcode == 38 || kcode == 39 || kcode == 40))) || kcode == 8 || kcode == 32 || kcode == 46 || (event.ctrlKey && kcode == 86)) {
            formula.functionInputHanddler($("#tibetsheets-rich-text-editor"), $("#tibetsheets-functionbox-cell"), kcode);
        }
    }).click(function () {
        if(isEditMode()){//此模式下禁用公式栏
            return;
        }

        formula.rangeHightlightselected($("#tibetsheets-functionbox-cell"));
    });

    //公式栏 取消（X）按钮
    $("#tibetsheets-wa-functionbox-cancel").click(function () {
        if (!$(this).hasClass("tibetsheets-wa-calculate-active")) {
            return;
        }
        //若有参数弹出框，隐藏
        if($("#tibetsheets-search-formula-parm").is(":visible")){
            $("#tibetsheets-search-formula-parm").hide();
        }
        //若有参数选取范围弹出框，隐藏
        if($("#tibetsheets-search-formula-parm-select").is(":visible")){
            $("#tibetsheets-search-formula-parm-select").hide();
        }

        formula.dontupdate();
        tibetsheetsMoveHighlightCell("down", 0, "rangeOfSelect");
    });

    //公式栏 确认（）按钮
    $("#tibetsheets-wa-functionbox-confirm").click(function () {
        if (!$(this).hasClass("tibetsheets-wa-calculate-active")) {
            return;
        }
        //若有参数弹出框，隐藏
        if($("#tibetsheets-search-formula-parm").is(":visible")){
            $("#tibetsheets-search-formula-parm").hide();
        }
        //若有参数选取范围弹出框，隐藏
        if($("#tibetsheets-search-formula-parm-select").is(":visible")){
            $("#tibetsheets-search-formula-parm-select").hide();
        }

        formula.updatecell(Store.tibetsheetsCellUpdate[0], Store.tibetsheetsCellUpdate[1]);
        tibetsheetsMoveHighlightCell("down", 0, "rangeOfSelect");
    });

    //公式栏 fx按钮
    $("#tibetsheets-wa-functionbox-fx").click(function () {
        //点击函数查找弹出框
        if(Store.tibetsheets_select_save.length == 0){
            if(isEditMode()){
                alert(locale_formula.tipSelectCell);
            }
            else{
                tooltip.info(locale_formula.tipSelectCell,"");
            }

            return;
        }

        let last = Store.tibetsheets_select_save[Store.tibetsheets_select_save.length - 1];

        let row_index = last["row_focus"], col_index = last["column_focus"];

        tibetsheetsupdateCell(row_index, col_index, Store.flowdata);
        
        let cell = Store.flowdata[row_index][col_index];
        if(cell != null && cell.f != null){
            //单元格有计算
            let functionStr = formula.getfunctionParam(cell.f);
            if(functionStr.fn != null){
                //有函数公式
                insertFormula.formulaParmDialog(functionStr.fn, functionStr.param);
            }
            else{
                //无函数公式
                insertFormula.formulaListDialog();
            }
        }
        else{
            //单元格无计算
            $("#tibetsheets-rich-text-editor").html('<span dir="auto" class="tibetsheets-formula-text-color">=</span>');
            $("#tibetsheets-functionbox-cell").html($("#tibetsheets-rich-text-editor").html());
            insertFormula.formulaListDialog();
        }

        insertFormula.init();
    });

    //公式选区操作
    $("#tibetsheets-formula-functionrange").on("mousedown", ".tibetsheets-copy", function (event) {
        formula.rangeMove = true;
        Store.tibetsheets_scroll_status = true;
        formula.rangeMoveObj = $(this).parent();
        formula.rangeMoveIndex = $(this).parent().attr("rangeindex");
        
        let mouse = mouseposition(event.pageX, event.pageY);
        let x = mouse[0] + $("#tibetsheets-cell-main").scrollLeft();
        let y = mouse[1] + $("#tibetsheets-cell-main").scrollTop();
        $("#tibetsheets-formula-functionrange-highlight-" + formula.rangeMoveIndex).find(".tibetsheets-selection-copy-hc").css("opacity", 0.13);
        
        let type = $(this).data("type");
        if (type == "top") {
            y += 3;
        }
        else if (type == "right") {
            x -= 3;
        }
        else if (type == "bottom") {
            y -= 3;
        }
        else if (type == "left") {
            x += 3;
        }

        let row_index = rowLocation(y)[2];
        let col_index = colLocation(x)[2];

        formula.rangeMovexy = [row_index, col_index];
        $("#tibetsheets-sheettable").css("cursor", "move");
        event.stopPropagation();
    });

    $("#tibetsheets-formula-functionrange").on("mousedown", ".tibetsheets-highlight", function (event) {
        formula.rangeResize = $(this).data("type");//开始状态resize
        formula.rangeResizeIndex = $(this).parent().attr("rangeindex");
        
        let mouse = mouseposition(event.pageX, event.pageY), 
            scrollLeft = $("#tibetsheets-cell-main").scrollLeft(), 
            scrollTop = $("#tibetsheets-cell-main").scrollTop();
        let x = mouse[0] + scrollLeft;
        let y = mouse[1] + scrollTop;
        formula.rangeResizeObj = $(this).parent();
        $("#tibetsheets-formula-functionrange-highlight-" + formula.rangeResizeIndex).find(".tibetsheets-selection-copy-hc").css("opacity", 0.13);
        
        if (formula.rangeResize == "lt") {
            x += 3;
            y += 3;
        }
        else if (formula.rangeResize == "lb") {
            x += 3;
            y -= 3;
        }
        else if (formula.rangeResize == "rt") {
            x -= 3;
            y += 3;
        }
        else if (formula.rangeResize == "rb") {
            x -= 3;
            y -= 3;
        }

        let row_location = rowLocation(y), 
            row = row_location[1], 
            row_pre = row_location[0], 
            row_index = row_location[2];
        let col_location = colLocation(x), 
            col = col_location[1], 
            col_pre = col_location[0], 
            col_index = col_location[2];

        let position = formula.rangeResizeObj.position();
        formula.rangeResizexy = [
            col_pre, 
            row_pre, 
            formula.rangeResizeObj.width(), 
            formula.rangeResizeObj.height(), 
            position.left + scrollLeft, 
            position.top + scrollTop, col, row
        ];
        formula.rangeResizeWinH = $("#tibetsheets-cell-main")[0].scrollHeight;
        formula.rangeResizeWinW = $("#tibetsheets-cell-main")[0].scrollWidth;
        Store.tibetsheets_scroll_status = true;
        event.stopPropagation();
    });
}
