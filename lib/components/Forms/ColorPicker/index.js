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
import * as InputColor from "react-input-color";
import css from "cxs/component";
import debounce from "lodash/debounce";
import { prefix } from "../../../config";
import { Field, defaultFieldProps } from "../../../components/Forms/Field";
import { Input } from "light-form/dist/es";
export class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.name = prefix + "colorpicker";
        const color = (typeof props.color == 'string' || props.color instanceof String)
            ? props.color
            : `rgba(${props.color.r},${props.color.g},${props.color.b},${props.color.a})`;
        this.state = {
            displayColorPicker: false,
            color,
        };
        this.handleChanged = debounce(this.handleChanged.bind(this), 200);
    }
    handleChanged(evt) {
        this.setState({ color: evt });
        return this.props.input.onChange(evt);
    }
    render() {
        const { color } = this.state;
        const { input, meta } = this.props;
        const _a = this.props, { children } = _a, props = __rest(_a, ["children"]);
        const background = `${color}`;
        const isInvalid = meta.invalid && (meta.dirty || meta.touched);
        return (React.createElement(StyledField, Object.assign({}, props, { name: this.name, "aria-invalid": isInvalid ? 1 : 0 }),
            React.createElement(Input, Object.assign({}, props, (!props.name && input), { type: "hidden", value: background })),
            React.createElement(InputColor, { value: color, defaultValue: "#345678", onChange: this.handleChanged }),
            React.createElement("style", null, style)));
    }
}
ColorPicker.defaultProps = Object.assign({}, defaultFieldProps, { color: "#000000" });
const StyledField = css(Field)({
    display: "inline-block",
    width: "100%",
    " .muk-form__group--invalid": {
        fontSize: "0",
    },
    " .m-input-color": {
        position: "relative",
        display: "inline-block",
        width: "100%",
        height: "40px",
        padding: "5px",
        backgroundColor: "#ffffff",
        userSelect: "none",
        transition: "border-color 0.2s",
        willChange: "border-color",
    },
}, props => {
    const theme = props.theme;
    return {
        " .m-input-color": {
            borderRadius: theme.radius,
            borderColor: theme.decoration,
            border: props["aria-invalid"] ? theme.input_border_error : theme.input_border,
        },
        " .m-input-color:focus": {
            border: `${theme.input_border_active} !important`,
        },
        " .m-input-color:active": {
            border: `${theme.input_border_active} !important`,
        },
        " .muk-form__group--invalid .muk-colorpicker__colorbox": {
            borderColor: `${theme.red} !important`,
        },
    };
});
const ColorBox = css("div")({
    cursor: "pointer",
    background: "white",
    padding: "5px",
}, props => {
    const theme = props.theme;
    return {
        border: `1px solid ${theme.decoration}`,
        borderRadius: theme.radius,
    };
});
const Popover = css("div")({
    position: "absolute",
    zIndex: 200,
});
const Cover = css("div")({
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
});
const style = `
.f-no-select {
  user-select: none;
}
.m-input-color.color-picker-open:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  left: 10px;
  top: 17px;
  border-color: transparent;
  border-style: solid;
  border-bottom-color: #f5f5f5;
  border-width: 10px;
  content: " ";
}
.m-input-color .remove {
  display: none;
}
.m-input-color .css-color {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.m-input-color .slider {
  background: none;
  border-radius: 0;
}
.m-input-color .value {
  display: none;
}
.m-input-color .slider-x {
  position: relative;
  width: 190px;
  height: 12px;
  background-color: #ccc;
  user-select: none;
  -webkit-user-select: none;
  border: 1px solid #aaa;
}
.m-input-color .slider-x .handle {
  position: absolute;
}
.m-input-color .slider-x .handle:after {
  position: absolute;
  top: -1px;
  left: -3px;
  width: 5px;
  height: 12px;
  border: 1px solid #aaa;
  border-radius: 0;
  background-color: #eee;
  content: '';
}
.m-input-color .slider-xy {
  position: relative;
  width: 100%;
  height: 100%;
}
.m-input-color .slider-xy .handle {
  position: absolute;
}
.m-input-color .slider-xy .handle:after {
  position: relative;
  display: block;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #fff;
  border-radius: 50%;
  content: '';
}
.m-color-picker {
  position: absolute;
  top: 37px;
  left: 0px !important;
  width: 252px;
  height: 340px;
  padding: 10px;
  background-color: #f5f5f5;
  z-index: 9999;
}
.m-color-picker .selector {
  position: relative;
  width: 230px;
  height: 230px;
}
.m-color-picker .gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.m-color-picker .white {
  background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
}
.m-color-picker .dark {
  background: linear-gradient(to bottom, transparent 0%, #000000 100%);
}
.m-color-picker .sliders {
  position: relative;
  margin-top: 10px;
}
.m-color-picker .hue {
  margin-bottom: 5px;
  background: linear-gradient(to left, #FF0000 0%, #FF0099 10%, #CD00FF 20%, #3200FF 30%, #0066FF 40%, #00FFFD 50%, #00FF66 60%, #35FF00 70%, #CDFF00 80%, #FF9900 90%, #FF0000 100%);
}
.m-color-picker .color {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
}
.m-color-picker .inputs {
  margin: 10px 0 0 0;
}
.m-color-picker .input {
  width: 30px;
  margin-right: 10px;
  float: left;
  text-align: center;
}
.m-color-picker .input:last-child {
  margin-right: 0;
  margin-left: 6px;
}
.m-color-picker .input .label {
  font-size: 13px;
  font-weight: normal;
  color: #000;
}
.m-color-picker .input .value {
  display: block;
  width: 100%;
  font-size: 12px;
  padding: 4px;
  line-height: 14px;
  border: 1px solid #ccc;
}
.m-color-picker .hex {
  width: 70px;
}
.m-input-number {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 3px;
  font-size: 12px;
}
.m-input-number input {
  width: 100%;
  padding: 4px;
  line-height: 14px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  outline: 0;
}
.m-input-number input:focus {
  border: 1px solid #3498db;
}
.m-input-number .control {
  position: absolute;
  display: none;
  top: 1px;
  right: 1px;
  bottom: 0;
  color: #ccc;
  background-color: #eee;
  width: 16px;
  height: 24px;
  font-size: 7px;
  text-align: center;
  box-sizing: border-box;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}
.m-input-number .control-hide {
  display: none !important;
}
.m-input-number:hover .control {
  display: block;
}
.m-input-number .up,
.m-input-number .down {
  display: block;
  height: 12px;
  box-sizing: border-box;
  padding-top: 2px;
}
`;
