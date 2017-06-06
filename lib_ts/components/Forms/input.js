"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const Input_1 = require("components/Forms/Input");
exports.defaultProps = {
    group: {
        className: "",
        style: {},
    },
    input: {
        className: "",
        name: "",
        value: "",
        checked: false,
        onBlur: (value) => { },
        onChange: (value) => { },
        onDragStart: (value) => { },
        onDrop: (value) => { },
        onFocus: (value) => { },
        onKeyDown: (value) => { },
        onKeyUp: (value) => { },
        onClick: (value) => { },
    },
    meta: {
        active: false,
        asyncValidating: false,
        autofilled: false,
        dirty: false,
        dispatch: Function,
        error: "",
        form: "",
        invalid: false,
        pristine: true,
        submitting: false,
        submitFailed: false,
        touched: false,
        valid: true,
        visited: false,
        warning: "",
    },
    labels: {
        main: "",
        invalid: "",
        title: "",
        placeholder: "",
    },
};
class InputComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.form = config_1.prefix + "form";
        this.name = config_1.prefix + "input";
    }
    renderError() {
        return React.createElement(Input_1.InputError, Object.assign({}, this.props));
    }
    renderInput(className, props) {
        return;
    }
    renderLabel(className, props) {
        return;
    }
    render() {
        const props = this.props;
        const { meta, input, labels, group } = props, others = __rest(props, ["meta", "input", "labels", "group"]);
        const inputProps = Object.assign({ id: this.props.meta.form ? `${this.props.meta.form}-${input.name}` : "" }, others);
        return (React.createElement(Input_1.Input, Object.assign({ name: this.name }, props),
            this.renderError(),
            React.createElement(Input_1.InputLabel, { name: this.name }, this.renderLabel(input.className ? input.className : "", inputProps)),
            this.renderInput(input.className ? input.className : "", inputProps)));
    }
}
InputComponent.defaultProps = exports.defaultProps;
exports.InputComponent = InputComponent;
//# sourceMappingURL=input.js.map