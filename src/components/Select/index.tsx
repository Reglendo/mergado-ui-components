import * as React from "react"
import css from "@reglendo/cxs/component"
import Div from "../Div"
import IconChevronDown from "@reglendo/mergado-ui-icons/lib/icons/IconChevronDown"
import {prefix} from "../../config"
import {Field,IField} from "../Field"
import {Select as LightSelect} from "@reglendo/light-form/dist/es"
import {Select as SelectItem} from "react-select-item"
import {styles, stylesProps} from "./style"
import debounce from "lodash/debounce"

interface Props extends IField {
    options: any
    multiple?: boolean
}

interface State {
  value: string
}

class Select extends React.PureComponent<Props, State> {

    constructor(props) {
      super(props)
        this.state = {
          value: props.value || "",
        }
    }

    protected readonly name = prefix + "select";

    onChange = debounce(e => {
        const value = e.filter(o => o).join('|')
        this.setState({value})
        if(this.props.onChange) {
            this.props.onChange(value)
        }
    }, 500)


    renderOption = o => o.title ? ({ name: o.title, value: o.value}) : o

    public render() {
        const {onChange, label, placeholder, multiple, invalid, name, ...props} = this.props
        const { value } = this.state
        const Element = name ? StyledLightSelect : StyledSelect
        return (
            <Field {...this.props} name={this.name}>
                <Div position="relative">
                    <Element
                           closeOnChange={!multiple}
                           selectItem={true}
                           placeholder={"- - -"}
                           searchEmptyPlaceholder={""}
                           searchPlaceholder={""}
                           clearText={""}
                           searchText={""}
                           {...props}
                           name={name}
                           multiple={multiple}
                           value={name ? undefined : value.split("|")}
                           onChange={name ? undefined : this.onChange}
                           options={props.options.map(this.renderOption)}
                           aria-invalid={invalid ? 1 : 0} />
                    <IconChevronDown size={10}
                                     className={"icon-select-open"}
                                     />
                </Div>
            </Field>
        )
    }
}

const StyledLightSelect = css(LightSelect)(styles, stylesProps)
const StyledSelect = css(SelectItem)(styles, stylesProps)

export default Select
