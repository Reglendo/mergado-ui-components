Example

    <ColorPicker name="form.colorpicker" label="Pick a color:" />

Uncontrolled

    <ColorPicker onChange={(e) => alert(e)} value="#ff00ff" label="Pick a color:" />

    <ColorPicker error="Error!" onChange={(e) => alert(e)} value="#ffffff" label="Pick a color:" />
    <ColorPicker invalid={true} onChange={(e) => alert(e)} value="#ffffff" label="Pick a color:" />
