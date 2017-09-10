import defaultTheme, {colors as defaultColors} from "./default"

const colors = {
    ...defaultColors,
    /*colors*/
    blue: "#009ba9",
    green: "#69A120",
    red: "#EA4E4B",
    grey: "#888",
    yellow: "#DBCBA3",
    orange: "#FF9500",
}

const theme = {
    ...defaultTheme,
    ...colors,

    /* general */
    radius: "4px",

    /* form */
    form_label_text_size: "13px",
    form_label_text_weight: "600",

    /* input */
    input_border: "1px solid " + colors.decoration,
    input_border_active: "1px solid " + colors.blue,
    input_border_error: "1px solid " + colors.red,

    /* button */
    button_text_transform: "none",

    /* datagrid */
    table_border_vertical: "1px solid #dbcba3",
    table_border_horizontal: "1px solid #dbcba3",
    table_header_text_size: "11px",
    table_header_text_transform: "uppercase",
    table_cell_padding: "12px 8px 8px 8px",
    table_cell_text_size: "15px",

}

export default theme
