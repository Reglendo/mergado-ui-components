Example

    var Field = require('redux-form').Field;
    <div>
        <Field component={Checkbox} labels={{main: <span>Check me!</span>}} name="checkbox1" onChange={() => alert('Hello')} />
    </div>
