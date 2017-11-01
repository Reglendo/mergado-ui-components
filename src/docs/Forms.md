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

    var Field = require('redux-form').Field;
    var FieldLabel = require('../components/Forms/Field').FieldLabel;

    <Section>
        <h2>Inquiry form</h2>
        <TextInput name="searching" labels={{main: 'I\'m looking for:', placeholder: 'Describe something'}} type="search" />
        <div style={{ width: '50%', display: 'inline-block', verticalAlign: 'middle' }}>
            <h3>Identification</h3>
            <TextInput name="firstname" labels={{ main: 
                                                                        <span>
                                                                            First name*:&nbsp;
                                                                            <PopupHint hint={true}>Help me!</PopupHint>
                                                                        </span>, invalid: 'This field is required' }} meta={{invalid: state.invalid, dirty: true}} />
            <TextInput name="lastname" labels={{main:  <span>
                                                                            Last name:&nbsp;
                                                                            <PopupHint icon={<Icon type="info-circle" />} >Help me!</PopupHint>
                                                                          </span> }} />
        </div>
        <div style={{ width: '50%', display: 'inline-block', verticalAlign: 'middle' }}>
            <h3>Contact</h3>
            <TextInput name="tel" labels={{main: 'Your phone number:', placeholder: 'e.g. 777 123 456' }} type="tel" />
            <TextInput name="email" labels={{main: 'Email address*:', invalid: 'This field is required', placeholder: 'e.g. email@email.cz' }} meta={{invalid: state.invalid, dirty: true}} type="email" />
        </div>
        <div style={{ width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
            <Radio name="favcolor"
                    items={[
                        {value: "black", label: "black"},
                        {value: "blue", label: "blue"},
                        {value: "orange", label: "orange"},
                        {value: "pink", label: "pink"}
                    ]}
                    label="Your favourite color:" />
        </div>
        <div style={{width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
                <FieldLabel>Your favourite superpower</FieldLabel>
                <Checkbox name="superpower1" labels={{main: "invisibility"}} />
                <Checkbox name="superpower2" labels={{main: "immortality"}} />
                <Checkbox name="superpower3" labels={{main: "stupidity"}} />
                <Checkbox name="superpower4" labels={{main: "other-ity"}} />
        </div>

        <h3>Other information</h3>
        <div style={{width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
            <ColorPicker name="colorpicker"  labels={{main: 'What is your favorite color:'}} color={{ r:0, g:140, b:0, a:1 }} />
        </div>
        <div style={{width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
            <Textarea name="textarea" labels={{main: 'Leave us message:'}} />
        </div>

        <div style={{textAlign: "center"}}>
            <Button name="submit" props={{icon: <Icon type="check" />}} type="button" labels={{main: 'Submit' }} onClick={ () => { setState( { invalid: true }) }} />
            <code>&nbsp;</code>
            <Button name="reset" props={{icon: <Icon type="close" />}} type="button" color="gray" labels={{main: 'Reset' }} onClick={ () => { setState( { invalid: false }) }} />
        </div>
    </Section>
