Text input with placeholder and label

    var Field = require('redux-form').Field;

    <Field component={TextInput} name="first-name" props={{ id: "customid", labels: { main: "Your name:", placeholder: "Please enter your name here" }}} />
