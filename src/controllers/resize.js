import tibetsheetsConfigsetting from './tibetsheetsConfigsetting';
import tibetsheetsFreezen from './freezen';
import { tibetsheetsrefreshgrid } from '../global/refresh';
import Store from '../store';
import locale from '../locale/locale';
import sheetmanage from './sheetmanage';
import tooltip from '../global/tooltip'
import { $$, getObjType, camel2split } from "../utils/util";
import { defaultToolbar, toolbarIdMap } from './toolbar';

let gridW = 0,
    gridH = 0;

export default function tibetsheetssizeauto(isRefreshCanvas=true) {
    if (!tibetsheetsConfigsetting.showinfobar) {
        Store.infobarHeight = 0;
        $("#tibetsheets_info_detail").hide();
    }
    else {
        $("#tibetsheets_info_detail").show();
        // Store.infobarHeight = 56;
        Store.infobarHeight = document.querySelector('#tibetsheets_info_detail').offsetHeight;
    }

    if (!!Store.toobarObject && !!Store.toobarObject.toobarElements && Store.toobarObject.toobarElements.length === 0) {
        $("#" + Store.container).find(".tibetsheets-wa-editor").hide();
        Store.toolbarHeight = 0;
    }
    else {
        $("#" + Store.container).find(".tibetsheets-wa-editor").show();
        // Store.toolbarHeight = 72;
        Store.toolbarHeight = document.querySelector('#' + Store.container +' .tibetsheets-wa-editor').offsetHeight;
    }

    // if (!tibetsheetsConfigsetting.showsheetbar) {
    //     $("#" + Store.container).find("#tibetsheets-sheet-area").hide();
    //     Store.sheetBarHeight = 0;
    // }
    // else {
    //     $("#" + Store.container).find("#tibetsheets-sheet-area").show();
    //     Store.sheetBarHeight = 31;
    // }


    customSheetbarConfig();

    // if (!tibetsheetsConfigsetting.showstatisticBar) {
    //     $("#" + Store.container).find(".tibetsheets-stat-area").hide();
    //     Store.statisticBarHeight = 0;
    // }
    // else {
    //     $("#" + Store.container).find(".tibetsheets-stat-area").show();
    //     Store.statisticBarHeight = 23;
    // }

    customStatisticBarConfig();

    // 公式栏
    const formulaEle = document.querySelector("#" + Store.container + ' .tibetsheets-wa-calculate');
    if (!tibetsheetsConfigsetting.sheetFormulaBar) {
        formulaEle.style.display = 'none';
        Store.calculatebarHeight = 0;
    }
    else {
        formulaEle.style.display = 'block';
        Store.calculatebarHeight = formulaEle.offsetHeight;
    }

    $("#" + Store.container).find(".tibetsheets-grid-container").css("top", Store.toolbarHeight + Store.infobarHeight + Store.calculatebarHeight);

    gridW = $("#" + Store.container).width();

    if(tibetsheetsConfigsetting.showConfigWindowResize){//数据透视表  图表  交替颜色 Protection
        if($("#tibetsheets-modal-dialog-slider-pivot").is(":visible")){
            gridW -= $("#tibetsheets-modal-dialog-slider-pivot").outerWidth();
        }
        else if($(".chartSetting").is(":visible")){
            gridW -= $(".chartSetting").outerWidth();
        }
        else if($("#tibetsheets-modal-dialog-slider-alternateformat").is(":visible")){
            gridW -= $("#tibetsheets-modal-dialog-slider-alternateformat").outerWidth();
        }
        if($("#tibetsheets-modal-dialog-slider-protection").is(":visible")){
            gridW -= $("#tibetsheets-modal-dialog-slider-protection").outerWidth();
        }
    }

    const _locale = locale();
    const locale_toolbar = _locale.toolbar;
    let ismore = false,
        toolbarW = 0,
        morebtn = `<div class="tibetsheets-toolbar-button tibetsheets-inline-block" data-tips="${locale_toolbar.toolMoreTip}" id="tibetsheets-icon-morebtn" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block" style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block" style="user-select: none;">

                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block" style="user-select: none;">
                        ${locale_toolbar.toolMore}
                    </div>
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige" style="user-select: none;font-size:12px;">
                    </div>

                </div>
            </div>
         </div>`,
         // Add style left:$$('.tibetsheets') left, when the worksheet does not fill the full screen
        morediv = '<div id="tibetsheets-icon-morebtn-div" class="tibetsheets-wa-editor" style="position:absolute;top:'+ (Store.infobarHeight + Store.toolbarHeight + $("#" + Store.container).offset().top + $("body").first().scrollTop()) +'px;right:0px;z-index:1003;padding:5.5px;visibility:hidden;height:auto;white-space:initial;"></div>';

    if($("#tibetsheets-icon-morebtn-div").length == 0){
        $("body").first().append(morediv);
    }

    // $("#tibetsheets-icon-morebtn-div").hide();
    $$("#tibetsheets-icon-morebtn-div").style.visibility = 'hidden';
    // $("#tibetsheets-icon-morebtn-div > div").appendTo($("#tibetsheets-wa-editor"));

    $("#tibetsheets-icon-morebtn-div > div").each(function(){
        const $t = $(this)[0];
        const $container =  $("#tibetsheets-wa-editor")[0];

        $container.appendChild(document.createTextNode(" "));

        $container.appendChild($t);
    });

    $("#tibetsheets-icon-morebtn").remove();

    // 所有按钮宽度与元素定位
    const toobarWidths = Store.toobarObject.toobarWidths;
    const toobarElements = Store.toobarObject.toobarElements;
    let moreButtonIndex = 0;

    // When you resize the window during initialization, you will find that the dom has not been rendered yet
    if(toobarWidths == undefined){
        return;
    }
    // 找到应该隐藏的起始元素位置
    for (let index = toobarWidths.length - 1; index >= 0; index--) {

        // #tibetsheets-icon-morebtn button width plus right is 83px
        if(toobarWidths[index] < gridW - 90){
            moreButtonIndex = index;
            if(moreButtonIndex < toobarWidths.length - 1){

                ismore = true;
            }
            break;
        }
    }
    // 从起始位置开始，后面的元素统一挪到下方隐藏DIV中
    for (let index = moreButtonIndex; index < toobarElements.length; index++) {
        const element = toobarElements[index];
        if(element instanceof Array){
            for(const ele of element){
                $("#tibetsheets-icon-morebtn-div").append($(`${ele}`));
            }
        }else{
            $("#tibetsheets-icon-morebtn-div").append($(`${element}`));
        }

    }

    if(ismore){

        $("#tibetsheets-wa-editor").append(morebtn);
        $("#tibetsheets-icon-morebtn").click(function(){

            //When resize, change the width of the more button container in real time
            $$('#tibetsheets-icon-morebtn-div').style.left = '';//reset

            // *这里计算containerLeft的作用是：获得容器左侧的margin值，以让点击出现的“更多按钮”栏位置不会出错。
            const containerLeft = $$(`#${Store.container}`).getBoundingClientRect ? $$(`#${Store.container}`).getBoundingClientRect().left : 0;
            const morebtnLeft = $$('#tibetsheets-icon-morebtn-div').getBoundingClientRect().left;//get real left info

            if(morebtnLeft < containerLeft){
                $$('#tibetsheets-icon-morebtn-div').style.left = containerLeft + 'px';
            }

            let right = $(window).width() - $("#tibetsheets-icon-morebtn").offset().left - $("#tibetsheets-icon-morebtn").width()+ $("body").first().scrollLeft();


            // $("#tibetsheets-icon-morebtn-div").toggle().css("right", right < 0 ? 0 : right);

            // use native js operation
            $$('#tibetsheets-icon-morebtn-div').style.right = right < 0 ? 0 : right + 'px';

            // change to visibility,morebtnLeft will get the actual value
            if($$('#tibetsheets-icon-morebtn-div').style.visibility === 'hidden'){
                $$('#tibetsheets-icon-morebtn-div').style.visibility = 'visible';
            }else{
                $$('#tibetsheets-icon-morebtn-div').style.visibility = 'hidden';
            }

            let $txt = $(this).find(".tibetsheets-toolbar-menu-button-caption");
            if($txt.text().indexOf(locale_toolbar.toolMore) > -1){

                const toolCloseHTML = `
                <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block" style="user-select: none;">
                    ${locale_toolbar.toolClose}
                </div>
                <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-shangyige" style="user-select: none;font-size:12px;">
                </div>
                `
                $(this).find(".tibetsheets-toolbar-button-inner-box").html(toolCloseHTML);
            }
            else{

                const toolMoreHTML = `
                <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block" style="user-select: none;">
                    ${locale_toolbar.toolMore}
                </div>
                <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige" style="user-select: none;font-size:12px;">
                </div>
                `

                $(this).find(".tibetsheets-toolbar-button-inner-box").html(toolMoreHTML);
            }

        });
        //$("#tibetsheets-wa-editor div").trigger("create");

        // $("#tibetsheets-icon-morebtn-div .tibetsheets-toolbar-menu-button").css("margin-right", -1);
        // $("#tibetsheets-icon-morebtn-div .tibetsheets-toolbar-button-split-left").css("margin-right", -3);

        // “更多”容器中，联动hover效果
        $("#tibetsheets-icon-morebtn-div .tibetsheets-toolbar-button-split-left").off("hover").hover(function(){
            $(this).next(".tibetsheets-toolbar-button-split-right").addClass("tibetsheets-toolbar-button-split-right-hover");
        }, function(){
            $(this).next(".tibetsheets-toolbar-button-split-right").removeClass("tibetsheets-toolbar-button-split-right-hover");
        });

        $("#tibetsheets-icon-morebtn-div .tibetsheets-toolbar-button-split-right").off("hover").hover(function(){
            $(this).prev(".tibetsheets-toolbar-button-split-left").addClass("tibetsheets-toolbar-button-hover");
        }, function(){
            $(this).prev(".tibetsheets-toolbar-button-split-left").removeClass("tibetsheets-toolbar-button-hover");
        });

        // tooltip
        tooltip.createHoverTip("#tibetsheets-icon-morebtn-div" ,".tibetsheets-toolbar-menu-button, .tibetsheets-toolbar-button, .tibetsheets-toolbar-combo-button");
    }

    $("#"+ Store.container + " .tibetsheets-wa-editor .tibetsheets-toolbar-button-split-left").off("hover").hover(function(){
        $(this).next(".tibetsheets-toolbar-button-split-right").addClass("tibetsheets-toolbar-button-split-right-hover");
    }, function(){
        $(this).next(".tibetsheets-toolbar-button-split-right").removeClass("tibetsheets-toolbar-button-split-right-hover");
    });

    $("#"+ Store.container + " .tibetsheets-wa-editor .tibetsheets-toolbar-button-split-right").off("hover").hover(function(){
        $(this).prev(".tibetsheets-toolbar-button-split-left").addClass("tibetsheets-toolbar-button-hover");
    }, function(){
        $(this).prev(".tibetsheets-toolbar-button-split-left").removeClass("tibetsheets-toolbar-button-hover");
    });

    // When adding elements to the tibetsheets-icon-morebtn-div element of the toolbar, it will affect the height of the entire workbook area, so the height is obtained here
    gridH = $("#" + Store.container).height();

    $("#" + Store.container).find(".tibetsheets").height(gridH - 2).width(gridW - 2);

    changeSheetContainerSize(gridW, gridH)

    if(isRefreshCanvas){
        tibetsheetsrefreshgrid($("#tibetsheets-cell-main").scrollLeft(), $("#tibetsheets-cell-main").scrollTop());
    }

    sheetmanage.sheetArrowShowAndHide();
    sheetmanage.sheetBarShowAndHide();
}


