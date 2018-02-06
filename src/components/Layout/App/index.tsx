import * as React from "react"
import css from "cxs/component"
import ryzlinkTheme from "../../../styled/themes/ryzlink"

interface Props {
    style?: any
    className?: string
    children?: any
}

export const App = (props: Props) => {
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
        animation: "helpersliding 0.5s linear infinite",
        transform: "translateZ(0)",
        willChange: "background-position",
        backgroundSize: "25px 100%",
        zIndex: 1000000,
        outline: "3px solid #dbcba3",
    },
    "& .muk-helper-loading--in": {
        background: "repeating-linear-gradient(-55deg,rgba(220,220,220,0.8),rgba(200,220,220,0.8) 10px,rgba(230,230,230,0.8) 10px,rgba(230,230,230,0.8) 20px)",
        backgroundSize: "25px 100%",
        animation: "helpersliding 0.5s linear infinite",
        transform: "translateZ(0)",
        willChange: "background-position",
        pointerEvents: "none",
    },
    "@keyframes helpersliding": {
        "from": {
            backgroundPositionX: 0
        },
        "to": {
            backgroundPositionX: "25px",
        }
    },
}

const AppStyles = css("div")({
    ...base,
    ...helpers,
    ...typo,
})
