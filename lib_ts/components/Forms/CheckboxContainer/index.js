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
const TextInput_1 = require("components/Forms/TextInput");
const Field_1 = require("components/Forms/Field");
const list_1 = require("./list");
const styled_components_1 = require("styled-components");
const StyledField = styled_components_1.default(Field_1.Field) `
    & > .muk-form__group--invalid {
        border: none !important;
    }
`;
class CheckboxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "checkbox_container";
        this.state = {
            filter: "",
        };
    }
    renderFilter() {
        return (React.createElement(TextInput_1.default, { className: `${this.name}__filter_input`, type: "search", input: { value: this.state.filter,
                onChange: evt => this.setState({ filter: evt.target.value }) }, labels: { placeholder: this.props.labels.placeholder } }));
    }
    render() {
        const { withoutFilter, height, labels, meta } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const options = this.props.availableQueries
            .filter((option) => {
            const regex = new RegExp(this.state.filter, "i");
            return option.subheader || regex.test(option.name);
        });
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched);
        return (React.createElement(StyledField, Object.assign({}, props, { labels: labels, className: `${this.name}__queries` }),
            withoutFilter === false && this.renderFilter(),
            React.createElement(list_1.QueryList, { className: `${this.name}__list ${isInvalid ? `${config_1.form}__group--invalid` : ""}`, name: this.name, height: height, activeFirst: props.activeFirst, options: options, value: this.props.input.value ? this.props.input.value : [], input: this.props.input, singleChoice: this.props.singleChoice, showInput: this.props.showInput, labels: labels, meta: meta })));
    }
}
CheckboxContainer.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { availableQueries: [], singleChoice: false, withoutFilter: false, height: 300, showInput: false, activeFirst: true, labels: {
        main: "",
        allProducts: "All products",
        placeholder: "",
        invalid: "",
    } });
exports.default = CheckboxContainer;
//# sourceMappingURL=index.js.map