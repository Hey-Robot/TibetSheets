export function showloading(txt) {
    $("#tibetsheets-cell-loading").find("span").text(txt).end().show();
};

export function hideloading() {
    $("#tibetsheets-cell-loading").hide();
};
