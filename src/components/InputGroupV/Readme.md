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

    <InputGroupV
        label={"Multi checkboxes"}
        placeholder={"Filter options"}
        showInput={true}
        invalid={true}
        items={[
            {value: 1, label: "First option"},
            {value: 2, label: "Second option"},
            {value: 3, label: "Third option"},
            {value: 4, label: "Fourth option"},
        ]}
        name="form.inputgroupv" />

    <InputGroupV
        label={"Multi checkboxes"}
        placeholder={"Filter options"}
        showInput={true}
        error={"Error!"}
        items={[
            {value: 1, label: "First option"},
            {value: 2, label: "Second option"},
            {value: 3, label: "Third option"},
            {value: 4, label: "Fourth option"},
        ]}
        name="form.inputgroupv" />

    <FieldLabel bigLabel={true}>Single choice checkboxes</FieldLabel>
    <InputGroupV
        placeholder={"Filter options"}
        showInput={true}
        singleChoice={true}
        items={[
            {
                label: "Facebook 1 : 1 (600 × 600 px)",
                subheader: true,
                value: "s121",
            },
            {
                created_at: "2018-10-30 10:10:47",
                height: 600,
                id: 121,
                label: "Všechny šablony",
                name: "Facebook 1 : 1",
                project_id: 56254,
                updated_at: "2018-10-30 10:10:47",
                value: "s121",
                width: 600,
            },
            {
                label: "Všechny šablony",
                subheader: false,
                value: "ALL",
            },
            {
                label: "Facebook 16: 9",
                subheader: true,
                value: "s122",
            },
            {
                label: "Takové šablony zatím nemáte",
                value: null,
                disabled: true,
            },

        ]}
        name="form.singlechoiceinputgroupv" />


Uncontrolled

    <InputGroupV
        label={"Single choice checkboxes"}
        placeholder={"Filter options"}
        showInput={true}
        singleChoice={true}
        items={[
            {
                label: "Facebook 1 : 1 (600 × 600 px)",
                subheader: true,
                value: "s121",
            },
            {
                created_at: "2018-10-30 10:10:47",
                height: 600,
                id: 121,
                label: "Všechny šablony",
                name: "Facebook 1 : 1",
                project_id: 56254,
                updated_at: "2018-10-30 10:10:47",
                value: "s121",
                width: 600,
            },
            {
                label: "Všechny šablony",
                subheader: false,
                value: "ALL",
            },
            {
                label: "Facebook 16: 9",
                subheader: true,
                value: "s122",
            },
            {
                label: "Takové šablony zatím nemáte",
                value: null,
                disabled: true,
            },

        ]}
        value={[2,3]}
        onChange={value => alert(value)} />

