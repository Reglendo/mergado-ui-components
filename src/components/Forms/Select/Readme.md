Example

    var Field = require('redux-form').Field;
    <div>
        <Field name="select1" component={Select} labels={{main: 'I\'m select'}} props={{ options: [{ title: 'foo', value: '1'},{ title: 'bar', value: '2'}] }}  />
        <Field name="select1" component={Select} labels={{main: 'I\'m disabled select'}} props={{ input: { disabled: true, value: 1 }, options: [{ title: 'foo', value: '1'},{ title: 'bar', value: '2'}] }}  />
        <Select labels={{main: 'I am invalid select', invalid: 'Hello!'}} meta={{invalid: true, dirty: true}}  options={[<option >Hello world</option>,<option >Foobar</option>]} />

    </div>
