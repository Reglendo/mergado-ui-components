"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require("react-redux");
const redux_form_1 = require("redux-form");
const redux_1 = require("redux");
const rootReducer = redux_1.combineReducers({
    form: redux_form_1.reducer
});
var store = redux_1.createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());
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
                React.createElement(redux_form_2.Field, { name: "text", component: index_1.TextInput }))));
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