export function changeSheetContainerSize(gridW, gridH){
    if(gridW==null){
        gridW = $("#" + Store.container).width();
    }

    if(gridH==null){
        gridH = $("#" + Store.container).height();
    }
    Store.cellmainHeight = gridH - (Store.infobarHeight + Store.toolbarHeight + Store.calculatebarHeight + Store.columnHeaderHeight + Store.sheetBarHeight + Store.statisticBarHeight);
    Store.cellmainWidth = gridW - Store.rowHeaderWidth;

    $("#tibetsheets-cols-h-c, #tibetsheets-cell-main").width(Store.cellmainWidth);
    $("#tibetsheets-cell-main").height(Store.cellmainHeight);
    $("#tibetsheets-rows-h").height(Store.cellmainHeight - Store.cellMainSrollBarSize);

    $("#tibetsheets-scrollbar-y").height(Store.cellmainHeight + Store.columnHeaderHeight - Store.cellMainSrollBarSize - 3);
    $("#tibetsheets-scrollbar-x").height(Store.cellMainSrollBarSize);
    $("#tibetsheets-scrollbar-y").width(Store.cellMainSrollBarSize);

    $("#tibetsheets-scrollbar-x").width(Store.cellmainWidth).css("left", Store.rowHeaderWidth - 2);

    Store.tibetsheetsTableContentHW = [
        Store.cellmainWidth + Store.rowHeaderWidth - Store.cellMainSrollBarSize,
        Store.cellmainHeight + Store.columnHeaderHeight - Store.cellMainSrollBarSize
    ];

    $("#tibetsheetsTableContent, #tibetsheetsTableContentF").attr({
        width: Math.ceil(Store.tibetsheetsTableContentHW[0] * Store.devicePixelRatio),
        height: Math.ceil(Store.tibetsheetsTableContentHW[1] * Store.devicePixelRatio)
    })
    .css({ width: Store.tibetsheetsTableContentHW[0], height: Store.tibetsheetsTableContentHW[1] });

    $("#" + Store.container).find("#tibetsheets-grid-window-1").css("bottom", Store.sheetBarHeight);
    $("#" + Store.container).find(".tibetsheets-grid-window").css("bottom", Store.statisticBarHeight);

    let gridwidth = $("#tibetsheets-grid-window-1").width();
    $("#tibetsheets-freezebar-horizontal").find(".tibetsheets-freezebar-horizontal-handle")
    .css({ "width": gridwidth - 10 })
    .end()
    .find(".tibetsheets-freezebar-horizontal-drop")
    .css({ "width": gridwidth - 10 });

    let gridheight = $("#tibetsheets-grid-window-1").height();
    $("#tibetsheets-freezebar-vertical")
    .find(".tibetsheets-freezebar-vertical-handle")
    .css({ "height": gridheight - 10 })
    .end()
    .find(".tibetsheets-freezebar-vertical-drop")
    .css({ "height": gridheight - 10 });

    tibetsheetsFreezen.createAssistCanvas();
}

