Example

    var Field = require('redux-form').Field;


    <div>
        <Field component={Checkbox} labels={{main: 'Check me!'}} name="checkbox1" onChange={() => alert('Hello')} />
        <br/>
        <Checkbox labels={{main: 'Check me!', invalid: 'I\'m invalid' }} input={{name: 'checkbox1' }}
                    meta={{invalid: true, touched: true}} id="customid" />
    </div>