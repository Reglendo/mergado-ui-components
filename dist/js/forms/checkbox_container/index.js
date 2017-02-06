"use strict";
const React = require("react");
class CheckboxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };
    }
    renderBoxes() {
        let options = this.props.availibleQueries;
        if (typeof options === "object") {
            let arr = Object.keys(options).map((key) => options[key]);
            options = arr;
        }
        let queries = this.props.input.value;
        if (!(typeof queries === "array" || typeof queries === "object")) {
            queries = [];
        }
        return options
            .filter((option) => {
            var regex = new RegExp(this.state.filter, 'i');
            return regex.test(option.name);
        })
            .map(option => {
            const index = queries.indexOf(option.id);
            let handler = () => {
                if (index < 0) {
                    this.props.input.onChange(queries.concat(option.id));
                }
                else {
                    const copy = [...queries]; // make copy to not mutate value
                    copy.splice(index, 1); // remove item at index
                    this.props.input.onChange(copy);
                }
            };
            return (React.createElement("li", { className: `checkbox-container-item ${index >= 0 ? 'active' : ''}`, key: option.id, onClick: handler, style: { cursor: "pointer" } },
                React.createElement("input", { type: "checkbox", checked: queries.indexOf(option.id) >= 0, onChange: handler }),
                React.createElement("label", null,
                    option.name === "♥ALLPRODUCTS♥" ? this.props.labels.allProducts : option.name,
                    " ",
                    React.createElement("span", { className: "query-info-count" }, typeof option.productCount !== "undefined" ? `(${option.productCount})` : ""))));
        });
    }
    render() {
        const queries = this.props.input.value;
        return (React.createElement("div", null,
            React.createElement("h3", { title: this.props.meta.invalid ? this.props.labels.invalid :
                    '' }, this.props.labels.main),
            React.createElement("div", { id: "queries", className: `queries-list ${this.props.meta.dirty && this.props.meta.invalid ?
                    'invalid' : ''}` },
                React.createElement("div", { style: { paddingRight: 0 } },
                    React.createElement("div", { className: "quick-filter", style: { display: 'block' } },
                        React.createElement("input", { className: "string form-control", type: "text", name: "filter", id: "quick-filter", placeholder: this.props.labels.placeholder, value: this.state.filter, onChange: (evt) => { this.setState({ filter: evt.target.value }); } })),
                    React.createElement("ul", { className: `query-list-control` }, this.renderBoxes())))));
    }
}
CheckboxContainer.defaultProps = {
    input: {
        checked: false,
        name: "",
        onBlur: (value) => { },
        onChange: (value) => { },
        onDragstart: (value) => { },
        onDrop: (value) => { },
        onFocus: (value) => { },
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
    availibleQueries: [],
    labels: {
        main: "Apply on queries",
        allProducts: "All products",
        placeholder: "Filter",
        invalid: "Invalid input"
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CheckboxContainer;
//# sourceMappingURL=index.js.map