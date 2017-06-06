"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var config_1 = require("../../config");
var Input_1 = require("./Input");
exports.defaultProps = {
    group: {
        className: "",
        style: {}
    },
    input: {
        className: "",
        name: "",
        value: "",
        checked: false,
        onBlur: function onBlur(value) {},
        onChange: function onChange(value) {},
        onDragStart: function onDragStart(value) {},
        onDrop: function onDrop(value) {},
        onFocus: function onFocus(value) {},
        onKeyDown: function onKeyDown(value) {},
        onKeyUp: function onKeyUp(value) {},
        onClick: function onClick(value) {}
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
        main: "",
        invalid: "",
        title: "",
        placeholder: ""
    }
};

var InputComponent = function (_React$Component) {
    _inherits(InputComponent, _React$Component);

    function InputComponent() {
        _classCallCheck(this, InputComponent);

        var _this = _possibleConstructorReturn(this, (InputComponent.__proto__ || Object.getPrototypeOf(InputComponent)).apply(this, arguments));

        _this.form = config_1.prefix + "form";
        _this.name = config_1.prefix + "input";
        return _this;
    }

    _createClass(InputComponent, [{
        key: "renderError",
        value: function renderError() {
            return React.createElement(Input_1.InputError, Object.assign({}, this.props));
        }
    }, {
        key: "renderInput",
        value: function renderInput(className, props) {
            return;
        }
    }, {
        key: "renderLabel",
        value: function renderLabel(className, props) {
            return;
        }
    }, {
        key: "render",
        value: function render() {
            var props = this.props;

            var meta = props.meta,
                input = props.input,
                labels = props.labels,
                group = props.group,
                others = __rest(props, ["meta", "input", "labels", "group"]);

            var inputProps = Object.assign({ id: this.props.meta.form ? this.props.meta.form + "-" + input.name : "" }, others);
            return React.createElement(Input_1.Input, Object.assign({ name: this.name }, props), this.renderError(), React.createElement(Input_1.InputLabel, { name: this.name }, this.renderLabel(input.className ? input.className : "", inputProps)), this.renderInput(input.className ? input.className : "", inputProps));
        }
    }]);

    return InputComponent;
}(React.Component);

InputComponent.defaultProps = exports.defaultProps;
exports.InputComponent = InputComponent;
//# sourceMappingURL=input.js.map