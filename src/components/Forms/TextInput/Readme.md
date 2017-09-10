Text input with placeholder and label

    var Field = require('redux-form').Field;

    <div>
        <Field component={TextInput} name="firstname" labels={{ main: "Your name:", placeholder: "Please enter your name here"}} />
        <Field component={TextInput} name="uploadfile" props={{type: "file"}} labels={{ main: "Your name:", placeholder: "Please enter your name here"}} />
        <Field component={TextInput} input={{disabled: true, value: "I\'am disabled" }} name="uploadfile" labels={{ main: "Your name:" }} />

    </div>

Input types

    <div>
        <TextInput labels={{placeholder: 'Give me some text'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="number" labels={{placeholder: 'Give me some number'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="password" labels={{placeholder: 'Give me some password'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="password" labels={{placeholder: 'Give me some password'}} input={{ onChange: () => { return true; } }} label="Give me your password" />
        <TextInput type="email" labels={{placeholder: 'Give me some email'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="search" labels={{placeholder: 'Give me some search'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="tel" labels={{placeholder: 'Give me some tel'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="url" labels={{placeholder: 'Give me some url'}} input={{ onChange: () => { return true; } }} />
        <TextInput type="file" accept=".csv" labels={{main: 'Give me some file'}} input={{ onChange: () => { return true; } }} />

        <TextInput type="hidden" labels={{main: '+ hidden'}} />
    </div>


Validation
    <div>
    <TextInput labels={{main: 'Give me some text', invalid: 'I am invalid'}} meta={{invalid: true, dirty: true}} input={{ onChange: () => { return true; } }} />
    <TextInput labels={{main: "Next input", placeholder: 'Give me some text'}} input={{ onChange: () => { return true; } }} />
    </div>
