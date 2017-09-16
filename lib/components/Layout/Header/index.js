"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
const dom_only_props_1 = require("../../../helpers/dom-only-props");
const Header = (props) => {
    const { children, type } = props;
    if (children === "" || children === null) {
        return null;
    }
    if (type === "1") {
        return (React.createElement(H1, Object.assign({}, dom_only_props_1.default(props)), children));
    }
    if (type === "2") {
        return (React.createElement(H2, Object.assign({}, dom_only_props_1.default(props)), children));
    }
    if (type === "3") {
        return (React.createElement(H3, Object.assign({}, dom_only_props_1.default(props)), children));
    }
    if (type === "4") {
        return (React.createElement(H4, Object.assign({}, dom_only_props_1.default(props)), children));
    }
    if (type === "5") {
        return (React.createElement(H5, Object.assign({}, dom_only_props_1.default(props)), children));
    }
};
const H1 = glamorous_1.default.h1({
    fontSize: "28px",
    lineHeight: "40px",
    margin: "40px 0 0 0",
    fontWeight: 700,
}, (props) => {
    return {};
});
const H2 = glamorous_1.default.h2({
    fontSize: "24px",
    lineHeight: "32px",
    margin: "32px 0 0 0",
    fontWeight: 700,
}, (props) => {
    return {};
});
const H3 = glamorous_1.default.h3({
    fontSize: "20px",
    lineHeight: "24px",
    margin: "24px 0 0 0",
    fontWeight: 500,
}, (props) => {
    return {};
});
const H4 = glamorous_1.default.h4({
    fontSize: "16px",
    lineHeight: "24px",
    margin: "24px 0 0 0",
    fontWeight: 500,
}, (props) => {
    return {};
});
const H5 = glamorous_1.default.h5({
    fontSize: "14px",
    lineHeight: "20px",
    margin: "20px 0 0 0",
    fontWeight: 500,
}, (props) => {
    return {};
});
exports.default = Header;
//# sourceMappingURL=index.js.map