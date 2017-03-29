"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var redux_form_1 = require("redux-form");
var redux_1 = require("redux");
var rootReducer = redux_1.combineReducers({
    form: redux_form_1.reducer
});
var store = redux_1.createStore(rootReducer, window["devToolsExtension"] && window["devToolsExtension"]());
var redux_form_2 = require("redux-form");
var index_1 = require("./index");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
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
    };
    return App;
}(React.Component));
function validate(values) {
    var errors = {
        text: ""
    };
    errors.text = "ERROR";
    console.log(errors);
    return errors;
}
var Form = redux_form_2.reduxForm({
    form: "SampleForm",
    validate: validate,
    initialValues: {
        "queries": [1],
        "text": "Default"
    }
})(App);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(Form, null)), document.querySelector('.container'));
