"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require("react-redux");
const redux_form_1 = require("redux-form");
const redux_1 = require("redux");
const Style = require("./Hello.css");
const rootReducer = redux_1.combineReducers({
    form: redux_form_1.reducer
});
var store = redux_1.createStore(rootReducer);
const redux_form_2 = require("redux-form");
const index_1 = require("./index");
class App extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { style: { width: "400px" } },
                React.createElement(redux_form_2.Field, { name: "queries", component: index_1.CheckboxContainer, props: { availibleQueries: [{
                                id: 1,
                                name: "QueryName",
                                productCount: 50
                            }, {
                                id: 2,
                                name: "♥ALLPRODUCTS♥",
                                productCount: 100
                            }, {
                                id: 3,
                                name: "All a",
                                productCount: 100
                            }] } }),
                React.createElement(redux_form_2.Field, { name: "text", component: index_1.TextInput })),
            React.createElement("div", { style: { marginTop: "10px", padding: "10px" } },
                React.createElement("h3", null, "Top Nav:"),
                React.createElement(index_1.TopNav, { links: [
                        React.createElement(index_1.NavLink, { key: 1, active: true, link: (React.createElement("a", { href: '#1' }, "First")) }),
                        React.createElement(index_1.NavLink, { key: 2, active: false, link: (React.createElement("a", { href: '#2' }, "Second")) }),
                        React.createElement(index_1.NavLink, { key: 3, active: false, link: (React.createElement("a", { href: '#3' }, "Third")) }),
                    ] }),
                React.createElement("h3", null, "Little Status:"),
                React.createElement(index_1.LittleStatus, { type: "inactive", title: "Inactive" }),
                " Inactive  \u00A0",
                React.createElement(index_1.LittleStatus, { type: "ok", title: "Ok" }),
                " Ok  \u00A0",
                React.createElement(index_1.LittleStatus, { type: "failed", title: "Failed" }),
                " Failed  \u00A0",
                React.createElement(index_1.LittleStatus, { type: "warning", title: "Warning" }),
                " Warning")));
    }
}
function validate(values) {
    let errors = {
        text: ""
    };
    errors.text = "ERROR";
    console.log(errors);
    return errors;
}
const Form = redux_form_2.reduxForm({
    form: "SampleForm",
    validate,
    initialValues: {
        "queries": [1],
        "text": "Default"
    }
})(App);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(Form, null)), document.querySelector('.container'));
//# sourceMappingURL=app.js.map