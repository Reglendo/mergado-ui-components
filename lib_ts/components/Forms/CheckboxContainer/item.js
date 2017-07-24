"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const LittleStatus_1 = require("components/LittleStatus");
const Item = props => {
    let label = (props.option.name === "♥ALLPRODUCTS♥" ? props.labels.allProducts : props.option.name);
    if (props.option.active !== undefined) {
        label = React.createElement(LittleStatus_1.default, { type: props.option.active ? "success" : "inactive" }, label);
    }
    return (React.createElement("li", { className: `${props.name}__item ${props.active ? `${props.name}__item--active` : ""}
                        ${props.disabled ? `${props.name}__item--disabled` : ""}`, key: props.option.id, onClick: props.onClick },
        props.singleChoice === false ?
            React.createElement("input", { type: "checkbox", className: `${props.name}__checkbox`, checked: props.active, onChange: props.onClick, style: { pointerEvents: "none" } })
            :
                React.createElement("input", { type: "radio", className: `${props.name}__checkbox`, checked: props.active, onChange: props.onClick, style: { display: props.showRadio ? "inline-block" : "none", pointerEvents: "none" } }),
        React.createElement("label", { className: `${props.name}__label` },
            label,
            " ",
            React.createElement("span", { className: `${props.name}__count` }, typeof props.option.product_count !== "undefined" ? `(${props.option.product_count})` : ""))));
};
exports.default = Item;
//# sourceMappingURL=item.js.map