/**
 *
 *
 * Toolbar judgment rules: First set the display and hide of all tool buttons according to showtoolbar, and then override the judgment of showtoolbar according to showtoolbarConfig rules
 *
 * The width value of each button in the statistics toolbar is used to calculate which needs to be placed in more buttons
 */
export function menuToolBarWidth() {
    const showtoolbar = tibetsheetsConfigsetting.showtoolbar;
    const showtoolbarConfig = tibetsheetsConfigsetting.showtoolbarConfig;

    const toobarWidths = Store.toobarObject.toobarWidths = [];
    const toobarElements = Store.toobarObject.toobarElements = [];
    const toolbarConfig = Store.toobarObject.toolbarConfig = buildBoolBarConfig();

    /**
     * 基于 showtoolbarConfig 配置 动态生成 toolbarConfig
     * @returns {object}
     * @input showtoolbarConfig = ['undo', 'redo', '|' , 'font' , 'moreFormats', '|']
     * {
     *     undo: {ele: '#tibetsheets-icon-undo', index: 0},
     *     redo: {ele: ['#tibetsheets-icon-redo', '#tibetsheets-separator-redo'], index: 1},
     *     undo: {ele: '#tibetsheets-icon-font', index: 2},
     *     moreFormats: {ele: ['#tibetsheets-icon-fmt-other', '#tibetsheets-separator-more-formats'], index: 3},
     * }
     */
    function buildBoolBarConfig() {
        let obj = {};
        function array2Config(arr) {
            const obj = {};
            let current,next;
            let index = 0;
            for (let i = 0; i<arr.length; i++) {
                current = arr[i];
                next = arr[i + 1];
                if (current !== '|') {
                    obj[current] = {
                        ele: toolbarIdMap[current],
                        index: index++
                    }
                }
                if (next === '|') {
                    if (getObjType(obj[current].ele) === 'array') {
                        obj[current].ele.push(`#toolbar-separator-${camel2split(current)}`);
                    } else {
                        obj[current].ele = [obj[current].ele, `#toolbar-separator-${camel2split(current)}`];
                    }
                }
            }
            return obj;
        }
        // 数组形式直接生成
        if (getObjType(showtoolbarConfig) === 'array') {
            // show 为 false
            if (!showtoolbar) {
                return obj;
            }
            return array2Config(showtoolbarConfig);
        }
        // 否则为全部中从记录中挑选显示或隐藏
        const config = defaultToolbar.reduce(function(total, curr) {
            if (curr !== '|') {
                total[curr] = true;
            }
            return total;
        }, {});
        if (!showtoolbar) {
            for (let s in config) {
                config[s] = false;
            }
        }

        if (JSON.stringify(showtoolbarConfig) !== '{}') {
            if(showtoolbarConfig.hasOwnProperty('undoRedo')){
                config.undo = config.redo = showtoolbarConfig.undoRedo;

            }
            Object.assign(config, showtoolbarConfig);

            let current,next;
            let index = 0;
            for (let i = 0; i<defaultToolbar.length; i++) {
                current = defaultToolbar[i];
                next = defaultToolbar[i + 1];
                if (config[current] === false) {
                    continue;
                }
                if (current !== '|' && config[current]) {

                    obj[current] = {
                        ele: toolbarIdMap[current],
                        index: index++
                    }
                }
                if (next === '|') {
                    if (getObjType(obj[current].ele) === 'array') {
                        obj[current].ele.push(`#toolbar-separator-${camel2split(current)}`);
                    } else {
                        obj[current].ele = [obj[current].ele, `#toolbar-separator-${camel2split(current)}`];
                    }
                }
            }
        } else {
            obj = showtoolbar ? array2Config(defaultToolbar) : {};
        }

        return obj;
    }

    for (let s in toolbarConfig){
        if (Object.prototype.hasOwnProperty.call(toolbarConfig, s)) {
            toobarElements.push($.extend(true,{},toolbarConfig[s]));
        }
    }

    toobarElements.sort(sortToolbar);

    function sortToolbar(a,b) {
        if(a.index > b.index){
            return 1;
        }else{
            return -1;
        }
    }
    toobarElements.forEach((curr,index,arr)=>{
        arr[index] = curr.ele;

        if(index !== toobarElements.length - 1){
            if(curr.ele instanceof Array){
                toobarWidths.push($(curr.ele[0]).offset().left);
            }else{
                toobarWidths.push($(curr.ele).offset().left);
            }
        }else{
            if(curr.ele instanceof Array){
                toobarWidths.push($(curr.ele[0]).offset().left);
                toobarWidths.push($(curr.ele[0]).offset().left + $(curr.ele[0]).outerWidth() + 5);
            }else{
                toobarWidths.push($(curr.ele).offset().left);
                toobarWidths.push($(curr.ele).offset().left + $(curr.ele).outerWidth() + 5);
            }
        }

    });

    //If the container does not occupy the full screen, we need to subtract the left margin
    const containerLeft = $('#' + Store.container).offset().left;
    toobarWidths.forEach((item,i)=>{
        toobarWidths[i] -= containerLeft;
    })

}

