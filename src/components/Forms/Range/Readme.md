Example

    <Range labels={{ main: 'Pick a value' }} max={5} min={0} step={0.01} input={{ onChange: (evt) => { console.log('----'); console.log(evt); return true }}} />

Validation

    <Range labels={{ main: 'Pick a value', invalid: 'I am invalid' }} meta={{invalid: true, dirty: true}} max={5} min={0} step={0.01} input={{ value: 1, onChange: (evt) => { console.log('----'); console.log(evt); return true }}} />
