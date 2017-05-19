Example

    var Field = require('redux-form').Field;

    <Field component={Autocomplete} labels={{placeholder: 'Find me...', main: ''}}
            name="value"
            props={{ items: [ {value: 'You', text: 'You'}, 
                                 {value: 'Me', text: 'Me'},
                                 {value: 'You & me', text: 'You & me'},
                                 {value: 'Me & you', text: 'Me & you'}, 
                                 {value: 'Some other men', text: 'Some other men'} 
                    ]
                    }}
     />