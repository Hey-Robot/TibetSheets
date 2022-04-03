import locale from '../locale/locale';
import tibetsheetsConfigsetting from './tibetsheetsConfigsetting';

import { getObjType, camel2split } from '../utils/util';

// 默认的工具栏按钮
export const defaultToolbar = [
    'undo',
    'redo',
    'paintFormat',
    '|',

    'currencyFormat',
    'percentageFormat',
    'numberDecrease',
    'numberIncrease',
    'moreFormats',
    '|',

    'font',
    '|',
    'fontSize',
    '|',

    'bold',
    'italic',
    'strikethrough',
    'underline',
    'textColor',
    '|',

    'fillColor',
    'border',
    'mergeCell',
    '|',

    'horizontalAlignMode',
    'verticalAlignMode',
    'textWrapMode',
    'textRotateMode',
    '|',

    'image',
    'link',
    'chart',
    'postil',
    'pivotTable',
    '|',

    'function',
    'frozenMode',
    'sortAndFilter',
    'conditionalFormat',
    'dataVerification',
    'splitColumn',
    'screenshot',
    'findAndReplace',
    'protection',
    'print'
];

// 工具栏按钮 id 关系
export const toolbarIdMap = {
    undo: '#tibetsheets-icon-undo', //Undo redo
    redo: '#tibetsheets-icon-redo',
    paintFormat: ['#tibetsheets-icon-paintformat'], //Format brush
    currencyFormat: '#tibetsheets-icon-currency', //currency format
    percentageFormat: '#tibetsheets-icon-percent', //Percentage format
    numberDecrease: '#tibetsheets-icon-fmt-decimal-decrease', //'Decrease the number of decimal places'
    numberIncrease: '#tibetsheets-icon-fmt-decimal-increase', //'Increase the number of decimal places
    moreFormats: '#tibetsheets-icon-fmt-other', //'More Formats'
    font: '#tibetsheets-icon-font-family', //'font'
    fontSize: '#tibetsheets-icon-font-size', //'Font size'
    bold: '#tibetsheets-icon-bold', //'Bold (Ctrl+B)'
    italic: '#tibetsheets-icon-italic', //'Italic (Ctrl+I)'
    strikethrough: '#tibetsheets-icon-strikethrough', //'Strikethrough (Alt+Shift+5)'
    underline: '#tibetsheets-icon-underline', //'Underline (Alt+Shift+6)'
    textColor: ['#tibetsheets-icon-text-color', '#tibetsheets-icon-text-color-menu'], //'Text color'
    fillColor: ['#tibetsheets-icon-cell-color', '#tibetsheets-icon-cell-color-menu'], //'Cell color'
    border: ['#tibetsheets-icon-border-all', '#tibetsheets-icon-border-menu'], //'border'
    mergeCell: ['#tibetsheets-icon-merge-button', '#tibetsheets-icon-merge-menu'], //'Merge cells'
    horizontalAlignMode: ['#tibetsheets-icon-align', '#tibetsheets-icon-align-menu'], //'Horizontal alignment'
    verticalAlignMode: ['#tibetsheets-icon-valign', '#tibetsheets-icon-valign-menu'], //'Vertical alignment'
    textWrapMode: ['#tibetsheets-icon-textwrap', '#tibetsheets-icon-textwrap-menu'], //'Wrap mode'
    textRotateMode: ['#tibetsheets-icon-rotation', '#tibetsheets-icon-rotation-menu'], //'Text Rotation Mode'
    image: '#tibetsheets-insertImg-btn-title', //'Insert link'
    link: '#tibetsheets-insertLink-btn-title', //'Insert picture'
    chart: '#tibetsheets-chart-btn-title', //'chart' (the icon is hidden, but if the chart plugin is configured, you can still create a new chart by right click)
    postil: '#tibetsheets-icon-postil', //'comment'
    pivotTable: ['#tibetsheets-pivot-btn-title'], //'PivotTable'
    function: ['#tibetsheets-icon-function', '#tibetsheets-icon-function-menu'], //'formula'
    frozenMode: ['#tibetsheets-freezen-btn-horizontal', '#tibetsheets-icon-freezen-menu'], //'freeze mode'
    sortAndFilter: '#tibetsheets-icon-autofilter', //'sort and filter'
    conditionalFormat: '#tibetsheets-icon-conditionformat', //'Conditional Format'
    dataVerification: '#tibetsheets-dataVerification-btn-title', // 'Data Verification'
    splitColumn: '#tibetsheets-splitColumn-btn-title', //'Split column'
    screenshot: '#tibetsheets-chart-btn-screenshot', //'screenshot'
    findAndReplace: '#tibetsheets-icon-seachmore', //'Find and Replace'
    protection: '#tibetsheets-icon-protection', // 'Worksheet protection'
    print: '#tibetsheets-icon-print' // 'print'
};

