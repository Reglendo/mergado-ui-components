Example

    var Field = require('redux-form').Field;
    <Field component={Range}  name="ranger" labels={{ main: 'Pick a value' }} max={5} min={2} step={0.01} />

Validation

    <Range labels={{ main: 'Pick a value', invalid: 'I am invalid' }} meta={{invalid: true, dirty: true}} max={5} min={0} step={0.01} input={{ value: 1, onChange: (evt) => { console.log('----'); console.log(evt); return true }}} />
