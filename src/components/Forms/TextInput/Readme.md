Light form input

    <Section>
        <TextInput name="firstname" labels={{ main: "Your name:", placeholder: "Please enter your name here"}} />
    </Section>


Text input with placeholder and label

    var Field = require('redux-form').Field;

    <Section>
        <Field component={TextInput} name="firstname" labels={{ main: "Your name:", placeholder: "Please enter your name here"}} />
        <Field component={TextInput} name="uploadfile" props={{type: "file"}} labels={{ main: "Your name:", placeholder: "Please enter your name here"}} />
        <Field component={TextInput} input={{disabled: true, value: "I\'am disabled" }} name="uploadfile" labels={{ main: "Your name:" }} />

    </Section>

Input types

    var Field = require('redux-form').Field;
    <Section>
        <Field component={TextInput} name="text" labels={{placeholder: 'Give me some text'}}  />
        <Field component={TextInput} name="number" type="number" labels={{placeholder: 'Give me some number'}}  />
        <Field component={TextInput} name="password" type="password" labels={{placeholder: 'Give me some password'}}  />
        <Field component={TextInput} name="email" type="email" labels={{placeholder: 'Give me some email'}}  />
        <Field component={TextInput} name="search" type="search" labels={{placeholder: 'Give me some search'}}  />
        <Field component={TextInput} name="tel" type="tel" labels={{placeholder: 'Give me some tel'}}  />
        <Field component={TextInput} name="url" type="url" labels={{placeholder: 'Give me some url'}}  />
        <Field component={TextInput} name="file" type="file" accept=".csv" labels={{main: 'Give me some file'}}  />
        <Field component={TextInput} name="hidden" type="hidden" labels={{main: '+ hidden'}} />
    </Section>


Validation

    var Field = require('redux-form').Field;
    <Section>
        <Field component={TextInput} name="invalid" labels={{main: 'Give me some text', invalid: 'I am invalid'}} meta={{invalid: true, dirty: true}}  />
        <Field component={TextInput} name="nexttoinvalid" labels={{main: "Next input", placeholder: 'Give me some text'}}  />
    </Section>
