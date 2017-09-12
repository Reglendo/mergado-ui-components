Simple button

    var Field = require('redux-form').Field;
    <div>
        <Field component={Button} name="first-name" props={{ type: 'submit', labels: { main: "I\'m submit!" }}} />
        <Button labels={{main: 'I\'m void!'}} type="void" />
    </div>
