Range

    <Range min={1} max={50} step={1} name="form.range" label="Range:" placeholder="Range" />

    <Range invalid={true} min={1} max={50} step={1} name="form.range" label="Range:" placeholder="Range" />

    <Range error={"Error!"} min={1} max={50} step={1} name="form.range" label="Range:" placeholder="Range" />

Uncontrolled input

    <Range min={1} max={50} step={1} onChange={(e) => alert(e)} value={10} label="Range:" placeholder="Range" />
