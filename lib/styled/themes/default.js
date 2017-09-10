"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = {
    blue: "#009ba9",
    green: "#69A120",
    red: "#EA4E4B",
    grey: "#666",
    yellow: "#DBCBA3",
    orange: "#FF9500",
    decoration: "#dbcba3",
};
const theme = Object.assign({}, exports.colors, { 
    /* general */
    radius: "0px", 
    /* form */
    form_label_text_size: "14px", form_label_text_weight: "normal", 
    /* input */
    input_border: "1px solid " + exports.colors.decoration, input_border_active: "1px solid " + exports.colors.decoration, input_border_error: "1px solid " + exports.colors.decoration, 
    /* button */
    button_text_transform: "uppercase", button_text_size: "14px", button_text_weight: "bold", 
    /* datagrid */
    table_border_vertical: "1px dotted " + exports.colors.decoration, table_border_horizontal: "1px solid " + exports.colors.decoration, table_header_text_size: "13px", table_header_text_transform: "none", table_cell_padding: "6px 10px", table_cell_text_size: "14px" });
exports.default = theme;
//# sourceMappingURL=default.js.map