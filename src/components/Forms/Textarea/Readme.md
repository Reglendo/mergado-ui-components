Text input with placeholder and label

    var Field = require('redux-form').Field;

    <Field component={Textarea} name="description" props={{ id: "customid", labels: { main: "Your name:", placeholder: "Please describe me" }}} />

Validation

    <Textarea labels={{main: 'Give me some text:', invalid: 'I am invalid'}} meta={{invalid: true, dirty: true}} />