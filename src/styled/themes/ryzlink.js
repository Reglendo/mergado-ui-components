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
var default_1 = require("./default");
var colors = __assign({}, default_1.colors, { 
    /*colors*/
    blue: "#009ba9", green: "#69A120", red: "#EA4E4B", grey: "#ccc", yellow: "#ffec88", orange: "#FF9500", purple: "#793979", background: "white", decoration: "#dbcba3", decoration_background: "#FAF7F1" });
var theme = __assign({}, default_1["default"], colors, { 
    /* colors type */
    warning: colors.orange, error: colors.red, success: colors.green, info: colors.decoration_background, inactive: colors.grey, message: colors.yellow, 
    /* general */
    radius: "5px", selected_background: Color(colors.blue).fade(0.8).string(), hover_background: Color(colors.blue).fade(0.95).string(), 
    /* section */
    section_border: "1px solid #dcd8ca", section_padding: "20px", 
    /* form */
    form_label_text_size: "13px", form_label_text_weight: "600", 
    /* input */
    input_border: "1px solid " + colors.decoration, input_border_active: "1px solid " + colors.blue, input_border_error: "1px solid " + colors.red, 
    /* button */
    button_text_transform: "none", button_text_size: "16px", button_text_weight: "bold", 
    /* datagrid */
    table_border_vertical: "1px solid #dbcba3", table_border_horizontal: "1px solid #dbcba3", table_header_text_size: "11px", table_header_text_transform: "uppercase", table_cell_padding: "12px 8px 8px 8px", table_cell_text_size: "15px", 
    /* nav */
    nav_background: "transparent", nav_link_color: colors.blue, nav_link_background: "transparent", nav_link_background_active: "transparent", nav_link_border: "5px solid " + colors.blue });
exports["default"] = theme;
