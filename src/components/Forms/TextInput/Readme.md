Text input with placeholder and label

    var Field = require('redux-form').Field;

    <div>
        <Field component={TextInput} name="firstname" labels={{ main: "Your name:", placeholder: "Please enter your name here"}} />
        <Field component={TextInput} name="uploadfile" props={{type: "file"}} labels={{ main: "Your name:", placeholder: "Please enter your name here"}} />
        <Field component={TextInput} input={{disabled: true, value: "I\'am disabled" }} name="uploadfile" labels={{ main: "Your name:" }} />

    </div>

Input types

    var Field = require('redux-form').Field;
    <div>
        <Field component={TextInput} name="text" labels={{placeholder: 'Give me some text'}} input={{ onChange: () => { return true; } }} />
        <Field component={TextInput} name="number" type="number" labels={{placeholder: 'Give me some number'}} input={{ onChange: () => { return true; } }} />
        <Field component={TextInput} name="password" type="password" labels={{placeholder: 'Give me some password'}} input={{ onChange: () => { return true; } }} />
        <Field component={TextInput} name="email" type="email" labels={{placeholder: 'Give me some email'}} input={{ onChange: () => { return true; } }} />
        <Field component={TextInput} name="search" type="search" labels={{placeholder: 'Give me some search'}} input={{ onChange: () => { return true; } }} />
        <Field component={TextInput} name="tel" type="tel" labels={{placeholder: 'Give me some tel'}} input={{ onChange: () => { return true; } }} />
        <Field component={TextInput} name="url" type="url" labels={{placeholder: 'Give me some url'}} input={{ onChange: () => { return true; } }} />
        <Field component={TextInput} name="file" type="file" accept=".csv" labels={{main: 'Give me some file'}} input={{ onChange: () => { return true; } }} />
        <Field component={TextInput} name="hidden" type="hidden" labels={{main: '+ hidden'}} />
    </div>


Validation

    var Field = require('redux-form').Field;
    <div>
        <Field component={TextInput} name="invalid" labels={{main: 'Give me some text', invalid: 'I am invalid'}} meta={{invalid: true, dirty: true}} input={{ onChange: () => { return true; } }} />
        <Field component={TextInput} name="nexttoinvalid" labels={{main: "Next input", placeholder: 'Give me some text'}} input={{ onChange: () => { return true; } }} />
    </div>
