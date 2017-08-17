"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("config");
<<<<<<< HEAD
const TextInput_1 = require("components/Forms/TextInput");
const Field_1 = require("components/Forms/Field");
const list_1 = require("./list");
class CheckboxContainer extends React.Component {
=======
const react_router_1 = require("react-router");
const unique_id_1 = require("helpers/unique_id");
const Input_1 = require("components/Forms/Input");
const MUK = require("components/Forms/input");
const item_1 = require("./item");
class CheckboxContainer extends MUK.InputComponent {
>>>>>>> master
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
<<<<<<< HEAD
            return option.subheader || regex.test(option.name);
        });
        return (React.createElement(Field_1.Field, { label: "", className: `${this.name}__queries` },
=======
            return regex.test(option.name);
        })
            .map(option => {
            const index = queries.indexOf(option.id);
            const handler = () => {
                if (index < 0) {
                    if (allProductsOption &&
                        isAllProducts[allProductsOption.key] !== false &&
                        isAllProducts[allProductsOption.key] > -1) {
                        // 'All products' option is already selected, remove it
                        queries.splice(queries.indexOf(allProductsOption.id), 1);
                    }
                    if (input) {
                        if (this.props.singleChoice === false) {
                            input.onChange(queries.concat(option.id));
                        }
                        else {
                            input.onChange(option.id);
                        }
                    }
                }
                else {
                    const copy = [...queries]; // make copy to not mutate value
                    copy.splice(index, 1); // remove item at index
                    if (input) {
                        input.onChange(copy);
                    }
                }
            };
            const item = React.createElement(item_1.default, { name: this.name, active: index >= 0, disabled: option.disabled, onClick: handler, singleChoice: this.props.singleChoice, checked: queries.indexOf(option.id) > 0, showRadio: this.props.showRadio, option: option, labels: this.props.labels, key: option.id });
            if (option.link) {
                return React.createElement(react_router_1.Link, { to: option.link, key: option.id }, item);
            }
            else {
                return item;
            }
        });
    }
    renderBoxes() {
        const options = this.props.availableQueries;
        const render = (items) => this.renderOptions(items);
        const className = this.name + `__group`;
        if (options.constructor === Array) {
            return render(options.sort(this.sortOptions(this.props)));
        }
        else {
            return Object.keys(options).map(key => {
                if (key === "") {
                    return render(options[key]);
                }
                else {
                    return (React.createElement("div", { key: `size_${key}_${unique_id_1.default()}` },
                        React.createElement("li", { key: `option_${key}_${unique_id_1.default()}`, className: className }, key),
                        render(options[key])));
                }
            });
        }
    }
    renderLabel(className, props) {
        const { showLabel, labels, meta } = this.props;
        return (React.createElement(Input_1.InputLabel, { name: this.name }, showLabel
            ? labels.main
            : React.createElement("h3", { className: `${this.name}__header` }, labels.main)));
    }
    renderFilter() {
        return (React.createElement("div", { className: `${this.name}__filter` },
            React.createElement("input", { className: `${this.name}__filter_input ${this.form}__input--text`, type: "text", id: "filter", name: "filter", value: this.state.filter, placeholder: this.props.labels.placeholder, onChange: (evt) => { this.setState({ filter: evt.target.value }); } })));
    }
    renderInput(className, props) {
        const { withoutFilter, height, showLabel, labels, meta } = this.props;
        return (React.createElement("div", { className: `${this.name}__queries` },
>>>>>>> master
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