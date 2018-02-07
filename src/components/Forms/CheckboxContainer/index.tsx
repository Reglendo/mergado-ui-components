import * as React from "react"
import css from "cxs/component"
import {prefix, form} from "../../../config"
import LittleStatus from "../../../components/LittleStatus"
import TextInput from "../../../components/Forms/TextInput"
import uniqueId from "../../../helpers/unique_id"
import {Field, IFieldProps, defaultFieldProps} from "../../../components/Forms/Field"
import {QueryList} from "./list"
import _debounce from "lodash/debounce"

export interface Query {
    id: number
    name: string
    product_count?: number
    active?: boolean
    link?: JSX.Element
    subheader?: boolean
}

export interface Props extends IFieldProps {

    availableQueries?: Query[]

    /** If singleChoice is enabled, radios will be used instead of checkboxes */
    singleChoice?: boolean
    /** Show radio/checkbox input. Otherwise show only link */
    showInput?: boolean
    /** Do not show queries filter */
    withoutFilter?: boolean
    /** Height of box with queries (in px) */
    height?: number | string
    /** Show active options first */
    activeFirst?: boolean
    labels?: {
        allProducts?: string,
        main?: string,
        placeholder?: string,
        invalid?: string,
    }
}

export interface State {
    filter: string
}

class CheckboxContainer extends React.Component<Props,State> {

    protected readonly name = prefix + "checkbox_container";
    public readonly props: Props;
    public state: State;

    public static defaultProps: Props = {
        ...defaultFieldProps,
        availableQueries: [],
        singleChoice: false,
        withoutFilter: false,
        height: 300,
        showInput: false,
        activeFirst: true,
        labels: {
            main: "",
            allProducts: "All products",
            placeholder: "",
            invalid: "",
        },
    }

    constructor(props: Props) {
        super(props)
        this.state = {
            filter: "",
        }

        this.handleFilter = _debounce(this.handleFilter.bind(this),150)

    }

    protected renderFilter() {
        return (
            <TextInput className={`${this.name}__filter_input`}
                        type="search"
                        onClear={() => this.setState({ filter: "" }) }
                        style={{marginBottom: "5px"}}
                        input={{ value: this.state.filter,
                                 onKeyUp: this.handleFilter }}
                        labels={{ placeholder: this.props.labels.placeholder, main: "" }}
            />
        )
    }

    protected handleFilter(evt) {
        this.setState({ filter: evt.target.value })
    }

    public render() {
        const { withoutFilter, height, labels, meta} = this.props
        const { children, ...props} = this.props
        const options =  this.props.availableQueries
                            .filter((option) => {
                                const regex = new RegExp(this.state.filter, "i");
                                return option.subheader || regex.test(option.name);
                            })
        const isInvalid = this.props.meta.invalid && (this.props.meta.dirty || this.props.meta.touched)
        return (
            <StyledField {...props}
                labels={labels} className={`${this.name}__queries`}>
                {withoutFilter === false && this.renderFilter()}
                <QueryList className={`${this.name}__list ${isInvalid ? `${form}__group--invalid` : ""}`}
                    name={this.props.name} height={height}
                    activeFirst={props.activeFirst}
                    options={options} value={this.props.input.value ? this.props.input.value : []}
                    input={this.props.input} singleChoice={this.props.singleChoice}
                    showInput={this.props.showInput} labels={labels}
                    meta={meta}
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

export default CheckboxContainer
