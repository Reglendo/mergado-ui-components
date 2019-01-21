import * as React from "react"
import css from "@reglendo/cxs/component"
import ryzlinkTheme from "../../styled/themes/ryzlink"

interface Props {
    style?: any
    className?: string
    children?: any
}

const App = (props: Props) => {
    const {children, className, style} = props
    return  <AppStyles className={className} style={style}>
                {children}
                <style>
                    {reset}
                </style>
            </AppStyles>
}

const reset = `
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin-ext')

article, aside, details, figcaption, figure,
footer, header, hgroup, nav, section {
  display: block; }

audio[controls], canvas, video {
  display: inline-block;
}

html {
  font-size: 100%;
  overflow-y: scroll;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%; }

html {
  height: 100%; }

input, select, textarea, button {
  font-family: inherit; }

abbr[title] {
  border-bottom: 1px dotted;
  cursor: help; }

b,
strong {
  font-weight: bold; }

blockquote {
  margin: 1em 40px; }

dfn {
  font-style: italic; }

mark {
  background: #ff0;
  color: #000; }

pre, code, kbd, samp {
  font-family: Consolas, "Ubuntu Mono", monospace;
  font-size: 10pt; }

pre {
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word; }

q {
  quotes: none; }

q:before, q:after {
  content: '';
  content: none; }

small {
  font-size: 80%; }

sub, sup {
  font-size: 80%;
  line-height: 0;
  position: relative;
  vertical-align: baseline; }

sup {
  top: -0.5em; }

sub {
  bottom: -0.25em; }

ul, ol {
  padding: 0 0 0 30px;
  margin: 10px 0; }

dd {
  margin: 0 0 0 40px; }

nav ul,
nav ol {
  list-style: none;
  padding: 0;
  margin: 0; }

img {
  border: 0;
  -ms-interpolation-mode: bicubic; }

svg:not(:root) {
  overflow: hidden; }

* {
  padding: 0px;
  margin: 0px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box; }

.cb {
  clear: both;
  border: none;
  margin: 0;
  overflow: hidden; }

.hidden {
  display: block;
  height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0; }

table {
  border-spacing: 0; }

input.button, input[type="submit"], input[type="button"] {
  cursor: pointer; }

fieldset {
  border: none; }

legend {
  border: 0;
  *margin-left: -7px;
  padding: 0; }

button, input, select, textarea {
  margin: 0;
  vertical-align: baseline;
  *vertical-align: middle; }

button, input {
  line-height: normal;
  }

button, input[type="button"], input[type="reset"], input[type="submit"] {
  cursor: pointer;
  -webkit-appearance: button; }

input[type="checkbox"], input[type="radio"] {
  -webkit-box-sizing: content-box;
  box-sizing: border-box; }

input[type="search"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  box-sizing: content-box; }

input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; }

button::-moz-focus-inner, input::-moz-focus-inner {
  border: 0;
  padding: 0; }

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical; }

input:invalid, textarea:invalid {
  background-color: #f0dddd; }

a, a:visited {
  text-decoration: none; }

a:hover, a:focus, a:active {
  text-decoration: underline; }
`

