Example

    var Field = require('redux-form').Field;
    <div>
        <Field component={Checkbox} labels={{main: <span>Check me!</span>}} name="checkbox1" onChange={() => alert('Hello')} />
        <Field component={Checkbox} labels={{main: "I'm missing something"}} name="checkbox2" />
        <Field component={Checkbox} labels={{main: "I'm missing something",invalid: "Error!"}} name="checkbox3" />
        <Field component={Checkbox} labels={{main: "I'm missing something",invalid: "Error!"}} name="checkbox4" />
        <Field component={Checkbox} labels={{main: "I'm missing something",invalid: "Error!"}} name="checkbox5" />
        <Field component={Checkbox} labels={{main: "I'm missing something",invalid: "Error!"}} meta={{touched: true, invalid: true}} name="checkbox6" />
    </div>
