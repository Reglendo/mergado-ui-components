import * as React from "react"
import css from "@reglendo/cxs/component"
import * as Color from "color"
import InputContainer  from "../Field/InputContainer"
import {prefix,form} from "../../config"
import {Field, IField} from "../Field"
import TextInput from "../TextInput"
import Grid from "../Grid"
import GridCell from "../GridCell"
import FieldLabel from "../FieldLabel";

export interface Props extends IField {
    max: number
    min: number
    step: number
    setValue: any
}

export interface State {
}

export class Range extends React.PureComponent<Props,State> {

    protected readonly name = prefix + "input-range";

    handleChange = (evt) => {
        this.props.onChange(evt.target.value);
    }

    public render() {
        const { label, name, ...props } = this.props
        return (
            <StyledField {...props} name={this.name}>
                <Grid cols={"100px auto"}>
                {!!label &&
                    <GridCell col="span 2">
                        <FieldLabel>{label}</FieldLabel>
                    </GridCell>
                }
                    <GridCell>
                    <TextInput
                        {...props}
                        onChange={this.handleChange}
                    />
                    </GridCell>
                    <GridCell style={{padding: "5px 0 5px 10px"}}>
                        <StyledInput
                            className={`${this.name}__item
                                        ${form}__input--text ${form}__input--range`}
                            type="range"
                            {...props}
                            onChange={this.handleChange}
                        />
                    </GridCell>
                </Grid>
            </StyledField>
        )
    }
}

const StyledField = css(Field)({
    " input[type=range]": {
        appearance: "none",
        width: "100%",
        margin: "5.5px 0",
    },
    " input[type=range]:focus": {
        outline: "none",
    },
},(props) => {

    const thumbColor = props.theme.blue
    const sliderColor = Color(props.theme.decoration).fade(0.5).string()

    const slider = {
        width: "100%",
        height: "6px",
        cursor: "pointer",
        background: "white",
        borderRadius: "10px",
        border: `1px solid ${sliderColor}`,
    }

    const thumb = {
        border: `8px solid ${Color(thumbColor).fade(0.2).string()}`,
        height: "25px",
        width: "25px",
        borderRadius: "100%",
        background: "#ffffff",
        cursor: "pointer",
        appearance: "none",
        marginTop: "-11px",
        transition: "border-color 0.3s",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
    }
    return {
        // track
        " input[type=range]::-webkit-slider-runnable-track": slider,

        // thumb
        " input[type=range]::-webkit-slider-thumb": thumb,
        " input[type=range]:hover::-webkit-slider-thumb": {
            borderColor: thumbColor,
        },

        // Mozilla
        " input[type=range]::-moz-range-track": {
            ...slider,
        },
        " input[type=range]::-moz-range-thumb": {
            // ...thumb,
            height: "10px",
            width: "10px",
        },
        " input[type=range]:hover::-moz-range-thumb": {
            borderColor: thumbColor,
        },
    }
})

const styles = {
    padding: 0,
    border: "none",
    background: "transparent",
    appearance: "none",
}
const StyledInput = css("input")(styles)

export default InputContainer(Range)
