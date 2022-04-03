import tibetsheetsFreezen from '../controllers/freezen';
import { tibetsheets_searcharray } from '../controllers/sheetSearch';
import { tibetsheetsrefreshgrid } from '../global/refresh';
import Store from '../store';
import method from '../global/method'

let scrollRequestAnimationFrameIni = true,scrollRequestAnimationFrame = false, scrollTimeOutCancel=null;

function execScroll(){
    let scrollLeft = $("#tibetsheets-scrollbar-x").scrollLeft(), 
        scrollTop = $("#tibetsheets-scrollbar-y").scrollTop();
    tibetsheetsrefreshgrid(scrollLeft, scrollTop);
    scrollRequestAnimationFrame = window.requestAnimationFrame(execScroll);
}

//全局滚动事件
export default function tibetsheetsscrollevent(isadjust) {
    let $t = $("#tibetsheets-cell-main");
    let scrollLeft = $("#tibetsheets-scrollbar-x").scrollLeft(), 
        scrollTop = $("#tibetsheets-scrollbar-y").scrollTop(),
        canvasHeight = $("#tibetsheetsTableContent").height(); // canvas高度

    // clearTimeout(scrollTimeOutCancel);

    // scrollTimeOutCancel = setTimeout(() => {
    //     scrollRequestAnimationFrameIni  = true;
    //     window.cancelAnimationFrame(scrollRequestAnimationFrame);
    // }, 500);

    // if (!!isadjust) {
    //     let scrollHeight = $t.get(0).scrollHeight;
    //     let windowHeight = $t.height();
    //     let scrollWidth = $t.get(0).scrollWidth;
    //     let windowWidth = $t.width();

    //     let maxScrollLeft = scrollWidth - windowWidth;
    //     let maxScrollTop = scrollHeight - windowHeight;

    //     let visibledatacolumn_c = Store.visibledatacolumn, visibledatarow_c = Store.visibledatarow;

    //     if (tibetsheetsFreezen.freezenhorizontaldata != null) {
    //         visibledatarow_c = tibetsheetsFreezen.freezenhorizontaldata[3];
    //     }

    //     if (tibetsheetsFreezen.freezenverticaldata != null) {
    //         visibledatacolumn_c = tibetsheetsFreezen.freezenverticaldata[3];
    //     }

    //     let col_ed = tibetsheets_searcharray(visibledatacolumn_c, scrollLeft);
    //     let row_ed = tibetsheets_searcharray(visibledatarow_c, scrollTop);

    //     let refreshLeft = scrollLeft , refreshTop = scrollTop;

    //     if (col_ed <= 0) {
    //         scrollLeft = 0;
    //     }
    //     else {
    //         scrollLeft = visibledatacolumn_c[col_ed - 1];
    //     }

    //     if (row_ed <= 0) {
    //         scrollTop = 0;
    //     }
    //     else {
    //         scrollTop = visibledatarow_c[row_ed - 1];
    //     }
    // }

    if (tibetsheetsFreezen.freezenhorizontaldata != null) {
        if (scrollTop < tibetsheetsFreezen.freezenhorizontaldata[2]) {
            scrollTop = tibetsheetsFreezen.freezenhorizontaldata[2];
            $("#tibetsheets-scrollbar-y").scrollTop(scrollTop);
            return;
        }
    }

    if (tibetsheetsFreezen.freezenverticaldata != null) {
        if (scrollLeft < tibetsheetsFreezen.freezenverticaldata[2]) {
            scrollLeft = tibetsheetsFreezen.freezenverticaldata[2];
            $("#tibetsheets-scrollbar-x").scrollLeft(scrollLeft);
            return;
        }
    }

    $("#tibetsheets-cols-h-c").scrollLeft(scrollLeft);//列标题
    $("#tibetsheets-rows-h").scrollTop(scrollTop);//行标题
    
    $t.scrollLeft(scrollLeft).scrollTop(scrollTop);

    $("#tibetsheets-input-box-index").css({
        "left": $("#tibetsheets-input-box").css("left"), 
        "top": (parseInt($("#tibetsheets-input-box").css("top")) - 20) + "px", 
        "z-index": $("#tibetsheets-input-box").css("z-index")
    }).show();

    // if(scrollRequestAnimationFrameIni && Store.scrollRefreshSwitch){
    //     execScroll();
    //     scrollRequestAnimationFrameIni = false;
    // }

    tibetsheetsrefreshgrid(scrollLeft, scrollTop);
    

    $("#tibetsheets-bottom-controll-row").css("left", scrollLeft);

    //有选区且有冻结时，滚动适应
    if(tibetsheetsFreezen.freezenhorizontaldata != null || tibetsheetsFreezen.freezenverticaldata != null){
        tibetsheetsFreezen.scrollAdapt();
    }

    if(!method.createHookFunction("scroll", {scrollLeft, scrollTop, canvasHeight})){ return; }

}
