Example

    <InputGroupH name="form.inputgrouph"
    singleChoice={true}
    items={[
        { value: 1, label: "First item" },
        { value: 2, label: "Second item" },
        { value: 3, label: "Third item" },
        { value: 4, label: "Fourth item" },
    ]}
    />

Uncontrolled

    <InputGroupH onChange={value => alert(value)}
        value={[2]}
        items={[
        { value: 1, label: "First item" },
        { value: 2, label: "Second item" },
        { value: 3, label: "Third item" },
        { value: 4, label: "Fourth item" },
    ]}
    />

