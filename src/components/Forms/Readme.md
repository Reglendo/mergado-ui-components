Example form
        
    initialState = { invalid: false };

    <div>
        <h2>Inquiry form</h2>
        <TextInput labels={{main: 'I\'m looking for:', placeholder: 'Describe something'}} type="search" />
        <div style={{width: '50%', display: 'inline-block', verticalAlign: 'middle' }}>
            <h3>Identification</h3>
            <TextInput labels={{ main: 'First name*:', invalid: 'This field is required' }} meta={{invalid: state.invalid, dirty: true}} />
            <TextInput labels={{main: 'Last name:' }} />
        </div>
        <div style={{width: '50%', display: 'inline-block', verticalAlign: 'middle' }}>
            <h3>Contact</h3>
            <TextInput labels={{main: 'Your phone number:', placeholder: 'e.g. 777 123 456' }} type="tel" />
            <TextInput labels={{main: 'Email address*:', invalid: 'This field is required', placeholder: 'e.g. email@email.cz' }} meta={{invalid: state.invalid, dirty: true}} type="email" />
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
    

