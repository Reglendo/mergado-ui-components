import Color from "color"
import Theme from "../../Theme"

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
    "::-ms-expand": {
        display: "none",
    },
    "::-moz-focusring": {
        color: "transparent",
        textShadow: "0 0 0 #000",
    },
    border: Theme.input_border,
    borderRadius: Theme.radius,
    "&:active": {
        border: `${Theme.input_border_active}`,
    },
    "&:focus": {
        border: `${Theme.input_border_active}`,
    },
}

export const stylesProps = (props) => {

    let disabled = {}
    if (props.disabled) {
        disabled = {
            color: "#999",
            background: "#eee",
            borderColor: Color(Theme.grey).fade(0.5).string(),
            pointerEvents: "none",
        }
    }
    return {
        borderWidth: props['aria-invalid'] ? "0px !important" : "1px",
        ...disabled,
    }
}