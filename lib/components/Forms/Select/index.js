var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
import css from "@reglendo/cxs/component";
import { Div } from "../../../components/Layout";
import * as Color from "color";
import IconChevronDown from "@reglendo/mergado-ui-icons/lib/icons/IconChevronDown";
import { prefix } from "../../../config";
import uniqueId from "../../../helpers/unique_id";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import { Select as LightSelect } from "light-form/dist/es";
import { Select as SelectItem } from "react-select-item";
class Select extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "select";
    }
    renderOptions() {
        return this.props.options.map(option => {
            if (React.isValidElement(option)) {
                if (option.key) {
                    return option;
                }
                else {
                    const object = Object;
                    return object.assign({}, option, { key: uniqueId() });
                }
            }
            else {
                return (React.createElement("option", { value: option.value, key: uniqueId() }, option.title));
            }
        });
    }
    render() {
        const { meta, input, labels } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        const Element = props.name ? StyledLightSelect : StyledSelect;
        return (React.createElement(Field, Object.assign({}, props, { name: this.name }),
            React.createElement(Div, { position: "relative" },
                React.createElement(StyledLightSelect, Object.assign({ closeOnChange: true, selectItem: true, placeholder: "- - -", searchEmptyPlaceholder: "", searchPlaceholder: "", clearText: "", searchText: "" }, props, (!props.name && input), { "aria-invalid": isInvalid ? 1 : 0 })),
                React.createElement(IconChevronDown, { size: 10, className: "icon-select-open" }))));
    }
}
Select.defaultProps = Object.assign({}, defaultFieldProps, { options: [], size: 0 });
const stylesSelectItem = {
    "! .react-select-item-container + .icon-select-open": {
        opacity: 0,
        position: "absolute", bottom: "9px",
        right: "10px", pointerEvents: "none"
    },
    "! .react-select-item-empty + .icon-select-open": {
        opacity: 0.6,
    },
    "& .react-select-item-container": {
        position: "relative",
    },
    "& .react-select-item-container.active": {
        background: "rgb(255, 255, 196) !important",
    },
    "& .react-select-item": {
        padding: "12px 0",
        display: "inline-block",
        cursor: "pointer",
        border: "none",
        width: "100%",
        textAlign: "left",
        backgroundColor: "transparent"
    },
    "& .react-select-item:focus": {
        outline: "0"
    },
    "& .react-select-item-label, .react-select-item-option": {
        lineHeight: "16px",
        fontSize: "14px",
        textOverflow: "ellipsis",
        overflow: "hidden",
    },
    "& .react-select-item-label .highlighter, .react-select-item-option .highlighter": {
        backgroundColor: "#ACC1C8"
    },
    "& .react-select-item-label": {
        padding: "0 40px 0 0px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    "& .react-select-item-empty .react-select-item-label": {
        color: "#CECECE"
    },
    "& .react-select-item-clear": {
        position: "absolute",
        top: "12px",
        right: "0",
        width: "35px",
        height: "20px",
        textIndent: "-9999em",
        zIndex: "3",
        border: "none",
        color: "#7B8E9B",
        backgroundColor: "transparent",
    },
    "& .react-select-item-clear:before": {
        content: "×",
        position: "absolute",
        top: "1px",
        left: "10px",
        zIndex: "1",
        backgroundColor: "transparent",
        borderRadius: "100%",
        fontSize: "16px",
        lineHeight: "1.1",
        width: "16px",
        height: "16px",
        textIndent: "0",
        textAlign: "center",
    },
    "& .react-select-item-clear:hover, .react-select-item-clear:focus": {
        outline: "0",
        cursor: "pointer"
    },
    "& .react-select-item-clear:focus:hover:before, .react-select-item-clear:hover:before": {
        color: "black"
    },
    "& .react-select-item-clear:focus:before": {
        color: "black"
    },
    "& .react-select-item-hidden": {
        display: "none"
    },
    "& .react-select-item-options": {
        position: "absolute",
        padding: "0",
        top: "100%",
        left: "0",
        width: "100%",
        zIndex: "4",
        backgroundColor: "#fff",
        border: "1px solid #CBD2D7",
    },
    "& .react-select-item-options:focus": {
        outline: "none"
    },
    "& .react-select-item-options-list": {
        listStyle: "none outside",
        margin: "0",
        padding: "0"
    },
    "& .select-item-no-results": {
        color: "#707070",
        padding: "9px 10px",
        fontSize: "14px",
        fontWeight: "600"
    },
    "& .react-select-item-option": {
        padding: "5px 20px",
        margin: "0",
        cursor: "pointer",
        display: "block",
        lineHeight: "1.2",
        textDecoration: "none",
        borderBottom: "1px solid #F9F9F9"
    },
    "& .react-select-item-option:hover": {
        color: "#3A3A3A",
        backgroundColor: "#f4f4f4",
        textDecoration: "none",
    },
    "& .react-select-item-option:focus": {
        outline: "0",
        textDecoration: "none",
        color: "#7B8E9B"
    },
    "& .react-select-item-option-selected": {
        color: "#fff !important",
        backgroundColor: "#00A3D7"
    },
    "& .react-select-item-option-selected:hover": {
        backgroundColor: "#00A3D7"
    },
    "& .react-select-item-option-disabled": {
        background: "#c4c4c4",
        color: "#fff",
        opacity: 0.5,
    },
    "& .react-select-item-option-disabled:focus": {
        color: "#fff"
    },
    "& .react-select-item-option-disabled:hover": {
        background: "#c4c4c4",
        color: "#fff",
        cursor: "not-allowed"
    },
    "& .react-select-item-close": {
        textTransform: "uppercase",
        backgroundColor: "transparent",
        border: "none",
        padding: "5px 0",
        display: "block",
        textAlign: "center",
        width: "100%",
        fontWeight: "bold",
        cursor: "pointer",
        outline: "none"
    },
    "& .react-select-item-empty .react-select-item-close": {
        color: "#CBD2D7"
    },
    "& .react-select-item-native": {
        position: "absolute",
        left: "-99999em"
    },
    "& .react-select-item-off-screen.no-items": {
        padding: "10px 20px",
        fontSize: "14px",
        color: "#7B8E9B",
        fontWeight: "bold"
    }
};
const styles = Object.assign({}, stylesSelectItem, { boxSizing: "border-box", width: "100%", height: "40px", lineHeight: "40px", outline: "none", display: "inline-block", margin: "0", background: "white", color: "#333333", verticalAlign: "middle", padding: "0 10px", borderWidth: "1px", borderStyle: "solid", appearance: "none", transition: "border-color 0.2s", willChange: "border-color", ":focus": {
        outline: "none",
        border: "none",
    }, ":active": {
        outline: "none",
        border: "none",
    }, "::-ms-expand": {
        display: "none",
    }, "::-moz-focusring": {
        color: "transparent",
        textShadow: "0 0 0 #000",
    } });
const stylesProps = (props) => {
    const theme = props.theme;
    let disabled = {};
    if (props.disabled) {
        disabled = {
            color: "#999",
            background: "#eee",
            borderColor: Color(theme.grey).fade(0.5).string(),
        };
    }
    return Object.assign({ borderRadius: theme.radius, border: props["aria-invalid"] ? theme.input_border_error : theme.input_border, ":active": {
            border: theme.input_border_active,
        }, ":focus": {
            border: theme.input_border_active,
        } }, disabled);
};
const StyledSelect = css(SelectItem)(styles, stylesProps);
const StyledLightSelect = css(LightSelect)(styles, stylesProps);
export default Select;
