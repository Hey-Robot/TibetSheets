
import defaultSetting from './config.js';
import { common_extend } from './utils/util';
import Store from './store';
import server from './controllers/server';
import tibetsheetsConfigsetting from './controllers/tibetsheetsConfigsetting';
import sheetmanage from './controllers/sheetmanage';
import tibetsheetssizeauto from './controllers/resize';
import tibetsheetsHandler from './controllers/handler';
import {initialFilterHandler} from './controllers/filter';
import {initialMatrixOperation} from './controllers/matrixOperation';
import {initialSheetBar} from './controllers/sheetBar';
import {formulaBarInitial} from './controllers/formulaBar';
import {rowColumnOperationInitial} from './controllers/rowColumnOperation';
import {keyboardInitial} from './controllers/keyboard';
import {orderByInitial} from './controllers/orderBy';
import {initPlugins} from './controllers/expendPlugins';
import {
    gettibetsheetsfile,
    gettibetsheets_select_save,
    getconfig,
} from './methods/get';
import {
    settibetsheets_select_save
} from './methods/set';
import { tibetsheetsrefreshgrid, jfrefreshgrid } from './global/refresh';
import functionlist from './function/functionlist';
import { tibetsheetslodingHTML } from './controllers/constant';
import { getcellvalue, getdatabyselection } from './global/getdata';
import { setcellvalue } from './global/setdata';
import { selectHightlightShow } from './controllers/select';
import {zoomInitial} from './controllers/zoom';
import {printInitial} from './controllers/print';
import method from './global/method';

import * as api from './global/api';

import flatpickr from 'flatpickr'
import Mandarin from 'flatpickr/dist/l10n/zh.js'
import { initListener } from './controllers/listener';
import { hideloading, showloading } from './global/loading.js';
import { tibetsheetsextendData } from './global/extend.js';

let tibetsheets = {};

// mount api
// tibetsheets.api = api;
// Object.assign(tibetsheets, api);

tibetsheets = common_extend(api,tibetsheets);



//创建tibetsheets表格
tibetsheets.create = function (setting) {
    method.destroy()
    // Store original parameters for api: toJson
    Store.toJsonOptions = {}
    for(let c in setting){
        if(c !== 'data'){
            Store.toJsonOptions[c] = setting[c];
        }
    }

    let extendsetting = common_extend(defaultSetting, setting);

    let loadurl = extendsetting.loadUrl,
        menu = extendsetting.menu,
        title = extendsetting.title;

    let container = extendsetting.container;
    Store.container = container;
    Store.tibetsheetsfile = extendsetting.data;
    Store.defaultcolumnNum = extendsetting.column;
    Store.defaultrowNum = extendsetting.row;
    Store.defaultFontSize = extendsetting.defaultFontSize;
    Store.fullscreenmode = extendsetting.fullscreenmode;
    Store.lang = extendsetting.lang; //language
    Store.allowEdit = extendsetting.allowEdit;
    Store.limitSheetNameLength =  extendsetting.limitSheetNameLength;
    Store.defaultSheetNameMaxLength = extendsetting.defaultSheetNameMaxLength;
    Store.fontList = extendsetting.fontList;
    server.gridKey = extendsetting.gridKey;
    server.loadUrl = extendsetting.loadUrl;
    server.updateUrl = extendsetting.updateUrl;
    server.updateImageUrl = extendsetting.updateImageUrl;
    server.title = extendsetting.title;
    server.loadSheetUrl = extendsetting.loadSheetUrl;
    server.allowUpdate = extendsetting.allowUpdate;

    tibetsheetsConfigsetting.autoFormatw = extendsetting.autoFormatw;
    tibetsheetsConfigsetting.accuracy = extendsetting.accuracy;
    tibetsheetsConfigsetting.total = extendsetting.data[0].total;

    tibetsheetsConfigsetting.loading = extendsetting.loading;
    tibetsheetsConfigsetting.allowCopy = extendsetting.allowCopy;
    tibetsheetsConfigsetting.showtoolbar = extendsetting.showtoolbar;
    tibetsheetsConfigsetting.showtoolbarConfig = extendsetting.showtoolbarConfig;
    tibetsheetsConfigsetting.showinfobar = extendsetting.showinfobar;
    tibetsheetsConfigsetting.showsheetbar = extendsetting.showsheetbar;
    tibetsheetsConfigsetting.showsheetbarConfig = extendsetting.showsheetbarConfig;
    tibetsheetsConfigsetting.showstatisticBar = extendsetting.showstatisticBar;
    tibetsheetsConfigsetting.showstatisticBarConfig = extendsetting.showstatisticBarConfig;
    tibetsheetsConfigsetting.sheetFormulaBar = extendsetting.sheetFormulaBar;
    tibetsheetsConfigsetting.cellRightClickConfig = extendsetting.cellRightClickConfig;
    tibetsheetsConfigsetting.sheetRightClickConfig = extendsetting.sheetRightClickConfig;
    tibetsheetsConfigsetting.pointEdit = extendsetting.pointEdit;
    tibetsheetsConfigsetting.pointEditUpdate = extendsetting.pointEditUpdate;
    tibetsheetsConfigsetting.pointEditZoom = extendsetting.pointEditZoom;

    tibetsheetsConfigsetting.userInfo = extendsetting.userInfo;
    tibetsheetsConfigsetting.userMenuItem = extendsetting.userMenuItem;
    tibetsheetsConfigsetting.myFolderUrl = extendsetting.myFolderUrl;
    tibetsheetsConfigsetting.functionButton = extendsetting.functionButton;

    tibetsheetsConfigsetting.showConfigWindowResize = extendsetting.showConfigWindowResize;
    tibetsheetsConfigsetting.enableAddRow = extendsetting.enableAddRow;
    tibetsheetsConfigsetting.enableAddBackTop = extendsetting.enableAddBackTop;
    tibetsheetsConfigsetting.addRowCount = extendsetting.addRowCount;
    tibetsheetsConfigsetting.enablePage = extendsetting.enablePage;
    tibetsheetsConfigsetting.pageInfo = extendsetting.pageInfo;

    tibetsheetsConfigsetting.editMode = extendsetting.editMode;
    tibetsheetsConfigsetting.beforeCreateDom = extendsetting.beforeCreateDom;
    tibetsheetsConfigsetting.workbookCreateBefore = extendsetting.workbookCreateBefore;
    tibetsheetsConfigsetting.workbookCreateAfter = extendsetting.workbookCreateAfter;
    tibetsheetsConfigsetting.remoteFunction = extendsetting.remoteFunction;

    tibetsheetsConfigsetting.fireMousedown = extendsetting.fireMousedown;
    tibetsheetsConfigsetting.forceCalculation = extendsetting.forceCalculation;
    tibetsheetsConfigsetting.plugins = extendsetting.plugins;

    tibetsheetsConfigsetting.rowHeaderWidth = extendsetting.rowHeaderWidth;
    tibetsheetsConfigsetting.columnHeaderHeight = extendsetting.columnHeaderHeight;

    tibetsheetsConfigsetting.defaultColWidth = extendsetting.defaultColWidth;
    tibetsheetsConfigsetting.defaultRowHeight = extendsetting.defaultRowHeight;

    tibetsheetsConfigsetting.title = extendsetting.title;
    tibetsheetsConfigsetting.container = extendsetting.container;
    tibetsheetsConfigsetting.hook = extendsetting.hook;

    tibetsheetsConfigsetting.pager = extendsetting.pager;

    tibetsheetsConfigsetting.initShowsheetbarConfig = false;

    tibetsheetsConfigsetting.imageUpdateMethodConfig = extendsetting.imageUpdateMethodConfig;

    if (Store.lang === 'zh') flatpickr.localize(Mandarin.zh);

    // Store the currently used plugins for monitoring asynchronous loading
    Store.asyncLoad.push(...tibetsheetsConfigsetting.plugins);

    // Register plugins
    initPlugins(extendsetting.plugins , extendsetting.data);

    // Store formula information, including internationalization
    functionlist();

    let devicePixelRatio = extendsetting.devicePixelRatio;
    if(devicePixelRatio == null){
        devicePixelRatio = 1;
    }
    Store.devicePixelRatio = Math.ceil(devicePixelRatio);

    //loading
    const loadingObj=tibetsheetslodingHTML("#" + container)
    Store.loadingObj=loadingObj

    if (loadurl == "") {
        sheetmanage.initialjfFile(menu, title);
        // tibetsheetssizeauto();
        initialWorkBook();
    }
    else {
        $.post(loadurl, {"gridKey" : server.gridKey}, function (d) {
            let data = new Function("return " + d)();
            Store.tibetsheetsfile = data;

            sheetmanage.initialjfFile(menu, title);
            // tibetsheetssizeauto();
            initialWorkBook();

            //需要更新数据给后台时，建立WebSocket连接
            if(server.allowUpdate){
                server.openWebSocket();
            }
        });
    }
}

