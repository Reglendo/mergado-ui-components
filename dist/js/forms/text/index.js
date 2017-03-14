"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Styles = {
    group: {
        display: 'block',
        margin: '5px',
        width: '100%',
    },
    label: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        fontWeight: 'bold',
        textAlign: 'left',
        paddingTop: '10px',
        paddingBottom: '10px',
        display: 'inline-block',
        width: '30%',
        fontSize: '12pt',
    },
    input: {}
};
class TextInput extends React.Component {
    renderInvalid() {
        return (React.createElement("div", { className: "form-validation-box" }, this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? this.props.labels.invalid : ""));
    }
    render() {
        const inputId = `${this.props.meta.form}-${this.props.input.name}`;
        return (React.createElement("div", { className: "form-group", title: this.props.showTitle ? this.props.labels.title : "" },
            this.renderInvalid(),
            React.createElement("label", { className: "form-label", htmlFor: inputId }, this.props.labels.main),
            React.createElement("input", Object.assign({ className: `form-control ${this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? 'invalid' : ''}`, id: inputId, type: "text" }, this.props.input))));
    }
}
TextInput.defaultProps = {
    input: {
        checked: false,
        name: "",
        onBlur: (value) => { },
        onChange: (value) => { },
        onDragstart: (value) => { },
        onDrop: (value) => { },
        onFocus: (value) => { },
        value: ""
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
        warning: ""
    },
    labels: {
        main: "Text",
        placeholder: "Fill out here...",
        invalid: "Invalid input",
        title: ""
    },
    showTitle: false
};
exports.default = TextInput;
//# sourceMappingURL=index.js.map