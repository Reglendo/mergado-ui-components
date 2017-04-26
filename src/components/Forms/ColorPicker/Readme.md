Field example

    var Field = require('redux-form').Field;
    <Field component={ColorPicker} name='color' labels={{ main: 'Pick me' }} props={{ color: { r:0, g:0, b:0, a:1} }} />
    
Component example

    <ColorPicker input={{ onChange: (evt) => alert(evt.hex + ' has been chosen') }} />
