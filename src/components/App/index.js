"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var component_1 = require("@reglendo/cxs/component");
var ryzlink_1 = require("../../styled/themes/ryzlink");
var App = function (props) {
    var children = props.children, className = props.className, style = props.style;
    return React.createElement(AppStyles, { className: className, style: style },
        children,
        React.createElement("style", null, reset));
};
var reset = "\n@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin-ext')\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, nav, section {\n  display: block; }\n\naudio[controls], canvas, video {\n  display: inline-block;\n}\n\nhtml {\n  font-size: 100%;\n  overflow-y: scroll;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%; }\n\nhtml {\n  height: 100%; }\n\ninput, select, textarea, button {\n  font-family: inherit; }\n\nabbr[title] {\n  border-bottom: 1px dotted;\n  cursor: help; }\n\nb,\nstrong {\n  font-weight: bold; }\n\nblockquote {\n  margin: 1em 40px; }\n\ndfn {\n  font-style: italic; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\npre, code, kbd, samp {\n  font-family: Consolas, \"Ubuntu Mono\", monospace;\n  font-size: 10pt; }\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  word-wrap: break-word; }\n\nq {\n  quotes: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 80%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nul, ol {\n  padding: 0 0 0 30px;\n  margin: 10px 0; }\n\ndd {\n  margin: 0 0 0 40px; }\n\nnav ul,\nnav ol {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\nimg {\n  border: 0;\n  -ms-interpolation-mode: bicubic; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\n* {\n  padding: 0px;\n  margin: 0px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.cb {\n  clear: both;\n  border: none;\n  margin: 0;\n  overflow: hidden; }\n\n.hidden {\n  display: block;\n  height: 0;\n  overflow: hidden;\n  margin: 0;\n  padding: 0; }\n\ntable {\n  border-spacing: 0; }\n\ninput.button, input[type=\"submit\"], input[type=\"button\"] {\n  cursor: pointer; }\n\nfieldset {\n  border: none; }\n\nlegend {\n  border: 0;\n  *margin-left: -7px;\n  padding: 0; }\n\nbutton, input, select, textarea {\n  margin: 0;\n  vertical-align: baseline;\n  *vertical-align: middle; }\n\nbutton, input {\n  line-height: normal;\n  }\n\nbutton, input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"] {\n  cursor: pointer;\n  -webkit-appearance: button; }\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  -webkit-box-sizing: content-box;\n  box-sizing: border-box; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical; }\n\ninput:invalid, textarea:invalid {\n  background-color: #f0dddd; }\n\na, a:visited {\n  text-decoration: none; }\n\na:hover, a:focus, a:active {\n  text-decoration: underline; }\n";
var base = {
    position: "relative",
    margin: "0 auto",
    textAlign: "left",
    color: "#333",
    "!.muk-icon__text": {
        margin: "0 0 0 5px",
        verticalAlign: "middle"
    },
    "!.muk-icon__text + .muk-icon__image": {
        marginLeft: "5px"
    },
    "!.muk-icon__image + .muk-icon__text": {
        marginLeft: "5px"
    },
    "!.muk-icon__image, .muk-popup_hint__trigger .muk-icon": {
        verticalAlign: "middle"
    }
};
var typo = {
    "!html": {
        fontSize: "16px",
        fontFamily: "'Roboto', Arial, Helvetica, Verdana, Sans-serif"
    },
    "!body": {
        fontSize: "1em",
        fontFamily: "'Roboto', Arial, Helvetica, Verdana, Sans-serif",
        lineHeight: "1.5em",
        background: "#f5ecd5"
    },
    "!p,ul,ol,dl,blockquote,pre,caption": {
        fontSize: "1em",
        lineHeight: "1.5",
        margin: "1.5em 0"
    },
    "!li p,li ul": {
        marginTop: 0,
        marginBottom: 0
    },
    "!textarea,table,td,th,code,pre,samp,div,p": {
        wordWrap: "break-word",
        hyphens: "auto"
    },
    "!code, pre, samp": {
        whiteSpace: "pre-wrap",
        fontFamily: "consolas, 'DejaVu Sans Mono', courier, monospace"
    },
    "!code": {
        lineHeight: 1
    },
    "!table": {
        marginBottom: "1.5em"
    },
    "!a, a:visited, a:hover, a:active": {
        color: ryzlink_1["default"].blue
    },
    "!.muk-icon .m-image": {
        verticalAlign: "middle"
    }
};
var helpers = {
    "& .muk-helper-clearfix:after": {
        content: "",
        display: "table",
        clear: "both"
    },
    "& .muk-helper-loading": {
        userSelect: "none",
        position: "relative",
        pointerEvents: "none"
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
        outline: "3px solid #dbcba3"
    },
    "& .muk-helper-loading--in": {
        background: "repeating-linear-gradient(-55deg,rgba(220,220,220,0.8),rgba(200,220,220,0.8) 10px,rgba(230,230,230,0.8) 10px,rgba(230,230,230,0.8) 20px)",
        backgroundSize: "25px 100%",
        animation: "helpersliding 0.5s linear infinite",
        transform: "translateZ(0)",
        willChange: "background-position",
        pointerEvents: "none"
    },
    "@keyframes helpersliding": {
        "from": {
            backgroundPositionX: 0
        },
        "to": {
            backgroundPositionX: "25px"
        }
    }
};
var AppStyles = component_1["default"]("div")(__assign({}, base, helpers, typo));
exports["default"] = App;
