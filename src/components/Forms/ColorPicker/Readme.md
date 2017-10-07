Field example

    var Field = require('redux-form').Field;
    <Section>
        <Field component={ColorPicker} name='color1' labels={{ main: 'Pick me' }} props={{ color: { r:0, g:0, b:0, a:1} }} />
    </Section>
    
Component example

    <Section>
        <ColorPicker input={{ onChange: (evt) => alert(evt + ' has been chosen') }} color={{ r:255, g:0, b:0, a:1 }} />
    </Section>

Validation

    <Section>
        <ColorPicker labels={{invalid: 'I am invalid', main: 'Me pick you must'}} meta={{invalid: true, dirty: true}} color={{ r:140, g:140, b:140, a:1 }} />
    </Section>
