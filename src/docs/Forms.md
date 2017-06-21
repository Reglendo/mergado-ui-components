All forms components have common empty props based on redux-form's [Field props](http://redux-form.com/6.0.0-alpha.4/docs/api/Field.md/#props)

```jsx
group?: {
    className?: string,
},
input?: {
    className?: string,
    name?: string,
    value?: any,
    checked?: boolean,
    onBlur?: (value: any) => void,
    onChange?: (value: any) => void,
    onDragStart?: (value: any) => void,
    onDrop?: (value: any) => void,
    onFocus?: (value: any) => void,
    onKeyDown?: (value: any) => void,
    onKeyUp?: (value: any) => void,
    onClick?: (value: any) => void,
}
meta?: {
    active: boolean,
    autofilled: boolean,
    asyncValidating: boolean,
    dirty: boolean,
    dispatch: () => void,
    error: string,
    form: string,
    invalid: boolean,
    pristine: boolean,
    submitting: boolean,
    submitFailed: boolean,
    touched: boolean,
    valid: boolean,
    visited: boolean,
    warning: string,
}
labels?: {
    main?: string | JSX.Element,
    invalid?: string | JSX.Element,
    title?: string,
    placeholder?: string,
}
```


Example form

    var InputLabel = require("components/Forms/Input").InputLabel;
    var Field = require('redux-form').Field;

    <div>
        <h2>Inquiry form</h2>
        <TextInput labels={{main: 'I\'m looking for:', placeholder: 'Describe something'}} type="search" />
        <div style={{marginTop: '10px', width: '50%', display: 'inline-block', verticalAlign: 'middle' }}>
            <h3>Identification</h3>
            <TextInput labels={{ main: 'First name*:', invalid: 'This field is required' }} meta={{invalid: state.invalid, dirty: true}} />
            <TextInput labels={{main: 'Last name:' }} />
        </div>
        <div style={{marginTop: '10px', width: '50%', display: 'inline-block', verticalAlign: 'middle' }}>
            <h3>Contact</h3>
            <TextInput labels={{main: 'Your phone number:', placeholder: 'e.g. 777 123 456' }} type="tel" />
            <TextInput labels={{main: 'Email address*:', invalid: 'This field is required', placeholder: 'e.g. email@email.cz' }} meta={{invalid: state.invalid, dirty: true}} type="email" />
        </div>
        <div style={{marginTop: '10px', width: '50%', display: 'inline-block', verticalAlign: 'middle' }}>
            <Field name="favcolor" component={Radio}
                    props={{
                        group: { bigLabel: true },
                        items: [
                                {value: "black", label: "black"},
                                {value: "blue", label: "blue"},
                                {value: "orange", label: "orange"},
                                {value: "pink", label: "pink"}
                        ]
                    }}
                    label="Your favourite color:" />
        </div>
        <div style={{marginTop: '10px', width: '50%', display: 'inline-block', verticalAlign: 'middle' }}>
            <h3>Your abilities:</h3>
            <InputLabel>Choose your superpower:</InputLabel>
            <Field name="superpower1" component={Checkbox} labels={{main: "invisibility"}} />
            <Field name="superpower2" component={Checkbox} labels={{main: "immortality"}} />
            <Field name="superpower3" component={Checkbox} labels={{main: "stupidity"}} />
            <Field name="superpower4" component={Checkbox} labels={{main: "other-ity"}} />
        </div>

        <h3>Other information</h3>
        <div style={{width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
            <ColorPicker labels={{main: 'What is your favorite color:'}} color={{ r:0, g:140, b:0, a:1 }} />
        </div>
        <div style={{width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
            <Textarea labels={{main: 'Leave us message:'}} />
        </div>

        <Button labels={{main: 'Submit' }} onClick={ () => { setState( { invalid: true }) }} />
        <Button color="gray" labels={{main: 'Reset' }} onClick={ () => { setState( { invalid: false }) }} />
    </div>


