"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const config_1 = require("../../../config");
const LittleStatus_1 = require("../../LittleStatus");
const react_router_1 = require("react-router");
const unique_id_1 = require("../../../helpers/unique_id");
class CheckboxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.name = config_1.prefix + "checkbox_container";
        this.form = config_1.prefix + "form";
        this.state = {
            filter: ''
        };
    }
    renderInvalid() {
        if (this.props.labels.invalid && this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)) {
            return (React.createElement("div", { className: `${this.form}__validation` }, this.props.labels.invalid));
        }
    }
    renderOptions(options) {
        if (typeof options === "object") {
            let arr = Object.keys(options).map((key) => options[key]);
            options = arr;
        }
        let queries = this.props.input.value;
        if (!(queries instanceof Array) && !(queries instanceof Object)) {
            queries = [];
        }
        let allProductsOption;
        const isAllProducts = options.map((option, key) => {
            if (option.name === "♥ALLPRODUCTS♥") {
                let object = Object;
                allProductsOption = object.assign({}, option, { key: key });
            }
            return (option.name === "♥ALLPRODUCTS♥" && queries.indexOf(option.id));
        });
        return options
            .filter((option) => {
            var regex = new RegExp(this.state.filter, 'i');
            return regex.test(option.name);
        })
            .map(option => {
            const index = queries.indexOf(option.id);
            let handler = () => {
                if (index < 0) {
                    if (isAllProducts[allProductsOption['key']] !== false && isAllProducts[allProductsOption['key']] > -1) {
                        // 'All products' option is already selected, remove it
                        queries.splice(queries.indexOf(allProductsOption['id']), 1);
                    }
                    if (this.props.singleChoice === false) {
                        this.props.input.onChange(queries.concat(option.id));
                    }
                    else {
                        this.props.input.onChange([option.id]);
                    }
                }
                else {
                    const copy = [...queries]; // make copy to not mutate value
                    copy.splice(index, 1); // remove item at index
                    this.props.input.onChange(copy);
                }
            };
            return (React.createElement("li", { className: `${this.name}__item ${index >= 0 ? `${this.name}__item--active` : ''}
                                    ${option.disabled ? `${this.name}__item--disabled` : ''}`, key: unique_id_1.default(), onClick: handler },
                this.props.singleChoice == false &&
                    React.createElement("input", { type: "checkbox", className: `${this.name}__checkbox`, checked: queries.indexOf(option.id) >= 0, onChange: handler }),
                this.renderLabel(option)));
        });
    }
    renderLabel(option) {
        let label = (option.name === "♥ALLPRODUCTS♥" ? this.props.labels.allProducts : option.name);
        if (option.link !== undefined) {
            label = React.createElement(react_router_1.Link, { to: option.link }, label);
        }
        if (option.active !== undefined) {
            label = React.createElement(LittleStatus_1.default, { type: option.active ? "success" : "inactive" }, label);
        }
        return (React.createElement("label", { className: `${this.name}__label` },
            label,
            " ",
            React.createElement("span", { className: `${this.name}__count` }, typeof option.product_count !== "undefined" ? `(${option.product_count})` : "")));
    }
    renderBoxes() {
        let options = this.props.availableQueries;
        const render = (options) => this.renderOptions(options);
        const className = this.name + `__group`;
        if (options.constructor === Array) {
            return render(options);
        }
        else {
            return Object.keys(options).map(function (key) {
                if (key === '') {
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
    render() {
        return (React.createElement("div", { className: this.name, style: this.props.style },
            React.createElement("h3", { className: `${this.name}__header`, title: this.props.meta.invalid ? this.props.labels.invalid :
                    '' }, this.props.labels.main),
            React.createElement("div", { className: `${this.name}__queries
                                 ${this.form}__group
                                 ${this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched) ? `${this.form}__group--invalid` : ''}
                             ` },
                this.renderInvalid(),
                this.props.withoutFilter === false ? (React.createElement("div", { className: `${this.name}__filter` },
                    React.createElement("input", { className: `${this.name}__filter_input ${this.form}__input--text`, type: "text", id: "filter", name: "filter", value: this.state.filter, placeholder: this.props.labels.placeholder, onChange: (evt) => { this.setState({ filter: evt.target.value }); } }))) : null,
                React.createElement("ul", { className: `${this.name}__list`, style: { height: this.props.height } }, this.renderBoxes()))));
    }
}
CheckboxContainer.defaultProps = {
    input: {
        checked: false,
        name: "",
        onBlur: (value) => {
        },
        onChange: (value) => {
        },
        onDragStart: (value) => {
        },
        onDrop: (value) => {
        },
        onFocus: (value) => {
        },
        value: []
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
    availableQueries: [],
    labels: {
        main: "Apply on queries",
        allProducts: "All products",
        placeholder: "Filter",
        invalid: "Invalid input"
    },
    singleChoice: false,
    withoutFilter: false,
    height: 300
};
exports.default = CheckboxContainer;
//# sourceMappingURL=index.js.map