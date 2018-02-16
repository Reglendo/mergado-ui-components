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
import { prefix, form } from "../../../config";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import { styles, stylesProps } from "../TextInput";
import { TextArea as LightTextarea } from "light-form/dist/es";
const StyledTextarea = css("textarea")(styles, stylesProps);
const StyledLightTextarea = css(LightTextarea)(styles, stylesProps);
class Textarea extends React.Component {
    constructor() {
        super(...arguments);
        this.name = prefix + "textarea";
    }
    render() {
        const { input, labels, meta } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        const Element = props.name ? StyledLightTextarea : StyledTextarea;
        return (React.createElement(Field, Object.assign({}, props, { name: this.name }),
            React.createElement(Element, Object.assign({}, props, (!props.name && input), { height: this.props.height, "aria-invalid": isInvalid ? 1 : 0, className: `${this.name}__input
                                ${form}__input--text
                                ${form}__input--textarea
                    `, placeholder: labels.placeholder }), input.value)));
    }
}
Textarea.defaultProps = Object.assign({}, defaultFieldProps, { height: 100 });
export default Textarea;
