Example

    <Radio name="form.radio" items={[
        {value: 1, label: "First item"},
        {value: 2, label: "Second item"},
        {value: 3, label: "Third item"},
        {value: 4, label: "Fourth item"},
    ]} />

    <Radio name="form.radio" invalid={true} items={[
        {value: 1, label: "First item"},
        {value: 2, label: "Second item"},
        {value: 3, label: "Third item"},
        {value: 4, label: "Fourth item"},
    ]} />

    <Radio name="form.radio" error={"Error!"} items={[
        {value: 1, label: "First item"},
        {value: 2, label: "Second item"},
        {value: 3, label: "Third item"},
        {value: 4, label: "Fourth item"},
    ]} />


Uncontrolled

    <Radio onChange={(value) => alert(value)}
        value={4}
        items={[
            {value: 1, label: "First item"},
            {value: 2, label: "Second item"},
            {value: 3, label: "Third item"},
            {value: 4, label: "Fourth item"},
        ]} />