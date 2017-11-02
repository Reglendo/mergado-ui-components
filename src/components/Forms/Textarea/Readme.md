Light textarea

    <Section>
        <Textarea name="description" id="customid" labels={{ main: "Your name:", placeholder: "Please describe me" }} />
    </Section>


Text input with placeholder and label

    var Field = require('redux-form').Field;
    <Section>
        <Field component={Textarea} name="description" props={{ id: "customid", labels: { main: "Your name:", placeholder: "Please describe me" }}} />
    </Section>

Validation

    <Section>
    <Textarea labels={{main: 'Give me some text:', invalid: 'I am invalid'}} meta={{invalid: true, dirty: true}} />
    </Section>
