Example

    var Field = require('redux-form').Field;
    <div>
        <Field component={Checkbox} labels={{main: <span>Check me!</span>}} name="checkbox1" onChange={() => alert('Hello')} />
        <Checkbox labels={{main: <span>Check me!</span>, invalid: 'I\'m invalid' }}
                    meta={{invalid: true, touched: true}} id="customid" />
    </div>
