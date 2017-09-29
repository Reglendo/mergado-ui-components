import * as Color from "color"

export const colors = {
    blue: "#009ba9",
    green: "#69A120",
    red: "#EA4E4B",
    grey: "#ccc",
    yellow: "#FFEC88",
    orange: "#FF9500",

    text: "#333",
    background: "transparent",
    decoration: "#dbcba3",
    decoration_background: "white",
}

const theme = {
    ...colors,
    /* colors type */
    warning: colors.orange,
    error: colors.red,
    success: colors.green,
    info: "white",
    inactive: colors.grey,
    message: colors.yellow,

    /* general */
    radius: "0px",
    selected_background: Color(colors.yellow).string(),
    hover_background: Color(colors.yellow).fade(0.5).string(),

    /* section */
    section_border: "none",
    section_padding: "0",


    /* form */
    form_label_text_size: "14px",
    form_label_text_weight: "normal",

    /* input */
    input_border: "1px solid " + colors.decoration,
    input_border_active: "1px solid " + colors.decoration,
    input_border_error: "1px solid " + colors.decoration,

    /* button */
    button_text_transform: "uppercase",
    button_text_size: "14px",
    button_text_weight: "bold",

    /* datagrid */

    table_border_vertical: "1px dotted " + colors.decoration,
    table_border_horizontal: "1px solid " + colors.decoration,

    table_header_text_size: "13px",
    table_header_text_transform: "none",

    table_cell_padding: "6px 10px",
    table_cell_text_size: "14px",

    /* nav */
    nav_background: colors.decoration,
    nav_link_color: colors.text,
    nav_link_background: "transparent",
    nav_link_background_active: colors.decoration,
    nav_link_border: "none",
}

export default theme