// 创建工具栏按钮的html
export function createToolbarHtml() {
    const toolbar = locale().toolbar;
    const fontarray = locale().fontarray;
    const defaultFmtArray = locale().defaultFmt;
    const htmlMap = {
        undo: `<div class="tibetsheets-toolbar-button tibetsheets-inline-block disabled" data-tips="${toolbar.undo}"
        id="tibetsheets-icon-undo" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-undo iconfont tibetsheets-iconfont-qianjin"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
        redo: `<div class="tibetsheets-toolbar-button tibetsheets-inline-block disabled" data-tips="${toolbar.redo}"
        id="tibetsheets-icon-redo" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-redo iconfont tibetsheets-iconfont-houtui"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
        paintFormat: `<div class="tibetsheets-toolbar-button tibetsheets-inline-block" data-tips="${toolbar.paintFormat}"
        id="tibetsheets-icon-paintformat" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img iconfont tibetsheets-iconfont-geshishua"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
        currencyFormat: `<div class="tibetsheets-toolbar-button tibetsheets-inline-block" data-tips="${toolbar.currencyFormat}"
        id="tibetsheets-icon-currency" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img iconfont tibetsheets-iconfont-jine"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
        percentageFormat: `<div class="tibetsheets-toolbar-button tibetsheets-inline-block" data-tips="${toolbar.percentageFormat}"
        id="tibetsheets-icon-percent" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img iconfont tibetsheets-iconfont-baifenhao"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //Percentage format
        numberDecrease: `<div class="tibetsheets-toolbar-button tibetsheets-inline-block" data-tips="${toolbar.numberDecrease}"
        id="tibetsheets-icon-fmt-decimal-decrease" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block toolbar-decimal-icon"
                    style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-decimal-decrease iconfont tibetsheets-iconfont-jianxiaoxiaoshuwei"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Decrease the number of decimal places'
        numberIncrease: `<div class="tibetsheets-toolbar-button tibetsheets-inline-block" data-tips="${toolbar.numberIncrease}"
        id="tibetsheets-icon-fmt-decimal-increase" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block toolbar-decimal-icon"
                    style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-decimal-increase iconfont tibetsheets-iconfont-zengjiaxiaoshuwei"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Increase the number of decimal places
        moreFormats: `<div class="tibetsheets-toolbar-select tibetsheets-toolbar-menu-button tibetsheets-inline-block" data-tips="${toolbar.moreFormats}"
        id="tibetsheets-icon-fmt-other" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        ${defaultFmtArray[0].text}
                    </div>
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'More Formats'
        font: `<div class="tibetsheets-toolbar-select tibetsheets-toolbar-menu-button tibetsheets-inline-block"
        data-tips="${toolbar.font}" id="tibetsheets-icon-font-family" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        ${fontarray[0]}
                    </div>
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'font'
        fontSize: `<div class="tibetsheets-toolbar-select tibetsheets-toolbar-zoom-combobox tibetsheets-toolbar-combo-button tibetsheets-inline-block"
        data-tips="${toolbar.fontSize}" id="tibetsheets-icon-font-size" style="user-select: none;">
            <div class="tibetsheets-toolbar-combo-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-combo-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div aria-posinset="4" aria-setsize="7" class="tibetsheets-inline-block tibetsheets-toolbar-combo-button-caption"
                    style="user-select: none;">
                        <input aria-label="${toolbar.fontSize}" class="tibetsheets-toolbar-combo-button-input tibetsheets-toolbar-textinput"
                        role="combobox" style="user-select: none;" tabindex="-1" type="text" value="10"
                        />
                    </div>
                    <div class="tibetsheets-toolbar-combo-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Font size'
        bold: `<div class="tibetsheets-toolbar-button tibetsheets-inline-block" data-tips="${toolbar.bold}"
        id="tibetsheets-icon-bold" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-bold iconfont tibetsheets-iconfont-jiacu"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Bold (Ctrl+B)'
        italic: `<div class="tibetsheets-toolbar-button tibetsheets-inline-block" data-tips="${toolbar.italic}"
        id="tibetsheets-icon-italic" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-italic iconfont tibetsheets-iconfont-wenbenqingxie1"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Italic (Ctrl+I)'
        strikethrough: `<div class="tibetsheets-toolbar-button tibetsheets-inline-block" data-tips="${toolbar.strikethrough}"
        id="tibetsheets-icon-strikethrough" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-strikethrough iconfont tibetsheets-iconfont-wenbenshanchuxian"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Strikethrough (Alt+Shift+5)'
        underline: `<div class="tibetsheets-toolbar-button tibetsheets-inline-block" data-tips="${toolbar.underline}"
        id="tibetsheets-icon-underline" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-underline iconfont tibetsheets-iconfont-wenbenxiahuaxian"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Underline (Alt+Shift+6)'
        textColor: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block tibetsheets-icon-text-color"
        data-tips="${toolbar.textColor}" id="tibetsheets-icon-text-color" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-color-menu-button-indicator" style="border-bottom-color: rgb(0, 0, 0); user-select: none;">
                            <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                                <div class="text-color-bar" style="background-color:${tibetsheetsConfigsetting.defaultTextColor}"></div>
                                <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-text-color iconfont tibetsheets-iconfont-wenbenyanse"
                                style="user-select: none;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tibetsheets-toolbar-button-split-right tibetsheets-toolbar-menu-button tibetsheets-inline-block"
        data-tips="${toolbar.chooseColor}..." id="tibetsheets-icon-text-color-menu" role="button"
        style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Text color'
        fillColor: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block tibetsheets-icon-cell-color"
        data-tips="${toolbar.fillColor}" id="tibetsheets-icon-cell-color" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-color-menu-button-indicator" style="border-bottom-color: rgb(255, 255, 255); user-select: none;">
                            <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                                <div class="text-color-bar" style="background-color:${tibetsheetsConfigsetting.defaultCellColor}"></div>
                                <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-cell-color iconfont tibetsheets-iconfont-tianchong"
                                style="user-select: none;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tibetsheets-toolbar-button-split-right tibetsheets-toolbar-menu-button tibetsheets-inline-block"
        data-tips="${toolbar.chooseColor}..." id="tibetsheets-icon-cell-color-menu" role="button"
        style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Cell color'
        border: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block tibetsheets-icon-border-all"
        data-tips="${toolbar.border}" id="tibetsheets-icon-border-all" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-border-all iconfont tibetsheets-iconfont-quanjiabiankuang"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tibetsheets-toolbar-button-split-right tibetsheets-toolbar-menu-button tibetsheets-inline-block"
        data-tips="${toolbar.borderStyle}..." id="tibetsheets-icon-border-menu" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'border'
        mergeCell: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block tibetsheets-icon-merge-button"
        data-tips="${toolbar.mergeCell}" id="tibetsheets-icon-merge-button" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-merge iconfont tibetsheets-iconfont-hebing"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tibetsheets-toolbar-button-split-right tibetsheets-toolbar-menu-button tibetsheets-inline-block"
        data-tips="${toolbar.chooseMergeType}..." id="tibetsheets-icon-merge-menu" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Merge cells'
        horizontalAlignMode: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block tibetsheets-icon-align"
        data-tips="${toolbar.horizontalAlign}" id="tibetsheets-icon-align" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-align-left iconfont tibetsheets-iconfont-wenbenzuoduiqi"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tibetsheets-toolbar-button-split-right tibetsheets-toolbar-menu-button tibetsheets-inline-block"
        data-tips="${toolbar.alignment}..." id="tibetsheets-icon-align-menu" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Horizontal alignment'
        verticalAlignMode: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block tibetsheets-icon-valign"
        data-tips="${toolbar.verticalAlign}" id="tibetsheets-icon-valign" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-valign-bottom iconfont tibetsheets-iconfont-dibuduiqi"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tibetsheets-toolbar-button-split-right tibetsheets-toolbar-menu-button tibetsheets-inline-block"
        data-tips="${toolbar.alignment}..." id="tibetsheets-icon-valign-menu" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Vertical alignment'
        textWrapMode: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block tibetsheets-icon-textwrap"
        data-tips="${toolbar.textWrap}" id="tibetsheets-icon-textwrap" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-textwrap-clip iconfont tibetsheets-iconfont-jieduan"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tibetsheets-toolbar-button-split-right tibetsheets-toolbar-menu-button tibetsheets-inline-block"
        data-tips="${toolbar.textWrapMode}..." id="tibetsheets-icon-textwrap-menu" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Wrap mode'
        textRotateMode: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block tibetsheets-icon-rotation"
        data-tips="${toolbar.textRotate}" id="tibetsheets-icon-rotation" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-rotation-none iconfont tibetsheets-iconfont-wuxuanzhuang"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tibetsheets-toolbar-button-split-right tibetsheets-toolbar-menu-button tibetsheets-inline-block"
        data-tips="${toolbar.textRotateMode}..." id="tibetsheets-icon-rotation-menu" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Text Rotation Mode'
        image: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block"
        data-tips="${toolbar.insertImage}" id="tibetsheets-insertImg-btn-title" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-rotation-none iconfont tibetsheets-iconfont-tupian"
                            style="user-select: none;">
                                <input id="tibetsheets-imgUpload" type="file" accept="image/*" style="display:none;"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`, // 'Insert picture'
        link: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block"
        data-tips="${toolbar.insertLink}" id="tibetsheets-insertLink-btn-title" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-rotation-none iconfont tibetsheets-iconfont-lianjie"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`, // 'Insert link'(TODO)
        chart: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block"
        data-tips="${toolbar.chart}" id="tibetsheets-chart-btn-title" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-rotation-none iconfont tibetsheets-iconfont-tubiao"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'chart' (the icon is hidden, but if the chart plugin is configured, you can still create a new chart by right click)
        postil: `<div class="tibetsheets-toolbar-select tibetsheets-toolbar-menu-button tibetsheets-inline-block" data-tips="${toolbar.postil}"
        id="tibetsheets-icon-postil" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon-img-container tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block iconfont tibetsheets-iconfont-zhushi"
                    style="user-select: none;">
                    </div>
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'comment'
        pivotTable: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block"
        data-tips="${toolbar.pivotTable}" id="tibetsheets-pivot-btn-title" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-rotation-none iconfont tibetsheets-iconfont-shujutoushi"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'PivotTable'
        function: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block tibetsheets-icon-function"
        data-tips="${toolbar.autoSum}" id="tibetsheets-icon-function" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-function iconfont tibetsheets-iconfont-jisuan"
                        style="user-select: none;">
                        </div>
                    </div>
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        ${toolbar.sum}
                    </div>
                </div>
            </div>
        </div>
        <div class="tibetsheets-toolbar-button-split-right tibetsheets-toolbar-menu-button tibetsheets-inline-block"
        data-tips="${toolbar.moreFunction}..." id="tibetsheets-icon-function-menu" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'formula'
        frozenMode: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block tibetsheets-freezen-btn-horizontal"
        data-tips="${toolbar.freezeTopRow}" id="tibetsheets-freezen-btn-horizontal" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">

                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-rotation-none iconfont tibetsheets-iconfont-dongjie1"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="tibetsheets-toolbar-button-split-right tibetsheets-toolbar-menu-button tibetsheets-inline-block"
        data-tips="${toolbar.moreOptions}..." id="tibetsheets-icon-freezen-menu" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'freeze mode'
        sortAndFilter: `<div class="tibetsheets-toolbar-select tibetsheets-toolbar-menu-button tibetsheets-inline-block" data-tips="${toolbar.sortAndFilter}"
        id="tibetsheets-icon-autofilter" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-autofilter iconfont tibetsheets-iconfont-shaixuan"
                        style="user-select: none;">
                        </div>
                    </div>
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;margin-left: 0px;margin-right: 4px;">
                    </div>
                </div>
            </div>
        </div>`, //'Sort and filter'
        conditionalFormat: `<div class="tibetsheets-toolbar-select tibetsheets-toolbar-menu-button tibetsheets-inline-block" data-tips="${toolbar.conditionalFormat}"
        id="tibetsheets-icon-conditionformat" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">

                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-autofilter iconfont tibetsheets-iconfont-geshitiaojian"
                        style="user-select: none;">
                        </div>
                    </div>
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Conditional Format'
        dataVerification: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block"
        data-tips="${toolbar.dataVerification}" id="tibetsheets-dataVerification-btn-title" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-rotation-none iconfont tibetsheets-iconfont-shujuyanzheng"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`, // 'Data Verification'
        splitColumn: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block"
        data-tips="${toolbar.splitColumn}" id="tibetsheets-splitColumn-btn-title" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-rotation-none iconfont tibetsheets-iconfont-wenbenfenge"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Split column'
        screenshot: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block"
        data-tips="${toolbar.screenshot}" id="tibetsheets-chart-btn-screenshot" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-rotation-none iconfont tibetsheets-iconfont-jieping"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'screenshot'
        findAndReplace: `<div class="tibetsheets-toolbar-select tibetsheets-toolbar-menu-button tibetsheets-inline-block" data-tips="${toolbar.findAndReplace}"
        id="tibetsheets-icon-seachmore" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">

                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-autofilter iconfont tibetsheets-iconfont-sousuo"
                        style="user-select: none;">
                        </div>
                    </div>
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;margin-left: 0px;margin-right: 4px;">
                    </div>
                </div>
            </div>
        </div>`, //'Find and Replace'
        protection: `<div class="tibetsheets-toolbar-button-split-left tibetsheets-toolbar-button tibetsheets-inline-block"
        data-tips="${toolbar.protection}" id="tibetsheets-icon-protection" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-menu-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">
                    <div class="tibetsheets-toolbar-menu-button-caption tibetsheets-inline-block"
                    style="user-select: none;">
                        <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-rotation-none iconfont tibetsheets-iconfont-biaogesuoding"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`, // 'Worksheet protection'
        print: `<div class="tibetsheets-toolbar-select tibetsheets-toolbar-menu-button tibetsheets-inline-block" data-tips="${toolbar.print}"
        id="tibetsheets-icon-print" role="button" style="user-select: none;">
            <div class="tibetsheets-toolbar-menu-button-outer-box tibetsheets-inline-block"
            style="user-select: none;">
                <div class="tibetsheets-toolbar-button-inner-box tibetsheets-inline-block"
                style="user-select: none;">

                    <div class="tibetsheets-icon tibetsheets-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="tibetsheets-icon-img-container tibetsheets-icon-img tibetsheets-icon-autofilter iconfont tibetsheets-iconfont-dayin"
                        style="user-select: none;">
                        </div>
                    </div>
                    <div class="tibetsheets-toolbar-menu-button-dropdown tibetsheets-inline-block iconfont tibetsheets-iconfont-xiayige"
                    style="user-select: none;margin-left: 0px;margin-right: 4px;">
                    </div>
                </div>
            </div>
        </div>` // 'print'
    };

    const showtoolbar = tibetsheetsConfigsetting.showtoolbar;
    const showtoolbarConfig = tibetsheetsConfigsetting.showtoolbarConfig;

    const buttonHTML = ['<div class="tibetsheets-toolbar-left-theme"></div>'];

    // 数组形式直接生成
    if (getObjType(showtoolbarConfig) === 'array') {
        // 此时不根据 showtoolbar=false，showtoolbarConfig为某几个进行适配，此时showtoolbarConfig本身就是全部要显示的按钮
        if (!showtoolbar) {
            return '';
        }
        let i = 0;
        showtoolbarConfig.forEach(function(key, i) {
            if (key === '|') {
                const nameKeys = showtoolbarConfig[i - 1]
                if(nameKeys !== '|') {
                    buttonHTML.push(
                        `<div id="toolbar-separator-${camel2split(nameKeys)}" class="tibetsheets-toolbar-separator tibetsheets-inline-block" style="user-select: none;"></div>`
                        );
                }
            } else {
                buttonHTML.push(htmlMap[key]);
            }
        });
        return buttonHTML.join('');
    }

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

    // 对象模式 则从里面挑选 true 保留 false 删掉
    if (JSON.stringify(showtoolbarConfig) !== '{}') {
        if(showtoolbarConfig.hasOwnProperty('undoRedo')){
            config.undo = config.redo = showtoolbarConfig.undoRedo;
        }
        Object.assign(config, showtoolbarConfig);
    }
    for (let i = 0; i < defaultToolbar.length; i++) {
        let key = defaultToolbar[i];
        if (!config[key] && key !== '|') {
            // 如果当前元素隐藏 按照之前的规则 后面紧跟的 | 分割也不需要显示了
            if (defaultToolbar[i + 1] === '|') {
                i++;
            }
            continue;
        }
        if (key === '|') {
            const nameKeys = defaultToolbar[i - 1]
            if(nameKeys !== '|') {
                buttonHTML.push(
                    `<div id="toolbar-separator-${camel2split(nameKeys)}" class="tibetsheets-toolbar-separator tibetsheets-inline-block" style="user-select: none;"></div>`
                );
            }
        } else {
            buttonHTML.push(htmlMap[key]);
        }
    }
    return buttonHTML.join('');
}
