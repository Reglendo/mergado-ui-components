import * as React from "react"
import cxs from "@reglendo/cxs/component"
import * as Color from "color"
import PropTypes from "prop-types"
import {Href, Button, Submit, Void} from "./types"

import Span from "../../Layout/Span"

const UniversalButton = ({...props}) => {
    const { className, name, type, link, labels, icon, input, to, children, ...others } = props
    if(type === "href") {
        return <Href
                    {...others}
                    className={`m-button-href ${className || ""}`}
                    name={name}
                    title={labels.title}
                    link={to ? to : link}
                    icon={icon}
                    children={children}
                    label={others.label ? others.label : labels.main}
                />
    } else if(type === "link") {
        const { group, meta, element, style, ...p } = others
        delete p.input
        delete p.labels
        const Element: any = {...props.element, props: p, attributes: {...p} }
        return <Span  className={`muk-button m-link`} {...style}>{Element}</Span>

   } else if(type === "button") {
        return <Button
                    className={`muk-button m-button ${className || ""}`}
                    {...others}
                    name={name}
                    title={labels.title}
                    icon={icon}
                    input={input}
                    children={children}
                    label={others.label ? others.label : labels.main}
                />
    } else if(type === "submit") {
        return <Submit
                    className={`m-button-submit ${className || ""}`}
                    {...others}
                    name={name}
                    title={labels.title}
                    input={input}
                    label={others.label ? others.label : labels.main}
                />
    } else if(type === "void") {
        return <Void
                    className={`m-button-void ${className || ""}`}
                    {...others}
                    name={name}
                    icon={icon}
                    title={labels.title}
                    children={children}
                    label={others.label ? others.label : labels.main}
                />
    } else {
        return <div/>
    }
}

export const CssUniversalButton = cxs(UniversalButton)({
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
        position: "relative",
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
}, props => {
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
            color: props.theme.blue,
            "&:active,&:focus": {
              borderColor: "transparent",
              outline: "none",
              background: "rgba(200,200,200,0.2)",
            },
            " path": {
                fill: props.keepColors ? "keep" : (props.theme.blue + "!important"),
            },
        }
    } else {
        let c = props.theme[props.color === "gray" ? "grey" : props.color]
        if(c === props.theme.grey) {
            c = Color(c).darken(0.2).string()
        }
        if(props.secondary) {
            color = {
                backgroundColor: "white",
                borderColor: c,
                color: props.color === "decoration" ? props.theme.blue : c,
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
                    fill: props.keepColors ? "keep" : ( (props.color === "decoration" ? props.theme.blue : c) + "!important"),
                },
            }
        } else {
            color = {
                backgroundColor: c,
                borderColor: c,
                color: props.color === "decoration" ? props.theme.blue : "white",
                ":hover": {
                    backgroundColor: Color(c).darken(0.1).string(),
                    borderColor: Color(c).darken(0.1).string(),
                },
                ":active,:focus": {
                      background: Color(c).darken(0.2).string(),
                      borderColor: Color(c).darken(0.2).string(),
                },
                " path": {
                    fill: props.keepColors ? "keep" : ((props.color === "decoration" ? props.theme.blue : "white") + "!important"),
                },
            }
        }
    }

    return {
        ...size,
        ...disabled,
        ...color,
        borderRadius: props.theme.radius,
        textTransform: props.theme.button_text_transform,
        fontWeight: props.theme.button_text_weight,
        fontSize: props.size === "tiny" ? "13px" : props.theme.button_text_size,
        ...props.s,
    }
})

CssUniversalButton.propTypes = {
    size: PropTypes.string,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    secondary: PropTypes.bool,
    keepColors: PropTypes.bool,

    s: PropTypes.any,
}
