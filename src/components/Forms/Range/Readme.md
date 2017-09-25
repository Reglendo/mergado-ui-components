Example

    var Field = require('redux-form').Field;
    <div>
    <Field component={Range}  name="ranger" labels={{ main: 'Pick a value' }} default={4.5} max={5} min={2} step={0.01} />
    <Field component={Range}  name="ranger" labels={{ main: 'Pick a value' }} default={0} max={5} min={2} step={0.01} />
    </div>

Validation

    <Range labels={{ main: 'Pick a value', invalid: 'I am invalid' }} meta={{invalid: true, dirty: true}} max={5} min={0} step={0.01} input={{ value: 1, onChange: (evt) => { console.log('----'); console.log(evt); return true }}} />
