import Color from "color"

export const styles = {
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
    // ":focus": {
    //     outline: "none",
    //     border: "none",
    // },
    // ":active": {
    //     outline: "none",
    //     border: "none",
    // },
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
        border: theme.input_border,
        borderWidth: props['aria-invalid'] ? "0px !important" : "1px",
        borderRadius: theme.radius,
        "&:active": {
            border: `${theme.input_border_active}`,
        },
        "&:focus": {
            border: `${theme.input_border_active}`,
        },
        ...disabled,
    }
}