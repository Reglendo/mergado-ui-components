import Color from "color"


const stylesSelectItem = {
    "! .react-select-item-container + .icon-select-open": {
        opacity: 0,
        position: "absolute", bottom: "9px",
        right: "10px", pointerEvents: "none"
    },
    "! .react-select-item-empty + .icon-select-open": {
      opacity: 0.6,
    },
    "& .react-select-item-container": {
        position: "relative",
    },
    "& .react-select-item-container.active": {
        background: "rgb(255, 255, 196) !important",
    },
    "& .react-select-item": {
        padding: "0",
        display: "inline-block",
        cursor: "pointer",
        border: "none",
        width: "100%",
        textAlign: "left",
        backgroundColor: "transparent",
        fontSize: "14px",

    },

    "& .react-select-item:focus": {
        outline: "0"
    },

    "& .react-select-item-label, .react-select-item-option": {
        fontSize: "13px",
        textOverflow: "ellipsis",
        overflow: "hidden",
    },

    "& .react-select-item-label .highlighter, .react-select-item-option .highlighter": {
        backgroundColor: "#ACC1C8"
    },
    "& .react-select-item-label": {
        padding: "0 40px 0 0px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    "& .react-select-item-empty .react-select-item-label": {
        color: "#CECECE"
    },
    "& .react-select-item-clear": {
        position: "absolute",
        top: "12px",
        right: "0",
        width: "35px",
        height: "20px",
        textIndent: "-9999em",
        zIndex: "3",
        border: "none",
        color: "#7B8E9B",
        backgroundColor: "transparent",
    },
    "& .react-select-item-clear:before": {
        content: "×",
        position: "absolute",
        top: "1px",
        left: "10px",
        zIndex: "1",
        backgroundColor: "transparent",
        borderRadius: "100%",
        fontSize: "16px",
        lineHeight: "1.1",
        width: "16px",
        height: "16px",
        textIndent: "0",
        textAlign: "center",
    },
    "& .react-select-item-clear:hover, .react-select-item-clear:focus": {
        outline: "0",
        cursor: "pointer"
    },
    "& .react-select-item-clear:focus:hover:before, .react-select-item-clear:hover:before": {
        color: "black"
    },
    "& .react-select-item-clear:focus:before": {
        color: "black"
    },
    "& .react-select-item-hidden": {
        display: "none"
    },
    "& .react-select-item-options": {
        position: "absolute",
        padding: "0",
        top: "100%",
        left: "3px",
        width: "calc(100% - 6px)",
        zIndex: "4",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        border: "1px solid #CBD2D7",
        borderTop: "none",
        marginTop: "0",
        fontSize: "13px",
    },
    "& .react-select-item-options:focus": {
        outline: "none"
    },
    "& .react-select-item-options-list": {
        listStyle: "none outside",
        margin: "0",
        padding: "0"
    },
    "& .select-item-no-results": {
        color: "#707070",
        padding: "9px 10px",
        fontSize: "14px",
        fontWeight: "600"
    },
    "& .react-select-item-option": {
        padding: "5px 20px",
        margin: "0",
        cursor: "pointer",
        display: "block",
        lineHeight: "1.5",
        textDecoration: "none",
        borderBottom: "1px solid #eee"
    },
    "& .react-select-item-option:hover": {
        color: "#3A3A3A",
        backgroundColor: "#f4f4f4",
        textDecoration: "none",
    },
    "& .react-select-item-option:focus": {
        outline: "0",
        textDecoration: "none",
        color: "#7B8E9B"
    },
    "& .react-select-item-option-selected": {
        color: "#fff !important",
        backgroundColor: "#00A3D7"
    },
    "& .react-select-item-option-selected:hover": {
        backgroundColor: "#00A3D7"
    },
    "& .react-select-item-option-selected:after": {
        color: "#fff !important",
        content: "×",
        float: 'right'
    },
    "& .react-select-item-option-disabled": {
        background: "#c4c4c4",
        color: "#000",
        opacity: 0.5,
        pointerEvents: "none",
    },
    "& .react-select-item-close": {
        textTransform: "uppercase",
        backgroundColor: "transparent",
        border: "none",
        padding: "5px 0",
        display: "block",
        textAlign: "center",
        width: "100%",
        fontWeight: "bold",
        cursor: "pointer",
        outline: "none"
    },
    "& .react-select-item-empty .react-select-item-close": {
        color: "#CBD2D7"
    },
    "& .react-select-item-native": {
        position: "absolute",
        left: "-99999em"
    },
    "& .react-select-item-off-screen.no-items": {
        padding: "10px 20px",
        fontSize: "14px",
        color: "#7B8E9B",
        fontWeight: "bold"
    }
}

export const styles = {
    ...stylesSelectItem,
    boxSizing: "border-box",
    width: "100%",
    height: "40px",
    lineHeight: "40px",
    outline: "none",
    display: "inline-block",
    margin: "0",
    background: "white",
    color: "#333333",
    verticalAlign: "middle",
    padding: "0 10px",
    borderWidth: "1px",
    borderStyle: "solid",
    appearance: "none",
    transition: "border-color 0.2s",
    willChange: "border-color",
    ":focus": {
        outline: "none",
        border: "none",
    },
    ":active": {
        outline: "none",
        border: "none",
    },
    "::-ms-expand": {
        display: "none",
    },
    "::-moz-focusring": {
        color: "transparent",
        textShadow: "0 0 0 #000",
    },
}

export const stylesProps = (props) => {
    const theme = props.theme

    let disabled = {}
    if (props.disabled) {
        disabled = {
            color: "#999",
            background: "#eee",
            borderColor: Color(theme.grey).fade(0.5).string(),
            pointerEvents: "none",
        }
    }

    return {
        borderRadius: theme.radius,
        border: props["aria-invalid"] ? theme.input_border_error : theme.input_border,
        ":active": {
            border: theme.input_border_active,
        },
        ":focus": {
            border: theme.input_border_active,
        },
        ...disabled,
    }
}