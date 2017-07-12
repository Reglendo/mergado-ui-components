import * as React from "react"
import {prefix, form} from "config"
import LittleStatus from "components/LittleStatus"
import TextInput from "components/Forms/TextInput"
import {Link} from "react-router"
import uniqueId from "helpers/unique_id"
import {Field, IFieldProps, defaultFieldProps} from "components/Forms/Field"
import {QueryList} from "./list"

export interface Query {
    id: number
    name: string
    product_count?: number
    active?: boolean
    link?: Link | JSX.Element
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
    /** Show small label instead of bigger header  */
    showLabel?: boolean

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
        showLabel: false,
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

    }

    protected renderFilter() {
        return (
            <TextInput className={`${this.name}__filter_input`}
                        type="search"
                        input={{ value: this.state.filter,
                                 onChange: evt => this.setState({ filter: evt.target.value }) }}
                        labels={this.props.labels}
            />
        )
    }

    public render() {
        const { withoutFilter, height, showLabel, labels, meta} = this.props
        const options =  this.props.availableQueries
                            .filter((option) => {
                                const regex = new RegExp(this.state.filter, "i");
                                return option.subheader || regex.test(option.name);
                            })
        return (
            <Field label="" className={`${this.name}__queries`}>
                {withoutFilter === false && this.renderFilter()}
                <QueryList className={`${this.name}__list`} name={this.name} height={height}
                    options={options} value={this.props.input.value ? this.props.input.value : []}
                    input={this.props.input} singleChoice={this.props.singleChoice}
                    showInput={this.props.showInput} labels={labels}
                />
            </Field>
        )
    }

}

export default CheckboxContainer