/**
 *Custom configuration bottom sheet button
 */
function customSheetbarConfig() {

    if(!tibetsheetsConfigsetting.initShowsheetbarConfig){

        tibetsheetsConfigsetting.initShowsheetbarConfig = true;

        const config = {
            add: true, //Add worksheet
            menu: true, //Worksheet management menu
            sheet: true //Worksheet display
        }

        if(!tibetsheetsConfigsetting.showsheetbar){
            for(let s in config){
                config[s] = false;
            }
        }

        // showsheetbarConfig determines the final result
        if(JSON.stringify(tibetsheetsConfigsetting.showsheetbarConfig) !== '{}'){
            Object.assign(config,tibetsheetsConfigsetting.showsheetbarConfig);
        }

        tibetsheetsConfigsetting.showsheetbarConfig = config;

    }

    const config = tibetsheetsConfigsetting.showsheetbarConfig;

    let isHide = 0;

    for (let s in config) {
        if(!config[s]){
            switch (s) {
                case 'add':
                    $('#tibetsheets-sheets-add').hide();
                    isHide++;
                    break;

                case 'menu':
                    $('#tibetsheets-sheets-m').hide();
                    isHide++;
                    break;

                case 'sheet':
                    $('#tibetsheets-sheet-container').hide();
                    $('#tibetsheets-sheets-leftscroll').hide();
                    $('#tibetsheets-sheets-rightscroll').hide();
                    isHide++;
                    break;

                default:
                    break;
            }
        }
    }

    if (isHide === 3) {
        $("#" + Store.container).find("#tibetsheets-sheet-area").hide();
        Store.sheetBarHeight = 0;
    }
    else {
        $("#" + Store.container).find("#tibetsheets-sheet-area").show();
        Store.sheetBarHeight = 31;
    }
}


