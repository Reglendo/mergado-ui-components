"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Color = require("color");
exports.colors = {
    blue: "#009ba9",
    green: "#69A120",
    red: "#EA4E4B",
    grey: "#ccc",
    yellow: "#FFEC88",
    orange: "#FF9500",
    purple: "#793979",
    text: "#333",
    background: "transparent",
    decoration: "#dbcba3",
    decoration_background: "white"
};
var theme = __assign({}, exports.colors, { 
    /* colors type */
    warning: exports.colors.orange, error: exports.colors.red, success: exports.colors.green, info: "white", inactive: exports.colors.grey, message: exports.colors.yellow, 
    /* general */
    radius: "0px", selected_background: Color(exports.colors.yellow).string(), hover_background: Color(exports.colors.yellow).fade(0.5).string(), 
    /* section */
    section_border: "none", section_padding: "0", 
    /* form */
    form_label_text_size: "14px", form_label_text_weight: "normal", 
    /* input */
    input_border: "1px solid " + exports.colors.decoration, input_border_active: "1px solid " + exports.colors.decoration, input_border_error: "1px solid " + exports.colors.decoration, 
    /* button */
    button_text_transform: "uppercase", button_text_size: "14px", button_text_weight: "bold", 
    /* datagrid */
    table_border_vertical: "1px dotted " + exports.colors.decoration, table_border_horizontal: "1px solid " + exports.colors.decoration, table_header_text_size: "13px", table_header_text_transform: "none", table_cell_padding: "6px 10px", table_cell_text_size: "14px", 
    /* nav */
    nav_background: exports.colors.decoration, nav_link_color: exports.colors.text, nav_link_background: "transparent", nav_link_background_active: exports.colors.decoration, nav_link_border: "none" });
exports["default"] = theme;
