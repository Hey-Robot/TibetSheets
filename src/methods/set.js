import { getSheetIndex } from '../methods/get';
import Store from '../store';

function settibetsheets_select_save(v) {
    Store.tibetsheets_select_save = v;
}

function settibetsheets_scroll_status(v) {
    Store.tibetsheets_scroll_status = v;
}

function settibetsheetsfile(d) {
    Store.tibetsheetsfile = d;
}

function setconfig(v) {
    Store.config = v;

    if(Store.tibetsheetsfile != null){
        Store.tibetsheetsfile[getSheetIndex(Store.currentSheetIndex)].config = v;
    }
}

function setvisibledatarow(v) {
    Store.visibledatarow = v;

    if(Store.tibetsheetsfile != null){
        Store.tibetsheetsfile[getSheetIndex(Store.currentSheetIndex)].visibledatarow = v;
    }
}

function setvisibledatacolumn(v) {
    Store.visibledatacolumn = v;

    if(Store.tibetsheetsfile != null){
        Store.tibetsheetsfile[getSheetIndex(Store.currentSheetIndex)].visibledatacolumn = v;
    }
}

export {
    settibetsheets_select_save,
    settibetsheets_scroll_status,
    settibetsheetsfile,
    setconfig,
    setvisibledatarow,
    setvisibledatacolumn,
}