function initialWorkBook(){
    tibetsheetsHandler();//Overall dom initialization
    initialFilterHandler();//Filter initialization
    initialMatrixOperation();//Right click matrix initialization
    initialSheetBar();//bottom sheet bar initialization
    formulaBarInitial();//top formula bar initialization
    rowColumnOperationInitial();//row and coloumn operate initialization
    keyboardInitial();//Keyboard operate initialization
    orderByInitial();//menu bar orderby function initialization
    zoomInitial();//zoom method initialization
    printInitial();//print initialization
    initListener();
}

//获取所有表格数据
tibetsheets.gettibetsheetsfile = gettibetsheetsfile;

//获取当前表格 选区
tibetsheets.gettibetsheets_select_save = gettibetsheets_select_save;

//设置当前表格 选区
tibetsheets.settibetsheets_select_save = settibetsheets_select_save;

//获取当前表格 config配置
tibetsheets.getconfig = getconfig;

//二维数组数据 转化成 {r, c, v}格式 一维数组 (传入参数为二维数据data)
tibetsheets.getGridData = sheetmanage.getGridData;

//生成表格所需二维数组 （传入参数为表格数据对象file）
tibetsheets.buildGridData = sheetmanage.buildGridData;

// Refresh the canvas display data according to scrollHeight and scrollWidth
tibetsheets.tibetsheetsrefreshgrid = tibetsheetsrefreshgrid;

// Refresh canvas
tibetsheets.jfrefreshgrid = jfrefreshgrid;

// Get the value of the cell
tibetsheets.getcellvalue = getcellvalue;

// Set cell value
tibetsheets.setcellvalue = setcellvalue;

// Get selection range value
tibetsheets.getdatabyselection = getdatabyselection;

tibetsheets.sheetmanage = sheetmanage;

// Data of the current table
tibetsheets.flowdata = function () {
    return Store.flowdata;
}

// Set selection highlight
tibetsheets.selectHightlightShow = selectHightlightShow;

// Reset parameters after destroying the table
tibetsheets.destroy = method.destroy;

tibetsheets.showLoadingProgress = showloading;
tibetsheets.hideLoadingProgress = hideloading;
tibetsheets.tibetsheetsextendData = tibetsheetsextendData;

export {
    tibetsheets
}
