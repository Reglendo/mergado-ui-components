import * as React from "react";
import css from "cxs/component";
import * as Color from "color";
import { QueryItem } from "./item";
function sortOptions(queries) {
    if (!queries) {
        return;
    }
    return (a, b) => {
        const activeA = queries.indexOf(a.id) >= 0;
        const activeB = queries.indexOf(b.id) >= 0;
        if (activeA < activeB) {
            return 1;
        }
        if (activeA > activeB) {
            return -1;
        }
        return 0;
    };
}
const renderOptions = (name, options, value, input, singleChoice, showInput, labels) => {
    let allProductsOption = null;
    options.map((option, key) => {
        if (option.name === "♥ALLPRODUCTS♥") {
            allProductsOption = option.id;
        }
    });
    return options
        .map(option => {
        const index = value.indexOf(option.id);
        const handler = () => {
            let selected = [...value];
            if (index < 0) {
                if (allProductsOption !== null && value.indexOf(allProductsOption) > -1) {
                    selected.splice(value.indexOf(allProductsOption), 1);
                }
                selected = singleChoice ? [option.id] : selected.concat(option.id);
            }
            else {
                selected.splice(index, 1);
            }
            input.onChange(selected);
        };
        return React.createElement(QueryItem, { name: name, option: option, index: index, onClick: handler, checked: value.indexOf(option.id) > -1, singleChoice: singleChoice, showInput: showInput, labels: labels, key: option.id + option.name });
    });
};
export const QueryList = ({ name, className, options, value, input, height, singleChoice, showInput, activeFirst, labels, meta }) => {
    return (React.createElement(List, { className: `${name}__list ${className}`, height: height }, renderOptions(name, meta.initial && activeFirst ? options.sort(sortOptions(meta.initial)) : options, value, input, singleChoice, showInput, labels)));
};
const List = css("ul")({
    listStyle: "none",
    margin: 0,
    padding: 0,
    border: "1px solid #dbcba3",
    overflow: "auto",
    background: "rgb(255,255,255)",
}, (props) => {
    return {
        height: props.height === "auto" ? props.height : props.height + "px",
        borderRadius: props.theme.radius,
        " li + li": {
            borderTop: `1px solid ${Color(props.theme.decoration).fade(0.8)}`,
        },
    };
});
