
import sheetmanage from './sheetmanage';
import server from './server';
import { sheetselectlistitemHTML, sheetselectlistHTML, keycode } from './constant';
import {
    replaceHtml,
    mouseclickposition,
} from '../utils/util';
import { getSheetIndex } from '../methods/get';
import { isEditMode } from '../global/validate';
import formula from '../global/formula';
import cleargridelement from '../global/cleargridelement';
import tooltip from '../global/tooltip';
    selectTextDom
import {selectTextDom} from '../global/cursorPos';
import locale from '../locale/locale';
import Store from '../store';
import tibetsheetsConfigsetting from './tibetsheetsConfigsetting';
import {pagerInit} from '../global/api'
import method from '../global/method';


//表格底部名称栏区域 相关事件（增、删、改、隐藏显示、颜色等等）
let isInitialSheetConfig = false, tibetsheetscurrentSheetitem = null, jfdbclicklagTimeout = null,oldSheetFileName = "";
function showsheetconfigmenu() {
    if (!isInitialSheetConfig) {
        isInitialSheetConfig = true;
        const _locale = locale();
        let locale_toolbar = _locale.toolbar;
        $("#tibetsheetssheetconfigcolorur").spectrum({
            showPalette: true,
            preferredFormat: "hex",
            clickoutFiresChange: false,
            showInitial: true,
            showInput: true,
            flat: true,
            hideAfterPaletteSelect: false,
            showSelectionPalette: true,
            maxPaletteSize: 10,
            cancelText: _locale.sheetconfig.cancelText,
            chooseText: _locale.sheetconfig.chooseText,
            togglePaletteMoreText: locale_toolbar.toolMore,
            togglePaletteLessText: locale_toolbar.toolLess,
            clearText: locale_toolbar.clearText,
            noColorSelectedText: locale_toolbar.noColorSelectedText,
            palette: [["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)"], ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)"], ["rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)"], ["rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)"], ["rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)", "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)"], ["rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"], ["#c1232b", "#27727b", "#fcce10", "#e87c25", "#b5c334", "#fe8463", "#9bca63", "#fad860", "#f3a43b", "#60c0dd", "#d7504b", "#c6e579", "#f4e001", "#f0805a", "#26c0c0", "#c12e34", "#e6b600", "#0098d9", "#2b821d", "#005eaa", "#339ca8", "#cda819", "#32a487", "#3fb1e3", "#6be6c1", "#626c91", "#a0a7e6", "#c4ebad", "#96dee8"]],
            change: function (color) {
                let $input = $(this);
                if (color != null) {
                    color = color.toHexString();
                }
                else {
                    color = "rgb(0, 0, 0)";
                }

                let oldcolor = null;
                if(tibetsheetscurrentSheetitem.find(".tibetsheets-sheets-item-color").length>0){
                    oldcolor = tibetsheetscurrentSheetitem.find(".tibetsheets-sheets-item-color").css("background-color");
                }

                tibetsheetscurrentSheetitem.find(".tibetsheets-sheets-item-color").remove();
                tibetsheetscurrentSheetitem.append('<div class="tibetsheets-sheets-item-color" style=" position: absolute; width: 100%; height: 3px; bottom: 0px; left: 0px; background-color: ' + color + ';"></div>');
                let index = getSheetIndex(Store.currentSheetIndex);
                Store.tibetsheetsfile[index].color = color;
                server.saveParam("all", Store.currentSheetIndex, color, { "k": "color" });

                if (Store.clearjfundo) {
                    let redo = {};
                    redo["type"] = "sheetColor";
                    redo["sheetIndex"] = Store.currentSheetIndex;

                    redo["oldcolor"] = oldcolor;
                    redo["color"] = color;

                    Store.jfundo.length = 0;
                    Store.jfredo.push(redo);
                }
            }
        });

        $("#tibetsheetssheetconfigcolorreset").click(function () {
            let oldcolor = null;
            if(tibetsheetscurrentSheetitem.find(".tibetsheets-sheets-item-color").length>0){
                oldcolor = tibetsheetscurrentSheetitem.find(".tibetsheets-sheets-item-color").css("background-color");
            }

            tibetsheetscurrentSheetitem.find(".tibetsheets-sheets-item-color").remove();
            let index = getSheetIndex(Store.currentSheetIndex);
            Store.tibetsheetsfile[index].color = null;
            server.saveParam("all", Store.currentSheetIndex, null, { "k": "color" } );

            if (Store.clearjfundo) {
                let redo = {};
                redo["type"] = "sheetColor";
                redo["sheetIndex"] = Store.currentSheetIndex;

                redo["oldcolor"] = oldcolor;
                redo["color"] = null;

                Store.jfundo.length = 0;
                Store.jfredo.push(redo);
            }
        });
    }

    let index = getSheetIndex(Store.currentSheetIndex);
    if (Store.tibetsheetsfile[index].color != null && Store.tibetsheetsfile[index].color.length > 0) {
        $("#tibetsheetssheetconfigcolorur").spectrum("set", Store.tibetsheetsfile[index].color);

    }

    $("#tibetsheetssheetconfigcolorur").parent().find("span, div, button, input, a").addClass("tibetsheets-mousedown-cancel");

    // 如果全部按钮设置了隐藏，则不显示
    const config = tibetsheetsConfigsetting.sheetRightClickConfig;
    // if(!config.delete && !config.copy && !config.rename && !config.color && !config.hide && !config.move){
    if(Object.values(config).every(ele=> !ele)){
        return;
    }

    setTimeout(function(){
        mouseclickposition($("#tibetsheets-rightclick-sheet-menu"), tibetsheetscurrentSheetitem.offset().left + tibetsheetscurrentSheetitem.width(), tibetsheetscurrentSheetitem.offset().top - 18, "leftbottom");
    },1);
}

