<<<<<<< HEAD
import * as React from "react";
import glamorous from "glamorous";
import Header from "../Header";
import domOnlyProps from "../../../helpers/dom-only-props";
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const Header_1 = require("../Header");
const dom_only_props_1 = require("../../../helpers/dom-only-props");
>>>>>>> master
const Fieldset = (props) => {
    const { children, header } = props;
    if (children === "" || children === null) {
        return null;
    }
<<<<<<< HEAD
    return (React.createElement(FFieldset, Object.assign({}, domOnlyProps(props)),
        header && React.createElement(Header, { type: "3" }, header),
        children));
};
const FFieldset = glamorous.fieldset({});
export default Fieldset;
=======
    return (React.createElement(FFieldset, Object.assign({}, dom_only_props_1.default(props)),
        header && React.createElement(Header_1.default, { type: "3" }, header),
        children));
};
const FFieldset = glamorous_1.default.fieldset({});
exports.default = Fieldset;
//# sourceMappingURL=index.js.map
>>>>>>> master
