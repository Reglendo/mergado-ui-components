Single date picker
    
    var Field = require('redux-form').Field;
    <Field component={DatePicker} name="date" props={{ labels: { main: "Created:", placeholder: "Pick a date please..." }}} />


Range dates
    
    var Field = require('redux-form').Field;
    <Field component={DatePicker} name="date" props={{ type: "range", labels: { main: "Select two dates:", placeholderFrom: "From", placeholderTo: "To" }}} />
    
