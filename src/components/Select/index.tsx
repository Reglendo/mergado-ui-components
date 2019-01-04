import * as React from "react"
import css from "@reglendo/cxs/component"
import Div from "../Div"
import IconChevronDown from "@reglendo/mergado-ui-icons/lib/icons/IconChevronDown"
import {prefix} from "../../config"
import {Field,IField} from "../Field"
import {Select as SelectItem} from "react-select-item"
import {styles, stylesProps} from "./style"
import InputContainer from "../Field/InputContainer"

interface Props extends IField {
    options: any
    multiple?: boolean
}

interface State {
}

export class Select extends React.Component<Props, State> {

    protected readonly name = prefix + "select";

    shouldComponentUpdate(nextProps, nextState) {
        if(
            this.props.error !== nextProps.error ||
            this.props.value !== nextProps.value
        ) {
            return true
        }
        return false
    }


    onChange = e => {
        const value = e.filter(o => o).join('|')
        if(this.props.setValue) {
            this.props.setValue(value)
        }
        if(this.props.onChange) {
            this.props.onChange(value)
        }
    }


    renderOption = o => ({ name: o.title ? o.title : o.label ? o.label : o.name, value: o.value})

    public render() {
        const {onChange, label, placeholder, multiple, name, ...props} = this.props
        const value = this.props.value ? (typeof this.props.value  === "string" ? this.props.value.split("|") : this.props.value) : []
        return (
            <Field {...this.props} name={this.name}>
                <Div position="relative">
                    <StyledSelect
                           closeOnChange={!multiple}
                           selectItem={true}
                           placeholder={"- - -"}
                           searchEmptyPlaceholder={""}
                           searchPlaceholder={""}
                           clearText={""}
                           searchText={""}
                           {...props}
                           multiple={multiple}
                           value={value}
                           onChange={this.onChange}
                           options={props.options.map(this.renderOption)}
                           data-name={name}
                           aria-invalid={props.invalid || props.error ? 1 : 0} />
                    <IconChevronDown size={10}
                                     className={"icon-select-open"}
                                     />
                </Div>
            </Field>
        )
    }
}

const StyledSelect = css(SelectItem)(styles, stylesProps)

export default InputContainer(Select)