const selectItem = {
      "!.react-select-item-container + .icon-select-open": {
        opacity: 0,
        position: "absolute", bottom: "9px",
        right: "10px", pointerEvents: "none"
    },
    "!.react-select-item-empty + .icon-select-open": {
      opacity: 0.6,
    },
    "! .react-select-item-container": {
        position: "relative",
    },
    "!.react-select-item-container.active": {
        background: "rgb(255, 255, 196) !important",
    },
    "!.react-select-item": {
        padding: "0",
        display: "inline-block",
        cursor: "pointer",
        border: "none",
        width: "100%",
        textAlign: "left",
        backgroundColor: "transparent",
        fontSize: "14px",

    },

    "!.react-select-item:focus": {
        outline: "0"
    },

    "!.react-select-item-label, .react-select-item-option": {
        fontSize: "13px",
        textOverflow: "ellipsis",
        overflow: "hidden",
    },

    "!.react-select-item-label .highlighter, .react-select-item-option .highlighter": {
        backgroundColor: "#ACC1C8"
    },
    "!.react-select-item-label": {
        padding: "0 40px 0 0px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    "!.react-select-item-empty .react-select-item-label": {
        color: "#CECECE"
    },
    "!.react-select-item-clear": {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: "0",
        margin: "auto",
        width: "35px",
        height: "20px",
        zIndex: "3",
        border: "none",
        color: "#7B8E9B",
        backgroundColor: "transparent",
    },
    "!.react-select-item-clear:before": {
        content: "×",
        display: "inline-block",
        lineHeight: "1",
        fontSize: "16px",
        width: "16px",
        height: "16px",
        position: "relative",
        top: "1px",
        textAlign: "center",
    },
    "!.react-select-item-clear:hover, .react-select-item-clear:focus": {
        outline: "0",
        cursor: "pointer"
    },
    "!.react-select-item-clear:focus:hover:before, .react-select-item-clear:hover:before": {
        color: "black"
    },
    "!.react-select-item-clear:focus:before": {
        color: "black"
    },
    "!.react-select-item-hidden": {
        display: "none"
    },
    "!.react-select-item-options": {
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
    "!.react-select-item-options:focus": {
        outline: "none"
    },
    "!.react-select-item-options-list": {
        listStyle: "none outside",
        margin: "0",
        padding: "0"
    },
    "!.select-item-no-results": {
        color: "#707070",
        padding: "9px 10px",
        fontSize: "14px",
        fontWeight: "600"
    },
    "!.react-select-item-option": {
        padding: "5px 20px",
        margin: "0",
        cursor: "pointer",
        display: "block",
        lineHeight: "1.5",
        textDecoration: "none",
        borderBottom: "1px solid #eee"
    },
    "!.react-select-item-option:hover": {
        color: "#3A3A3A",
        backgroundColor: "#f4f4f4",
        textDecoration: "none",
    },
    "!.react-select-item-option:focus": {
        outline: "0",
        textDecoration: "none",
        color: "#7B8E9B"
    },
    "!.react-select-item-option-selected": {
        color: "#fff !important",
        backgroundColor: "#00A3D7"
    },
    "!.react-select-item-option-selected:hover": {
        backgroundColor: "#00A3D7"
    },
    "!.react-select-item-option-selected:after": {
        color: "#fff !important",
        content: "×",
        float: 'right'
    },
    "!.react-select-item-option-disabled": {
        background: "#c4c4c4",
        color: "#000",
        opacity: 0.5,
        pointerEvents: "none",
    },
    "!.react-select-item-close": {
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
    "!.react-select-item-empty .react-select-item-close": {
        color: "#CBD2D7"
    },
    "!.react-select-item-native": {
        position: "absolute",
        left: "-99999em"
    },
    "!.react-select-item-off-screen.no-items": {
        padding: "10px 20px",
        fontSize: "14px",
        color: "#7B8E9B",
        fontWeight: "bold"
    }
}

const base = {
    position: "relative",
    margin: "0 auto",
    textAlign: "left",
    color: "#333",
    "!.muk-icon__text": {
        margin: "0 0 0 5px",
        verticalAlign: "middle",
    },
    "!.muk-icon__text + .muk-icon__image": {
        marginLeft: "5px",
    },
    "!.muk-icon__image + .muk-icon__text": {
        marginLeft: "5px",
    },
    "!.muk-icon__image, .muk-popup_hint__trigger .muk-icon": {
        verticalAlign: "middle"
    },
}

const typo = {

    "!html": {
        fontSize: "16px",
        fontFamily: "'Roboto', Arial, Helvetica, Verdana, Sans-serif",
    },
    "!body": {
        fontSize: "1em",
        fontFamily: "'Roboto', Arial, Helvetica, Verdana, Sans-serif",
        lineHeight: "1.5em",
        background: "#f5ecd5",
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
    },
    "!a, a:visited, a:hover, a:active": {
        color: ryzlinkTheme.blue,
    },
    "!.muk-icon .m-image": {
        verticalAlign: "middle",
    },
}

const loaders = {
    position: "relative",
    overflow: "hidden",

    ":after": {
        position: "absolute",
        pointerEvents: "none",
        top: 0,
        left: "-25px",
        content: " ",
        width: "calc(100% + 50px)",
        height: "100%",
        opacity: .5,
        background: "repeating-linear-gradient(-55deg,#ccc,#ccc 10px,#ddd 10px,#ddd 20px)",
        animation: "helpersliding 0.5s linear infinite",
        willChange: "transform",
        backgroundSize: "25px 100%",
        zIndex: 1000000,
    }
}

const helpers = {


    "& .muk-helper-loading-line": {
        ...loaders,
        ":after": {
            ...loaders[":after"],
            left: 0,
            right: 0,
            width: "100%",
            height: "4px",
            opacity: 1,
            background: ryzlinkTheme.blue,
            transformOrigin: "left",
            animation: "linesliding 2.2s ease-in-out infinite",
        },

        ".with-background:before": {
            zIndex: 9,
            overflow: "hidden",
            content: "",
            width: "100%",
            height: "4px",
            background: "#eee",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            margin: "auto",
        },
    },


    "& .muk-helper-loading": {
        outline: "3px solid #ffecb8",
        ...loaders,
    },



    "@keyframes linesliding": {
        "0%": {
            transform: "scaleX(0.2) translateX(-1000px)",
        },
        "50%": {
            transform: "scaleX(0.8)",
        },
        "100%": {
            transform: "translateX(1000px)",
        }
    },


    "@keyframes helpersliding": {
        "from": {
            transform: "translateX(0)",
        },
        "to": {
            transform: "translateX(25px)",
        }
    },





    "& .muk-helper-clearfix:after": {
        content: "",
        display: "table",
        clear: "both",
    },
    "& .muk-helper-loading--in": {
        background: "repeating-linear-gradient(-55deg,rgba(220,220,220,0.8),rgba(200,220,220,0.8) 10px,rgba(230,230,230,0.8) 10px,rgba(230,230,230,0.8) 20px)",
        backgroundSize: "25px 100%",
        animation: "helpersliding 0.5s linear infinite",
        transform: "translateZ(0)",
        willChange: "background-position",
        pointerEvents: "none",
    },
}

const AppStyles = css("div")({
    ...base,
    ...typo,
    ...selectItem,
    ...helpers,
})

export default App