let tibetsheetssheetrightclick = function ($t, $cur, e) {
    clearTimeout(jfdbclicklagTimeout);
    if ($cur.hasClass("tibetsheets-sheets-item-name") && $cur.attr("contenteditable") == "true") {
        return;
    }
    if (formula.rangestart || formula.rangedrag_column_start || formula.rangedrag_row_start || formula.israngeseleciton()) {
        setTimeout(function () {
            formula.setCaretPosition(formula.rangeSetValueTo.get(0), 0, formula.rangeSetValueTo.text().length);
            formula.createRangeHightlight();
            $("#tibetsheets-input-box-index").find(".tibetsheets-input-box-index-sheettxt").remove().end().prepend("<span class='tibetsheets-input-box-index-sheettxt'>" + sheetmanage.getSheetName(formula.rangetosheet) + "!</span>").show();
            $("#tibetsheets-input-box-index").css({"left": $("#tibetsheets-input-box").css("left"), "top": (parseInt($("#tibetsheets-input-box").css("top")) - 20) + "px", "z-index": $("#tibetsheets-input-box").css("z-index")});
        }, 1);
    }
    else {
        //保存正在编辑的单元格内容
        if (parseInt($("#tibetsheets-input-box").css("top")) > 0) {
            formula.updatecell(Store.tibetsheetsCellUpdate[0], Store.tibetsheetsCellUpdate[1]);
        }

        $("#tibetsheets-input-box").removeAttr("style");
        $("#tibetsheets-formula-functionrange .tibetsheets-formula-functionrange-highlight").remove();
    }

    $("#tibetsheets-sheet-area div.tibetsheets-sheets-item").removeClass("tibetsheets-sheets-item-active");
    $t.addClass("tibetsheets-sheets-item-active");
    cleargridelement(e);
    sheetmanage.changeSheet($t.data("index"));

    $("#tibetsheets-sheet-list, #tibetsheets-rightclick-sheet-menu").hide();

    if ($cur.hasClass("tibetsheets-sheets-item-menu") || $cur.hasClass("fa-sort-desc") || e.which == "3") {
        tibetsheetscurrentSheetitem = $cur.closest(".tibetsheets-sheets-item");
        showsheetconfigmenu();
    }
}


