Example

    var Field = require('redux-form').Field;
    <div>
        <Field component={Radio} name='video' labels={{main: 'Radio' }} />
        <Field component={Radio} name='video' labels={{main: 'Video' }} />
        <Field component={Radio} name='video' labels={{main: 'Kills the star' }} />
    </div>

Validation

    <Radio labels={{main: 'Choose me', invalid: 'I am invalid' }} meta={{invalid: true, dirty: true}} />