import * as React from "react"
import css from "../../css"
import {Field, IField} from "../Form/Field"
import * as Color from "color"
import Theme from "../Theme"

export interface Props extends IField {
    type?: "button" | "submit" | "void" | "href"
    link?: string
    to?: string
    icon?: JSX.Element | string
    color?: "blue" | "gray" | "grey" | "green" | "red" | "nocolor" | "yellow" | "orange" | "transparent" | "decoration"
    size?: "small" | "smaller" | "tiny" | string
    disabled?: boolean
    onClick?: (evt: any) => any
    secondary?: boolean
    keepColors?: boolean
    children?: any
}

export class Button extends React.PureComponent<Props, {}> {
    protected readonly name = "muk-button";

    public static defaultProps: Props = {
        type: "button",
        icon: null,
        color: "blue",
        disabled: false,
        size: "",
        secondary: false,
    }

    public render() {
        const { className, to, link, icon, label, children, type, ...props } = this.props

        switch(type) {
            case "href":
                return <StyledHref {...props}
                            className={`muk-button m-button-href ${className ? className : ""}`}
                            href={to ? to : link}>
                                {icon}{icon && " "}{label}{children}
                        </StyledHref>
            case "button":
                return <StyledButton {...props}
                            className={`muk-button m-button ${className ? className : ""}`}>
                                {icon}{icon && " "}{label}{children}
                        </StyledButton>
            case "void":
                return <StyledSpan {...props}
                            className={`muk-button m-button-void ${className ? className : ""}`}
                        >
                            {icon}{icon && " "}{label}{children}
                        </StyledSpan>
            case "submit":
                const p:any = {...props}
                delete p.style
                return <CssField className={`m-field  m-${props.color} ${!label ? `m-notext`:``} ${props.size ? `m-${props.size}` : ``} ${this.name}--${type} ${props.disabled ? `m-disabled`:``}`}
                            {...this.props} name={this.name}
                            style={{ marginBottom: 0, ...props.style }}
                            >
                                <StyledInput {...p}
                                    className={`muk-button m-button-submit ${className ? className : ""}`}
                                    type="submit"
                                    name={props.name}
                                    value={children}
                                />
                        </CssField>
            default:
                return false
        }
    }
}

const CssField = css(Field)({
    display: "inline-block",
    verticalAlign: "top",
})

const StyledButton = css("button")({
    boxSizing: "border-box",
    display: "inline-block",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    userSelect: "none",
    padding: "12px 25px",
    lineHeight: "1.5em",
    borderWidth: "1px",
    borderStyle: "solid",
    ":hover": {
      textDecoration: "none",
    },
    ":last-child": {
        marginRight: 0,
    },
    " .muk-icon": {
        margin: "0 0 0 0",
        // position: "relative",
        top: "auto",
        verticalAlign: "middle",
    },
    " .muk-icon svg": {
        verticalAlign: "middle",
    },
    " .muk-popup_hint": {
        verticalAlign: "middle !important",
    },
    " a": {
        color: "white",
    },
}, (props: { size?: string, disabled?: boolean, color?: string, keepColors?: boolean, secondary?: boolean, simple?: boolean }) => {
    let size = {}
    if(props.size === "tiny") {
        size = {
            padding: "2px 2px",
            fontSize: "13px",
        }
    }else if(props.size === "small") {
        size = {
            padding: "8px 15px",
        }
    } else if(props.size === "smaller") {
        size = {
            padding: "5px 8px",
        }
    }
    let disabled = {}
    if(props.disabled) {
        disabled = {
            opacity: 0.5,
            cursor: "default",
            pointerEvents: "none",
        }
    }
    let color = {}
    if(props.color === "nocolor") {
        color = {
            background: "transparent",
            padding: "0 2px",
            borderColor: "transparent",
            color: Theme.blue,
            "&:active,&:focus": {
              borderColor: "transparent",
              outline: "none",
              background: "rgba(200,200,200,0.2)",
            },
            " path": {
                fill: props.keepColors ? "keep" : (Theme.blue + "!important"),
            },
        }
    } else {
        let c = Theme[props.color === "gray" ? "grey" : props.color]
        if(c === Theme.grey) {
            c = Color(c).darken(0.2).string()
        }
        if(props.secondary) {
            color = {
                backgroundColor: "transparent",
                borderColor: c,
                color: props.color === "decoration" ? Theme.blue : c,
                "&:hover": {
                    backgroundColor: Color(c).fade(0.8).string(),
                    borderColor: Color(c).string(),
                },
                "&:active,&:focus": {
                  background: Color(c).fade(0.2).string(),
                  borderColor: Color(c).fade(0.2).string(),
                  color: "white",
                },
                " path": {
                    fill: props.keepColors ? "keep" : ( (props.color === "decoration" ? Theme.blue : c) + "!important"),
                },
            }
        } else if(props.simple) {
            color = {
                border: "none",
                background: "transparent",
                color: c,
                "&:hover": {
                    color: Color(c).fade(0.5).string(),
                },
                "&:active,&:focus": {
                    color: Color(c).fade(0.8).string(),
                    border: "none",
                },
                " path": {
                    fill: props.keepColors ? "keep" : ( (props.color === "decoration" ? Theme.blue : c) + "!important"),
                },
            }
        } else {
            color = {
                backgroundColor: c,
                borderColor: c,
                color: props.color === "decoration" ? Theme.blue : "white",
                ":hover": {
                    backgroundColor: Color(c).darken(0.1).string(),
                    borderColor: Color(c).darken(0.1).string(),
                },
                ":active,:focus": {
                      background: Color(c).darken(0.2).string(),
                      borderColor: Color(c).darken(0.2).string(),
                },
                " path": {
                    fill: props.keepColors ? "keep" : ((props.color === "decoration" ? Theme.blue : "white") + "!important"),
                },
            }
        }
    }

    return {
        ...size,
        ...disabled,
        ...color,
        borderRadius: Theme.radius,
        textTransform: Theme.button_text_transform,
        fontWeight: Theme.button_text_weight,
        fontSize: props.size === "tiny" ? "13px" : Theme.button_text_size,
    }
})

const StyledHref = StyledButton.withComponent('a')
const StyledSpan = StyledButton.withComponent('span')
const StyledInput = StyledButton.withComponent('input')


export default Button
