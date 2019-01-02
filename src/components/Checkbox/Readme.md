Example

    <Checkbox name="form.checkbox" label="Typical checkbox" />

    <Checkbox name="form.checkbox2" label="Second checkbox" />

    <Checkbox name="form.checkbox3" label="Third checkbox" />

    <TextInput name="form.testinput" label="Text input" />

Uncontrolled

    <Checkbox checked={true} onChange={(value) => alert(value) } label="Typical checkbox" />
    <Checkbox error="Error!" checked={true} onChange={(value) => alert(value) } label="Typical checkbox" />


