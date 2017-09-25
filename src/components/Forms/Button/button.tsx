import * as React from "react"
import glamorous from "glamorous"
import {css} from "glamor"
import * as Color from "color"

import {Href, Button, Link, Submit, Void} from "./types"

const UniversalButtonComponent = ({...props}) => {
    const { name, type, link, labels, icon, input, to, children, ...others } = props
    if(type === "href") {
        return <Href
                    {...others}
                    name={name}
                    title={labels.title}
                    link={to ? to : link}
                    icon={icon}
                    children={children}
                    label={others.label ? others.label : labels.main}
                    styleClass={UniversalStyle}
                />
    } else if(type === "button") {
        return <Button
                    {...others}
                    name={name}
                    title={labels.title}
                    icon={icon}
                    input={input}
                    children={children}
                    label={others.label ? others.label : labels.main}
                    styleClass={UniversalStyle}
                />
    } else if(type === "link") {
        return <Link
                    {...others}
                    name={name}
                    title={labels.title}
                    icon={icon}
                    children={children}
                    link={to ? to : link}
                    label={others.label ? others.label : labels.main}
                    styleClass={UniversalStyle}
                />
    } else if(type === "submit") {
        return <Submit
                    {...others}
                    name={name}
                    title={labels.title}
                    input={input}
                    label={others.label ? others.label : labels.main}
                    styleClass={UniversalStyle}
                />
    } else if(type === "void") {
        return <Void
                    {...others}
                    name={name}
                    icon={icon}
                    title={labels.title}
                    children={children}
                    label={others.label ? others.label : labels.main}
                    styleClass={UniversalStyle}
                />
    } else {
        return <div/>
    }
}

const UniversalStyle = css({
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
    "& .muk-icon": {
        margin: "0 0 0 0",
        position: "relative",
        top: "-3px",
        verticalAlign: "middle",
    },
    "& .muk-icon svg": {
        verticalAlign: "middle",
    },
    "& .muk-popup_hint": {
        verticalAlign: "middle !important",
    },
    "& a": {
        color: "white",
    },
})

export const UniversalButton = glamorous(UniversalButtonComponent)({
}, props => {
    const style = []
    if(props.size === "tiny") {
        style.push({
            padding: "2px 2px",
            fontSize: "13px",
        })
    }else if(props.size === "small") {
        style.push({
            padding: "8px 15px",
        })
    }
    if(props.disabled) {
        style.push({
            opacity: 0.5,
            cursor: "default",
            pointerEvents: "none",
        })
    }
    if(props.color === "nocolor") {
        style.push({
            background: "transparent",
            padding: "0 2px",
            borderColor: "transparent",
            color: props.theme.blue,
            ":active,:focus": {
              borderColor: "transparent",
              outline: "none",
              background: "rgba(200,200,200,0.2)",
            },
            "& path": {
                fill: props.theme.blue + "!important",
            },
        })
    } else {
        let color = props.theme[props.color === "gray" ? "grey" : props.color]
        if(color === props.theme.grey) {
            color = Color(color).darken(0.2)
        }
        if(props.secondary) {
            style.push({
                backgroundColor: "white",
                borderColor: color,
                color: props.color === "decoration" ? props.theme.blue : color,
                ":hover": {
                    backgroundColor: Color(color).fade(0.8),
                    borderColor: Color(color),
                },
                ":active,:focus": {
                  background: Color(color).fade(0.2),
                  borderColor: Color(color).fade(0.2),
                  color: "white",
                },
                "& path": {
                    fill: (props.color === "decoration" ? props.theme.blue : color) + "!important",
                },
            })
        } else {
            style.push({
                backgroundColor: color,
                borderColor: color,
                color: props.color === "decoration" ? props.theme.blue : "white",
                ":hover": {
                    backgroundColor: Color(color).darken(0.1),
                    borderColor: Color(color).darken(0.1),
                },
                ":active,:focus": {
                  background: Color(color).darken(0.2),
                  borderColor: Color(color).darken(0.2),
                },
                "& path": {
                    fill: (props.color === "decoration" ? props.theme.blue : "white") + "!important",
                },
            })
        }
    }
    style.push({
        borderRadius: props.theme.radius,
        textTransform: props.theme.button_text_transform,
        fontWeight: props.theme.button_text_weight,
        fontSize: props.size === "tiny" ? "13px" : props.theme.button_text_size,
    })

    return style
})
