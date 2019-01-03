Example

    initialState = { errors: false };

    <Section header={"Example Form"}>
        <Grid cols={"1fr 1fr"}>
            <GridCell>
                <TextInput label="TextInput:" name="form.text" error={state.errors} />
            </GridCell>
            <GridCell>
                <Autocomplete label={"Autocomplete"} placeholder={'Find me...'}
                                 error={state.errors}
                                name="form.autocomplete"
                                items={[ {value: '1', text: 'First'},
                                                {value: '2', text: 'Second'},
                                                {value: '3', text: 'Third'},
                                    ]}
                    />
            </GridCell>
            <GridCell>
                <FieldLabel>Checkbox:</FieldLabel>
                <Checkbox label="First" error={state.errors} name="form.checkbox1" style={{marginBottom: 0}} />
                <Checkbox label="Second" error={state.errors} name="form.checkbox2" style={{marginBottom: 0}} />
                <Checkbox label="Third" error={state.errors} name="form.checkbox3" style={{marginBottom: 0}} />
                <Checkbox label="Fourth" error={state.errors} name="form.checkbox4" style={{marginBottom: 0}} />
            </GridCell>
            <GridCell>
                <Radio label="Radio" name="form.radio" error={state.errors} items={[{value: 1, label: 'First' },{value: 2, label: 'Second'},{value: 3, label: 'Third' },]} />
            </GridCell>
            <GridCell>
                <ColorPicker label="ColorPicker:" error={state.errors} name="form.colorpicker" />
            </GridCell>
            <GridCell>
                <DatePicker label="DatePicker:" error={state.errors} name="form.datepicker" />
            </GridCell>
            <GridCell>
                <Select label="Select:" name="form.select" error={state.errors} options={[
                    {value: "1", label: "First"},
                    {value: "2", label: "Second"},
                    {value: "3", label: "Third"},
                    {value: "4", label: "Fourth"},
                ]} />
            </GridCell>
            <GridCell>
                <Range label="Range:" name="form.range" error={state.errors} />
            </GridCell>
            <GridCell>
                <InputGroupV label="InputGroupV:" error={state.errors} name="form.inputgroupv" withoutFilter={true} showInput={true} items={[
                    {value: 1, label: "First option"},
                    {value: 2, label: "Second option"},
                    {value: 3, label: "Third option"},
                    {value: 4, label: "Fourth option"},
                ]} />
            </GridCell>
            <GridCell>
                <InputGroupH label="InputGroupH:" error={state.errors} name="form.inputgrouph" showInput={true} items={[
                    {value: 1, label: "First"},
                    {value: 2, label: "Second"},
                    {value: 3, label: "Third"},
                    {value: 4, label: "Fourth"},
                ]} />
            </GridCell>

        </Grid>

        <div style={{textAlign:"center"}}>
            <Button color="green" onClick={() => setState({ errors: "Not valid" })} style={{marginRight: "10px"}}>Validate</Button>
            <Button onClick={() => {
                    setState({ errors: false });
            }}>Reset validation</Button>
        </div>

        </Section>