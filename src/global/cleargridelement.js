import selection from '../controllers/selection';
import menuButton from '../controllers/menuButton';

export default function cleargridelement(event) {
    $("#tibetsheets-cols-h-hover").hide();
    $("#tibetsheets-rightclick-menu").hide();

    $("#tibetsheets-cell-selected-boxs .tibetsheets-cell-selected").hide();
    $("#tibetsheets-cols-h-selected .tibetsheets-cols-h-selected").hide();
    $("#tibetsheets-rows-h-selected .tibetsheets-rows-h-selected").hide();

    $("#tibetsheets-cell-selected-focus").hide();
    $("#tibetsheets-rows-h-hover").hide();
    $("#tibetsheets-selection-copy .tibetsheets-selection-copy").hide();
    $("#tibetsheets-cols-menu-btn").hide();
    $("#tibetsheets-row-count-show, #tibetsheets-column-count-show").hide();
    if (!event) {
        selection.clearcopy(event);
    }
    //else{
    //	selection.clearcopy();
    //}

    //选区下拉icon隐藏
    if($("#tibetsheets-dropCell-icon").is(":visible")){
        if(event){
            $("#tibetsheets-dropCell-icon").remove();
        }
    }
    //格式刷
    if(menuButton.tibetsheetsPaintModelOn && !event){
        menuButton.cancelPaintModel();
    }
}