/**
 * Customize the bottom count bar
 */
function customStatisticBarConfig() {
    if(!tibetsheetsConfigsetting.initStatisticBarConfig){

        tibetsheetsConfigsetting.initStatisticBarConfig = true;

        const config = {
            count: true, // Count bar
            view: true, // print view
            zoom: true // Zoom
        }

        if(!tibetsheetsConfigsetting.showstatisticBar){
            for(let s in config){
                config[s] = false;
            }
        }

        // showstatisticBarConfig determines the final result
        if(JSON.stringify(tibetsheetsConfigsetting.showstatisticBarConfig) !== '{}'){
            Object.assign(config,tibetsheetsConfigsetting.showstatisticBarConfig);
        }

        tibetsheetsConfigsetting.showstatisticBarConfig = config;

    }

    const config = tibetsheetsConfigsetting.showstatisticBarConfig;

    let isHide = 0;

    for (let s in config) {
        if(!config[s]){
            switch (s) {
                case 'count':
                    $('#tibetsheets-sta-content').hide();
                    isHide++;
                    break;

                case 'view':
                    $('.tibetsheets-print-viewList').hide();
                    isHide++;
                    break;

                case 'zoom':
                    $('#tibetsheets-zoom-content').hide();
                    isHide++;
                    break;

                default:
                    break;
            }
        }
    }

    if (isHide === 3) {
        $("#" + Store.container).find(".tibetsheets-stat-area").hide();
        Store.statisticBarHeight = 0;
    }
    else {
        $("#" + Store.container).find(".tibetsheets-stat-area").show();
        Store.statisticBarHeight = 23;
    }
}
