Example

    <InputGroupV
        label={"Multi checkboxes"}
        placeholder={"Filter options"}
        showInput={true}
        items={[
            {value: 1, label: "First option"},
            {value: 2, label: "Second option"},
            {value: 3, label: "Third option"},
            {value: 4, label: "Fourth option"},
        ]}
        name="form.inputgroupv" />


Uncontrolled

    <InputGroupV
        label={"Multi checkboxes"}
        placeholder={"Filter options"}
        showInput={true}
        items={[
            {value: 1, label: "First option"},
            {value: 2, label: "Second option"},
            {value: 3, label: "Third option"},
            {value: 4, label: "Fourth option"},
        ]}
        value={[2,3]}
        onChange={value => alert(value)} />

