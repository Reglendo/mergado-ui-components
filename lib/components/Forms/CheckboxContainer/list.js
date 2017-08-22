"use strict";

var _templateObject = _taggedTemplateLiteral(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    border: 1px solid #dbcba3;\n    height: ", ";\n    overflow: auto;\n    background: rgba(255,255,255,0.2);\n"], ["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    border: 1px solid #dbcba3;\n    height: ", ";\n    overflow: auto;\n    background: rgba(255,255,255,0.2);\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var item_1 = require("./item");
function sortOptions(queries) {
    if (!queries) {
        return;
    }
    return function (a, b) {
        var activeA = queries.indexOf(a.id) >= 0;
        var activeB = queries.indexOf(b.id) >= 0;
        if (activeA < activeB) {
            return 1;
        }
        if (activeA > activeB) {
            return -1;
        }
        return 0;
    };
}
var renderOptions = function renderOptions(name, options, value, input, singleChoice, showInput, labels) {
    var allProductsOption = null;
    options.map(function (option, key) {
        if (option.name === "♥ALLPRODUCTS♥") {
            allProductsOption = option.id;
        }
    });
    return options.map(function (option) {
        var index = value.indexOf(option.id);
        var handler = function handler() {
            var selected = [].concat(_toConsumableArray(value));
            if (index < 0) {
                if (allProductsOption !== null && value.indexOf(allProductsOption) > -1) {
                    selected.splice(value.indexOf(allProductsOption), 1);
                }
                // select item
                selected = singleChoice ? [option.id] : selected.concat(option.id);
            } else {
                // unselect item
                selected.splice(index, 1);
            }
            input.onChange(selected);
        };
        return React.createElement(item_1.QueryItem, { name: name, option: option, index: index, onClick: handler, checked: value.indexOf(option.id) > -1, singleChoice: singleChoice, showInput: showInput, labels: labels, key: option.id + option.name });
    });
};
var QueryListComponent = function QueryListComponent(_ref) {
    var name = _ref.name,
        className = _ref.className,
        options = _ref.options,
        value = _ref.value,
        input = _ref.input,
        singleChoice = _ref.singleChoice,
        showInput = _ref.showInput,
        activeFirst = _ref.activeFirst,
        labels = _ref.labels,
        meta = _ref.meta;

    return React.createElement("ul", { className: name + "__list " + className }, renderOptions(name, meta.initial && activeFirst ? options.sort(sortOptions(meta.initial)) : options, value, input, singleChoice, showInput, labels));
};
exports.QueryList = styled_components_1.default(QueryListComponent)(_templateObject, function (props) {
    return props.height === "auto" ? props.height : props.height + "px";
});
//# sourceMappingURL=list.js.map