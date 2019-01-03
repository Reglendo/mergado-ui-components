import React from "react"

import Section from "../Section"
import TextInput from "../TextInput"
import Checkbox from "../Checkbox"
import ColorPicker from "../ColorPicker"
import DatePicker from "../DatePicker"
import Radio from "../Radio"
import Grid from "../Grid"
import GridCell from "../GridCell"
import FieldLabel from "../FieldLabel"
import Autocomplete from "../Autocomplete"
import InputGroupV from "../InputGroupV"
import InputGroupH from "../InputGroupH"
import Select from "../Select"
import Range from "../Range"

export const Form = (props) => {
    return (
        <Section header={"Example Form"}>
        <Grid cols={"1fr 1fr"}>
            <GridCell>
                <TextInput label="TextInput:" name="form.text" />
            </GridCell>
            <GridCell>
                <Autocomplete label={"Autocomplete"} placeholder={'Find me...'}
                                name="form.autocomplete"
                                items={[ {value: '1', text: 'First'},
                                                {value: '2', text: 'Second'},
                                                {value: '3', text: 'Third'},
                                    ]}
                    />
            </GridCell>
            <GridCell>
                <FieldLabel>Checkbox:</FieldLabel>
                <Checkbox label="First" name="form.checkbox1" style={{marginBottom: 0}} />
                <Checkbox label="Second" name="form.checkbox2" style={{marginBottom: 0}} />
                <Checkbox label="Third" name="form.checkbox3" style={{marginBottom: 0}} />
                <Checkbox label="Fourth" name="form.checkbox4" style={{marginBottom: 0}} />
            </GridCell>
            <GridCell>
                <Radio label="Radio" name="form.radio" items={[{value: 1, label: 'First' },{value: 2, label: 'Second'},{value: 3, label: 'Third' },]} />
            </GridCell>
            <GridCell>
                <ColorPicker label="ColorPicker:" name="form.colorpicker" />
            </GridCell>
            <GridCell>
                <DatePicker label="DatePicker:" name="form.datepicker" />
            </GridCell>
            <GridCell>
                <Select label="Select:" name="form.select" options={[
                    {value: "1", label: "First"},
                    {value: "2", label: "Second"},
                    {value: "3", label: "Third"},
                    {value: "4", label: "Fourth"},
                ]} />
            </GridCell>
            <GridCell>
                <Range label="Range:" name="form.range" />
            </GridCell>
            <GridCell>
                <InputGroupV label="InputGroupV:" name="form.inputgroupv" withoutFilter={true} showInput={true} items={[
                    {value: 1, label: "First option"},
                    {value: 2, label: "Second option"},
                    {value: 3, label: "Third option"},
                    {value: 4, label: "Fourth option"},
                ]} />
            </GridCell>
            <GridCell>
                <InputGroupH label="InputGroupH:" name="form.inputgrouph" showInput={true} items={[
                    {value: 1, label: "First"},
                    {value: 2, label: "Second"},
                    {value: 3, label: "Third"},
                    {value: 4, label: "Fourth"},
                ]} />
            </GridCell>

        </Grid>
        </Section>
    )

}

export default Form