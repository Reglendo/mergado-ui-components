import * as React from "react"
import css from "cxs/component"


export const Root = ({children,className = "", ...props}) => {
    return <RootStyles className={className} {...props}>
                {children}
            </RootStyles>
}

const base = {
    position: "relative",
    margin: "0 auto",
    textAlign: "left",
    fontSize: "16px",
    fontFamily: "'Roboto', Arial, Helvetica, Verdana, Sans-serif",
    background: "#f5ecd5",
    color: "#333",
    " .muk-icon__text": {
        margin: "0 5px",
        verticalAlign: "middle",
    },
    " .muk-icon__image, .muk-popup_hint__trigger .muk-icon": {
        verticalAlign: "middle"
    },
}

const typo = {

    "!html": {
        fontSize: "62.5%",
    },
    "!body": {
        fontSize: "1.4em",
        lineHeight: 1.5,
    },
    "!p,ul,ol,dl,blockquote,pre,caption": {
        fontSize: "1em",
        lineHeight: "1.5",
        margin: "1.5em 0",
    },
    "!li p,li ul": {
        marginTop: 0,
        marginBottom: 0,
    },
    "!textarea,table,td,th,code,pre,samp,div,p": {
        wordWrap: "break-word",
        hyphens: "auto",
    },
    "!code, pre, samp": {
    whiteSpace: "pre-wrap",
    fontFamily: "consolas, 'DejaVu Sans Mono', courier, monospace",
    },
    "!code": {
        lineHeight: 1,
    },
    "!table": {
        marginBottom: "1.5em",
    }
}

const helpers = {
    "& .muk-helper-clearfix:after": {
        content: "",
        display: "table",
        clear: "both",
    },
    "& .muk-helper-loading": {
        userSelect: "none",
        position: "relative",
        pointerEvents: "none",
    },
    "& .muk-helper-loading:after": {
        position: "absolute",
        pointerEvents: "none",
        top: 0,
        left: 0,
        content: " ",
        width: "100%",
        height: "100%",
        opacity: .5,
        background: "repeating-linear-gradient(-55deg,#ccc,#ccc 10px,#ddd 10px,#ddd 20px)",
        animation: "sliding 0.5s linear infinite",
        transform: "translateZ(0)",
        willChange: "background-position",
        backgroundSize: "25px 100%",
        zIndex: 1000000,
        outline: "3px solid #dbcba3",
    },
    "& .muk-helper-loading--in": {
        background: "repeating-linear-gradient(-55deg,rgba(220,220,220,0.8),rgba(200,220,220,0.8) 10px,rgba(230,230,230,0.8) 10px,rgba(230,230,230,0.8) 20px)",
        backgroundSize: "25px 100%",
        animation: "sliding 0.5s linear infinite",
        transform: "translateZ(0)",
        willChange: "background-position",
        pointerEvents: "none",
    },
    "@keyframes sliding": {
        "from": {
            backgroundPositionX: 0
        },
        "to": {
            backgroundPositionX: "25px",
        }
    },
}

const RootStyles = css("div")({
    ...base,
    ...helpers,
    ...typo,
})

export default Root