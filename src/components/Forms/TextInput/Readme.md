Text input with placeholder and label

    var Field = require('redux-form').Field;

    <Field component={TextInput} name="first-name" props={{ id: "customid", labels: { main: "Your name:", placeholder: "Please enter your name here" }}} />

Input types

    <div>
        <TextInput labels={{placeholder: 'Give me some text'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="number" labels={{placeholder: 'Give me some number'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="password" labels={{placeholder: 'Give me some password'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="email" labels={{placeholder: 'Give me some email'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="search" labels={{placeholder: 'Give me some search'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="tel" labels={{placeholder: 'Give me some tel'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="url" labels={{placeholder: 'Give me some url'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="file" labels={{main: 'Give me some file'}} input={{ onChange: () => { return true; } }} />

        <TextInput type="hidden" labels={{main: '+ hidden'}} />
    </div>
    

Validation

    <TextInput labels={{main: 'Give me some text', invalid: 'I am invalid'}} meta={{invalid: true, dirty: true}} input={{ onChange: () => { return true; } }} />
    