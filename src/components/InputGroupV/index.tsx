import * as React from "react"
import css from "@reglendo/cxs/component"
import {prefix, form} from "../../config"
import LittleStatus from "../LittleStatus"
import TextInput from "../TextInput"
import uniqueId from "../../helpers/unique_id"
import {Field, IField} from "../Field"
import {QueryList} from "./list"
import _debounce from "lodash/debounce"
import InputContainer from "../Field/InputContainer"



interface Props extends IField {

    /** type Query = { value, label, product_count?, active?, link?, subheader? } */
    items: Query[]
    /** If singleChoice is enabled, radios will be used instead of checkboxes */
    singleChoice?: boolean
    /** Show radio/checkbox input. Otherwise show only link */
    showInput?: boolean
    /** Do not show queries filter */
    withoutFilter?: boolean
    /** Height of box with queries (in px) */
    height?: number
    /** Show active options first */
    activeFirst?: boolean
}

interface State {
    filter: string
}

export type Query = {
    value: number
    label: string
    product_count?: number
    active?: boolean
    link?: JSX.Element
    subheader?: boolean
}

export class InputGroupV extends React.Component<Props,State> {

    protected readonly name = prefix + "inputgroupv";

    state = {
        filter: "",
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(
            this.props.value !== nextProps.value ||
            this.state.filter !== nextState.filter
        ) {
            return true
        }
        return false
    }

    handleFilter = (value) => {
        this.setState({ filter: value })
    }

    handleChange = (value) => {
        const values = this.props.value

        if(this.props.setValue) {
            this.props.setValue(value)
        } else
        if(this.props.onChange) {
            this.props.onChange(value)
        }
    }

    public render() {
        const { withoutFilter, invalid, height } = this.props
        const { children, ...props} = this.props
        const options =  this.props.items
                            .filter((option) => {
                                const regex = new RegExp(this.state.filter, "i");
                                return option.subheader || regex.test(option.label);
                            })
        const isInvalid = invalid
        const value: any = this.props.value
        return (
            <StyledField {...props} className={`${this.name}__queries`}>
                {!withoutFilter &&
                    <TextInput className={`${this.name}__filter_input`}
                        type="search"
                        onClear={() => this.setState({ filter: "" }) }
                        style={{marginBottom: "5px"}}
                        onChange={this.handleFilter}
                        value={this.state.filter}
                        placeholder={this.props.placeholder}
                        label=""
            />
                }
                <QueryList className={`${this.name}__list ${isInvalid ? `${form}__group--invalid` : ""}`}
                    name={this.props.name}
                    height={height || 300}
                    activeFirst={props.activeFirst}
                    options={options}
                    value={value || []}
                    singleChoice={this.props.singleChoice}
                    showInput={this.props.showInput}
                    onChange={this.handleChange}
                />
            </StyledField>
        )
    }

}

const StyledField = css(Field)({
    " > .muk-form__group--invalid": {
        border: "none !important",
    },
})

export default InputContainer(InputGroupV)
