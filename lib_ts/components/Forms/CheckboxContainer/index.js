"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
const TextInput_1 = require("components/Forms/TextInput");
const Field_1 = require("components/Forms/Field");
const list_1 = require("./list");
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
                onChange: evt => this.setState({ filter: evt.target.value }) }, labels: this.props.labels }));
    }
    render() {
        const { withoutFilter, height, showLabel, labels, meta } = this.props;
        const options = this.props.availableQueries
            .filter((option) => {
            const regex = new RegExp(this.state.filter, "i");
            return option.subheader || regex.test(option.name);
        });
        return (React.createElement(Field_1.Field, { label: "", className: `${this.name}__queries` },
            withoutFilter === false && this.renderFilter(),
            React.createElement(list_1.QueryList, { className: `${this.name}__list`, name: this.name, height: height, options: options, value: this.props.input.value ? this.props.input.value : [], input: this.props.input, singleChoice: this.props.singleChoice, showInput: this.props.showInput, labels: labels })));
    }
}
CheckboxContainer.defaultProps = Object.assign({}, Field_1.defaultFieldProps, { availableQueries: [], singleChoice: false, withoutFilter: false, height: 300, showInput: false, showLabel: false, labels: {
        main: "",
        allProducts: "All products",
        placeholder: "",
        invalid: "",
    } });
exports.default = CheckboxContainer;
//# sourceMappingURL=index.js.map