import * as React from "react"
import css from "@reglendo/cxs/component"
import {Div} from "../../../components/Layout"
import * as Color from "color"
import IconChevronDown from "@reglendo/mergado-ui-icons/lib/icons/IconChevronDown"
import {prefix} from "../../../config"
import uniqueId from "../../../helpers/unique_id"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import {Select as LightSelect} from "light-form/dist/es"
import {Select as SelectItem} from "react-select-item"

export interface Props extends IFieldProps {
    options?: any
}

class Select extends React.Component<Props, {}> {

    protected readonly name = prefix + "select";

    public static defaultProps: Props = {
        ...defaultFieldProps,
        options: [],
        size: 0,
    }

    protected renderOptions() {
        return this.props.options.map(option => {
            if (React.isValidElement(option)) {
                if (option.key) {
                    return option;
                } else {
                    const object: any = Object
                    return object.assign({}, option, {key: uniqueId()})
                }
            } else {
                return (<option value={option.value} key={uniqueId()}>{option.title}</option>)
            }
        })
    }

    public render() {
        const {meta, input, labels} = this.props
        const {children, ...props} = this.props
        const isInvalid = meta.invalid && (meta.dirty || meta.touched)
        const Element = props.name ? StyledLightSelect : StyledSelect

        return (
            <Field {...props} name={this.name}>
                <Div position="relative">
                    <StyledLightSelect
                           closeOnChange={true}
                           selectItem={true}
                           {...props}
                           {...(!props.name && input)}
                             aria-invalid={isInvalid ? 1 : 0} />
                    <IconChevronDown size={10}
                                     style={{
                                         opacity: 0.6, position: "absolute", bottom: "9px",
                                         right: "10px", pointerEvents: "none"
                                     }}/>
                </Div>
            </Field>
        )
    }
}


const stylesSelectItem = {
    "& .react-select-item-container": {
        position: "relative",
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
    // "& .react-select-item-search": {
    //     padding: "18px 20px",
    //     display: "inline-block",
    //     width: "100%",
    //     height: "40px",
    //     boxSizing: "border-box",
    //     border: "none",
    //     fontSize: "12px",
    //     fontWeight: "bold",
    //     color: "#7B8E9B",
    // },
    // "!.react-select-item-search, .react-select-item-search:focus": {
    //     outline: "none"
    // },
    // "!.react-select-item-search::-webkit-input-placeholder": {
    //     color: "#CECECE"
    // },
    "& .react-select-item:focus": {
        outline: "0"
    },
    // "& .react-select-item:before": {
        // content: "' '",
        // zIndex: "1",
        // position: "absolute",
        // height: "20px",
        // top: "10px",
        // right: "34px",
        // borderLeft: "1px solid #CBD2D7"
    // },
    // "& .react-select-item:after": {
    //     content: "' '",
    //     position: "absolute",
    //     zIndex: "1",
    //     top: "18px",
    //     right: "13px",
    //     borderTop: "6px solid #7B8E9B",
    //     borderLeft: "5px solid transparent",
    //     borderRight: "5px solid transparent"
    // },
    "& .react-select-item-label, .react-select-item-option": {
        lineHeight: "16px",
        fontSize: "12px",
        // fontWeight: "bold",
        // color: "#7B8E9B",
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
        top: "2px",
        left: "10px",
        zIndex: "1",
        backgroundColor: "white",
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
        fontSize: "12px",
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
        fontSize: "12px",
        color: "#7B8E9B",
        fontWeight: "bold"
    }
}

const styles = {
    ...stylesSelectItem,
    boxSizing: "border-box",
    width: "100%",
    height: "40px",
    lineHeight: "40px",
    outline: "none",
    display: "inline-block",
    margin: "0",
    background: "white",
    color: "#333333",
    verticalAlign: "middle",
    padding: "0 10px",
    borderWidth: "1px",
    borderStyle: "solid",
    appearance: "none",
    transition: "border-color 0.2s",
    willChange: "border-color",
    ":focus": {
        outline: "none",
        border: "none",
    },
    ":active": {
        outline: "none",
        border: "none",
    },
    "::-ms-expand": {
        display: "none",
    },
    "::-moz-focusring": {
        color: "transparent",
        textShadow: "0 0 0 #000",
    },
}
const stylesProps = (props) => {
    const theme = props.theme

    let disabled = {}
    if (props.disabled) {
        disabled = {
            color: "#999",
            background: "#eee",
            borderColor: Color(theme.grey).fade(0.5).string(),
        }
    }

    return {
        borderRadius: theme.radius,
        border: props["aria-invalid"] ? theme.input_border_error : theme.input_border,
        ":active": {
            border: theme.input_border_active,
        },
        ":focus": {
            border: theme.input_border_active,
        },
        ...disabled,
    }
}

const StyledSelect = css(SelectItem)(styles, stylesProps)
const StyledLightSelect = css(LightSelect)(styles, stylesProps)

export default Select
