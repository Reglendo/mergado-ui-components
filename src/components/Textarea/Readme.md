Example

    <Textarea name="form.textarea" label={"Write something:"} placeholder={"Nothing to see here"} />

Uncontrolled

    <Textarea onChange={(value) => alert(value)} value="Sometext" label={"Write something:"} placeholder={"Nothing to see here"} />