export function initialSheetBar(){
    const _locale = locale();
    const locale_sheetconfig = _locale.sheetconfig;
    isInitialSheetConfig = false

    $("#tibetsheets-sheet-area").on("mousedown", "div.tibetsheets-sheets-item", function (e) {
        if(isEditMode()){
            // alert("非编辑模式下不允许该操作！");
            return;
        }

        let $t = $(this), $cur = $(e.target), $item = $cur.closest(".tibetsheets-sheets-item");

        if (e.which == "3") {
            setTimeout(() => {
                tibetsheetssheetrightclick($t, $cur, e);
                tibetsheetscurrentSheetitem = $item;
                showsheetconfigmenu();
                return;
            }, 0);
        }

        if ($item.hasClass("tibetsheets-sheets-item-active") && $item.find(".tibetsheets-sheets-item-name").attr("contenteditable") == "false") {
            jfdbclicklagTimeout = setTimeout(function () {
                Store.tibetsheets_sheet_move_status = true;
                Store.tibetsheets_sheet_move_data = {};
                Store.tibetsheets_sheet_move_data.widthlist = [];

                $("#tibetsheets-sheet-area div.tibetsheets-sheets-item:visible").each(function (i) {
                    if (i == 0) {
                        Store.tibetsheets_sheet_move_data.widthlist.push(parseInt($(this).outerWidth()));
                    }
                    else {
                        Store.tibetsheets_sheet_move_data.widthlist.push(parseInt($(this).outerWidth()) + Store.tibetsheets_sheet_move_data.widthlist[i - 1]);
                    }
                });

                Store.tibetsheets_sheet_move_data.curindex = $("#tibetsheets-sheet-area div.tibetsheets-sheets-item").index($item);
                let x = e.pageX;
                Store.tibetsheets_sheet_move_data.curleft = x - $item.offset().left;
                Store.tibetsheets_sheet_move_data.pageX = x;
                Store.tibetsheets_sheet_move_data.activeobject = $item;
                Store.tibetsheets_sheet_move_data.cursorobject = $cur;
                let $itemclone = $item.clone().css("visibility", "hidden").attr("id", "tibetsheets-sheets-item-clone");
                $item.after($itemclone);
                $item.css({ "position": "absolute", "opacity": 0.8, "cursor": "move", "transition": "initial", "z-index": 10 });
            }, 200);
        }
    }).on("click", "div.tibetsheets-sheets-item", function (e) {

        if(isEditMode()){
            // alert("非编辑模式下不允许该操作！");
            return;
        }

        let $t = $(this), $cur = $(e.target);
        tibetsheetssheetrightclick($t, $cur, e);
        server.keepHighLightBox()
    });

    let tibetsheetssheetnameeditor = function ($t) {
        if(Store.allowEdit===false){
            return;
        }
        $t.attr("contenteditable", "true").addClass("tibetsheets-mousedown-cancel").data("oldtxt", $t.text());

        setTimeout(function () {
            selectTextDom($t.get(0));
        }, 1);
    }

    $("#tibetsheets-sheet-area").on("dblclick", "span.tibetsheets-sheets-item-name", function (e) {
        tibetsheetssheetnameeditor($(this));
    });

    let compositionFlag = true;
    $("#tibetsheets-sheet-area").on("compositionstart", "span.tibetsheets-sheets-item-name",  ()=> compositionFlag = false);
    $("#tibetsheets-sheet-area").on("compositionend", "span.tibetsheets-sheets-item-name", ()=> compositionFlag = true);
    $("#tibetsheets-sheet-area").on("input", "span.tibetsheets-sheets-item-name", function () {
        if(Store.allowEdit===false){
            return;
        }

        if(Store.limitSheetNameLength === false){
            return
        }

        let maxLength = Store.defaultSheetNameMaxLength;
        if(maxLength  === 0){
            return
        }

        setTimeout( ()=> {
            if (compositionFlag) {

                if ($(this).text().length >= maxLength) {  /* 检查：值是否越界 */
                    setTimeout(() => {
                        $(this).text($(this).text().substring(0, maxLength));

                        let range = window.getSelection();
                        range.selectAllChildren(this);
                        range.collapseToEnd();
                    }, 0);
                 }
            }
        }, 0);
    });

    $("#tibetsheets-sheet-area").on("blur", "span.tibetsheets-sheets-item-name", function (e) {
        if(Store.allowEdit===false){
            return;
        }

        let $t = $(this);
        let txt = $t.text(), oldtxt = $t.data("oldtxt");

        if(0 === $(this).text().length){
            tooltip.info("", locale_sheetconfig.sheetNamecannotIsEmptyError);
            $t.text(oldtxt).attr("contenteditable", "false");
            return;
        }

        if(txt.length>31 || txt.charAt(0)=="'" || txt.charAt(txt.length-1)=="'" || /[：\:\\\/？\?\*\[\]]+/.test(txt)){
            tooltip.info("", locale_sheetconfig.sheetNameSpecCharError);
            $t.text(oldtxt).attr("contenteditable", "false");
            return;
        }

        let index = getSheetIndex(Store.currentSheetIndex);
        for (let i = 0; i < Store.tibetsheetsfile.length; i++) {
            if (index != i && Store.tibetsheetsfile[i].name == txt) {
                if(isEditMode()){
                    alert(locale_sheetconfig.tipNameRepeat);
                }
                else{
                    tooltip.info("", locale_sheetconfig.tipNameRepeat);
                }
                $t.text(oldtxt).attr("contenteditable", "false");
                return;
            }
        }

        sheetmanage.sheetArrowShowAndHide();

        Store.tibetsheetsfile[index].name = txt;
        server.saveParam("all", Store.currentSheetIndex, txt, { "k": "name" });

        $t.attr("contenteditable", "false").removeClass("tibetsheets-mousedown-cancel");

        if (Store.clearjfundo) {
            let redo = {};
            redo["type"] = "sheetName";
            redo["sheetIndex"] = Store.currentSheetIndex;

            redo["oldtxt"] = oldtxt;
            redo["txt"] = txt;

            Store.jfundo.length = 0;
            Store.jfredo.push(redo);
        }
        // 钩子： sheetEditNameAfter
        method.createHookFunction('sheetEditNameAfter', {
            i: Store.tibetsheetsfile[index].index,
            oldName: oldtxt, newName: txt 
        });
    });

    $("#tibetsheets-sheet-area").on("keydown", "span.tibetsheets-sheets-item-name", function (e) {
        if(Store.allowEdit===false){
            return;
        }
        let kcode = e.keyCode;
        let $t = $(this);
        if (kcode == keycode.ENTER) {
            let index = getSheetIndex(Store.currentSheetIndex);
            oldSheetFileName = Store.tibetsheetsfile[index].name || oldSheetFileName;
            Store.tibetsheetsfile[index].name = $t.text();
            $t.attr("contenteditable", "false");
        }
    });

    $("#tibetsheetssheetconfigrename").click(function () {
        var $name = tibetsheetscurrentSheetitem.find("span.tibetsheets-sheets-item-name")
        // 钩子 sheetEditNameBefore
        if (!method.createHookFunction('sheetEditNameBefore', { i: tibetsheetscurrentSheetitem.data('index') , name: $name.text() })){
            return;
        }
        tibetsheetssheetnameeditor(tibetsheetscurrentSheetitem.find("span.tibetsheets-sheets-item-name"));
        $("#tibetsheets-input-box").removeAttr("style");
        $("#tibetsheets-sheet-list, #tibetsheets-rightclick-sheet-menu").hide();
    });

    $("#tibetsheetssheetconfigshow").click(function () {
        $("#tibetsheets-sheets-m").click();
        $("#tibetsheets-input-box").removeAttr("style");
        $("#tibetsheets-rightclick-sheet-menu").hide();
    });

    $("#tibetsheetssheetconfigmoveleft").click(function () {
        if (tibetsheetscurrentSheetitem.prevAll(":visible").length > 0) {
            tibetsheetscurrentSheetitem.insertBefore(tibetsheetscurrentSheetitem.prevAll(":visible").eq(0));
            sheetmanage.reOrderAllSheet();
        }
        $("#tibetsheets-input-box").removeAttr("style");
        $("#tibetsheets-sheet-list, #tibetsheets-rightclick-sheet-menu").hide();
    });

    $("#tibetsheetssheetconfigmoveright").click(function () {
        if (tibetsheetscurrentSheetitem.nextAll(":visible").length > 0) {
            tibetsheetscurrentSheetitem.insertAfter(tibetsheetscurrentSheetitem.nextAll(":visible").eq(0));
            sheetmanage.reOrderAllSheet();
        }
        $("#tibetsheets-input-box").removeAttr("style");
        $("#tibetsheets-sheet-list, #tibetsheets-rightclick-sheet-menu").hide();
    });

    $("#tibetsheetssheetconfigdelete").click(function (e) {
        $("#tibetsheets-sheet-list, #tibetsheets-rightclick-sheet-menu").hide();

        if($("#tibetsheets-sheet-container-c .tibetsheets-sheets-item:visible").length <= 1){
            if(isEditMode()){
                alert(locale_sheetconfig.noMoreSheet);
            }
            else{
                tooltip.info(locale_sheetconfig.noMoreSheet, "");
            }

            return;
        }

        let index = getSheetIndex(Store.currentSheetIndex);

        tooltip.confirm(locale_sheetconfig.confirmDelete+"【" + Store.tibetsheetsfile[index].name + "】？", "<span style='color:#9e9e9e;font-size:12px;'>"+locale_sheetconfig.redoDelete+"</span>", function () {
            sheetmanage.deleteSheet(tibetsheetscurrentSheetitem.data("index"));
        }, null);

        $("#tibetsheets-input-box").removeAttr("style");
    });

    $("#tibetsheetssheetconfigcopy").click(function (e) {
        sheetmanage.copySheet(tibetsheetscurrentSheetitem.data("index"), e);
        $("#tibetsheets-input-box").removeAttr("style");
        $("#tibetsheets-sheet-list, #tibetsheets-rightclick-sheet-menu").hide();
    });

    $("#tibetsheetssheetconfighide").click(function () {
        if ($("#tibetsheets-sheet-area div.tibetsheets-sheets-item:visible").length == 1) {
            if(isEditMode()){
                alert(locale_sheetconfig.noHide);
            }
            else{
                tooltip.info("", locale_sheetconfig.noHide);
            }
            return;
        }
        sheetmanage.setSheetHide(tibetsheetscurrentSheetitem.data("index"));
        $("#tibetsheets-input-box").removeAttr("style");
        $("#tibetsheets-sheet-list, #tibetsheets-rightclick-sheet-menu").hide();
    });

    $("#tibetsheets-sheets-add").click(function (e) {
        //保存正在编辑的单元格内容
        if (parseInt($("#tibetsheets-input-box").css("top")) > 0) {
            formula.updatecell(Store.tibetsheetsCellUpdate[0], Store.tibetsheetsCellUpdate[1]);
        }

        sheetmanage.addNewSheet(e);
        sheetmanage.locationSheet();
        $("#tibetsheets-input-box").removeAttr("style");
    });

    let sheetscrollani = null, sheetscrollstart = 0, sheetscrollend = 0, sheetscrollstep = 150;
    $("#tibetsheets-sheets-leftscroll").click(function () {
        let $c = $("#tibetsheets-sheet-container-c");
        sheetscrollstart = $c.scrollLeft();
        sheetscrollend = $c.scrollLeft() - sheetscrollstep;

        if (sheetscrollend <= 0) {
            $("#tibetsheets-sheet-container .docs-sheet-fade-left").hide();
        }
        $("#tibetsheets-sheet-container .docs-sheet-fade-right").show();

        clearInterval(sheetscrollani);
        sheetscrollani = setInterval(function () {
            sheetscrollstart -= 4;
            $c.scrollLeft(sheetscrollstart);
            if (sheetscrollstart <= sheetscrollend) {
                clearInterval(sheetscrollani);
            }
        }, 1);
    });

    $("#tibetsheets-sheets-rightscroll").click(function () {
        let $c = $("#tibetsheets-sheet-container-c");
        sheetscrollstart = $c.scrollLeft();
        sheetscrollend = $c.scrollLeft() + sheetscrollstep;

        if (sheetscrollstart > 0) {
            $("#tibetsheets-sheet-container .docs-sheet-fade-right").hide();
        }
        $("#tibetsheets-sheet-container .docs-sheet-fade-left").show();

        clearInterval(sheetscrollani);
        sheetscrollani = setInterval(function () {
            sheetscrollstart += 4;
            $c.scrollLeft(sheetscrollstart);
            if (sheetscrollstart >= sheetscrollend) {
                clearInterval(sheetscrollani);
            }
        }, 1);
    });

    let initialOpenSheet = true;
    $("#tibetsheets-sheets-m").click(function (e) {
        //保存正在编辑的单元格内容
        if (parseInt($("#tibetsheets-input-box").css("top")) > 0) {
            formula.updatecell(Store.tibetsheetsCellUpdate[0], Store.tibetsheetsCellUpdate[1]);
        }

        $("#tibetsheets-sheet-list").html("");

        let item = "";
        for (let i = 0; i < Store.tibetsheetsfile.length; i++) {
            let f = Store.tibetsheetsfile[i], icon = '', style = "";
            if (f["status"] == 1) {
                icon = '<i class="fa fa-check" aria-hidden="true"></i>';
            }

            if (f["hide"] == 1) {
                icon = '<i class="fa fa-low-vision" aria-hidden="true"></i>';
                style += "color:#BBBBBB;";
            }

            if (f["color"] != null && f["color"].length > 0) {
                style += "border-right:4px solid " + f["color"] + ";";
            }

            item += replaceHtml(sheetselectlistitemHTML, { "index": f["index"], "name": f["name"], "icon": icon, "style": style });
        }

        if (initialOpenSheet) {
            $("#" + Store.container).append(replaceHtml(sheetselectlistHTML, { "item": item }));
            $("#tibetsheets-sheet-list").on("click", ".tibetsheets-cols-menuitem", function (e) {
                if(isEditMode()){
                    // tooltip.info("提示", "图表编辑模式下不允许该操作！");
                    alert(locale_sheetconfig.chartEditNoOpt);
                    return;
                }

                let $item = $(this), index = $item.data("index");

                if ($item.data("index") != Store.currentSheetIndex) {
                    sheetmanage.setSheetShow(index);
                    sheetmanage.locationSheet();
                }
                server.keepHighLightBox()
            });

            initialOpenSheet = false;
        }
        else {
            $("#tibetsheets-sheet-list").html(item);
        }

        let $t = $("#tibetsheets-sheet-list");

        let left = $(this).offset().left - $('#' + Store.container).offset().left;
        let bottom = $(this).height() + $('#tibetsheets-sta-content').height() + 12;
        $t.css({left: left + 'px', bottom: bottom + 'px'}).show();
        $("#tibetsheets-input-box").removeAttr("style");
    });

    // 初始化分页器
    if (tibetsheetsConfigsetting.pager) {
        pagerInit(tibetsheetsConfigsetting.pager)
    }

}
