Light select

    <Section>
        <Select name="select1" labels={{main: 'I, select'}}
                options={ [{ title: 'foo', value: '1'},{ title: 'bar', value: '2'}] }  />
                
                
       <Select name="select1" labels={{main: 'I, select'}} multiple={true}>
                <option>1</option>
                <optgroup label="hello world">
                <option>2</option>
                <option>3</option>
                </optgroup>
        </Select>
    </Section>


Example

    var Field = require('redux-form').Field;
    <Section>
        <Field name="select1" component={Select} labels={{main: 'I\'m select'}} props={{ options: [{ title: 'foo', value: '1'},{ title: 'bar', value: '2'}] }}  />
        <Field name="select3" component={Select} labels={{main: 'I\'m disabled select'}} props={{ input: { name: "select3", disabled: true, value: 1 }, options: [{ title: 'foo', value: '1'},{ title: 'bar', value: '2'}] }}  />
        <Field component={Select} name="select2" labels={{main: 'I am invalid select', invalid: 'Hello!'}} meta={{invalid: true, dirty: true}}  options={[<option >Hello world</option>,<option >Foobar</option>]} />

        <Field name="select1" multiple={true} component={Select} labels={{main: 'I\'m select'}} props={{ options: [{ title: 'foo', value: '1'},{ title: 'bar', value: '2'}] }}  />

    </Section>
