Example

    var Field = require('redux-form').Field;
    <div>
        <FormGroup label="Group of checkboxes">
          <Field component={Checkbox} labels={{main: <span>Check me!</span>}} name="checkbox1" />
          <Field component={Checkbox} labels={{main: <span>Check me!</span>}} name="checkbox2" />
          <Field component={Checkbox} labels={{main: <span>Check me!</span>}} name="checkbox3" />
          <Field component={Checkbox} labels={{main: <span>Check me!</span>}} name="checkbox4" />
        </FormGroup>
    </div>
