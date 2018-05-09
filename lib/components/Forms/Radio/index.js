var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
import { prefix } from "../../../config";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import RadioInput from "./input";
class Radio extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "input-radio";
    }
    renderInputs() {
        const { input, meta, labels, checkboxes, bigButtons, hideInput } = this.props;
        return this.props.items.map((obj) => {
            return (React.createElement(RadioInput, { name: this.props.name, label: obj.label, value: obj.value, key: obj.value, checked: obj.value == input.value, onChange: input.onChange, bigButtons: bigButtons, hideInput: hideInput, checkboxes: checkboxes }));
        });
    }
    render() {
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        return (React.createElement(Field, Object.assign({}, props, { name: this.name }),
            React.createElement("div", { style: { display: "table", width: this.props.bigButtons ? "100%" : "auto", tableLayout: "fixed" } },
                React.createElement("div", { style: { display: "table-row" } }, this.renderInputs()))));
    }
}
Radio.defaultProps = Object.assign({}, defaultFieldProps, { bigButtons: false, items: [] });
export default Radio;
