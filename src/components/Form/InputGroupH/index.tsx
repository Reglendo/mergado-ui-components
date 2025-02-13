import * as React from "react"
import {Field, IField} from "../Field"
import RadioInput from "./input"
import InputContainer from "../Field/InputContainer"
import GC from "../../GridCell"
import Grid from "../../Grid"
import css from "../../../css"
import Theme from "../../Theme"

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

    protected readonly name = "muk-input-radio";

    shouldComponentUpdate(nextProps, nextState) {
        if(
            this.props.error !== nextProps.error ||
            this.props.value !== nextProps.value
        ) {
            return true
        }
        return false
    }

    handleChange = (value) => {
        if(this.props.setValue) {
            this.props.setValue(value)
        }
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
            const handler = () => {
                if(singleChoice) {
                    const selected = obj.value
                    this.handleChange(selected)
                    return
                }
                const index = value.indexOf(obj.value);
                let selected = [...this.props.value]
                if (index < 0) { // wasn't selected
                    // select item
                    selected = selected.concat(obj.value)
                } else {
                    // unselect item
                    selected.splice(index, 1)
                }
                this.handleChange(selected)
            }
            const checked = singleChoice ? value == obj.value : value.indexOf(obj.value) > -1
            return (
                <GridCell key={obj.value}>
                <RadioInput label={obj.label}
                            value={obj.value}
                            checked={checked}
                            onChange={handler}
                            name={this.props.name}
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
                <Grid autoFlow="column">
                    {this.renderInputs()}
                </Grid>
            </Field>
        )
    }
}

const GridCell = css(GC)({
    ":hover .m-radio-input, &:hover .m-checkbox-input": {
        borderColor: `${Theme.blue}`,
    },
    ":first-of-type .m-button": {
        borderRadius: `${Theme.radius} 0 0 ${Theme.radius} !important`,
        margin: 0,
    },
    ":last-of-type .m-button": {
        borderRadius: `0 ${Theme.radius} ${Theme.radius} 0 !important`,
    },
})

export default InputContainer(InputGroupH)
