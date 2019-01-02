import * as React from "react"
import {prefix} from "../../config"
import {Field, IField} from "../Field"
import RadioInput from "./input"
import InputContainer from "../Field/InputContainer"
import GC from "../GridCell"
import Grid from "../Grid"
import css from "@reglendo/cxs/component"

interface IItem {
    value: string
    label: string | JSX.Element
}

interface Props extends IField {
    items: IItem[]
    singleChoice?: boolean
    hideInput?: boolean
}

export class InputGroupH extends React.Component<Props, {}> {

    protected readonly name = prefix + "input-radio";

    shouldComponentUpdate(nextProps, nextState) {
        if(
            this.props.value !== nextProps.value
        ) {
            return true
        }
        return false
    }

    handleChange = (value) => {
        if(this.props.setValue) {
            this.props.setValue(value)
        } else
        if(this.props.onChange) {
            this.props.onChange(value)
        }
    }

    public renderInputs() {
        const { value, items, singleChoice, hideInput } = this.props
        if(!items) {
            return false
        }
        return items.map((obj: IItem) => {
            const index = value.indexOf(obj.value);
            const handler = () => {
                let selected = [...this.props.value]
                if (index < 0) { // wasn't selected
                    // select item
                    selected = singleChoice ? [obj.value] : selected.concat(obj.value)
                } else {
                    // unselect item
                    selected.splice(index, 1)
                }
                this.handleChange(selected)
            }
            return (
                <GridCell key={obj.value}>
                <RadioInput label={obj.label}
                            value={obj.value}
                            checked={value.indexOf(obj.value) > -1}
                            onChange={handler}
                            hideInput={hideInput}
                            singleChoice={singleChoice}
                />
                </GridCell>
            )
        })
    }

    public render() {
        const {children, ...props} = this.props
        return (
            <Field {...props} name={this.name}>
                <Grid style={{gridAutoFlow: "column"}}>
                    {this.renderInputs()}
                </Grid>
            </Field>
        )
    }
}

const GridCell = css(GC)(props => {
    const theme: any = props.theme
    return {
        ":hover .m-radio-input, &:hover .m-checkbox-input": {
            borderColor: `${theme.blue}`,
        },
        ":first-of-type .m-button": {
            borderRadius: `${theme.radius} 0 0 ${theme.radius}`,
            margin: 0,
        },
        ":last-of-type .m-button": {
            borderRadius: `0 ${theme.radius} ${theme.radius} 0`,
        },
    }
})

export default InputContainer(InputGroupH)
