Example

    var Field = require('redux-form').Field;
    <div>
        <Field component={Select} labels={{main: 'I\'m select'}} props={{ options: [{ title: 'foo', value: '1'},{ title: 'bar', value: '2'}] }}  />
    </div>


Validation

    <Select labels={{main: 'I\'m select', invalid: 'I am invalid'}} meta={{invalid: true, dirty: true}}  options={[<option >Hello world</option>,<option >Foobar</option>]} />
