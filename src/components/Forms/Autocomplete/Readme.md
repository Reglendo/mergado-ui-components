Example

    var Field = require('redux-form').Field;
    <div>
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

     <Field component={Autocomplete} labels={{placeholder: 'Find me...', main: 'With label'}}
             name="value2"
             props={{ items: [ {value: 'You', text: 'You'},
                                  {value: 'Me', text: 'Me'},
                                  {value: 'You & me', text: 'You & me'},
                                  {value: 'Me & you', text: 'Me & you'},
                                  {value: 'Some other men', text: 'Some other men'}
                     ]
                     }}
      />

      <Field component={Autocomplete} labels={{placeholder: 'Find me...', main: ''}}
              name="value2"
              props={{ items: [ {value: 'You', text: 'You'},
                                   {value: 'Me', text: 'Me'},
                                   {value: 'You & me', text: 'You & me'},
                                   {value: 'Me & you', text: 'Me & you'},
                                   {value: 'Some other men', text: 'Some other men'}
                      ],
                      meta: { dirty: true, invalid: true, error: 'I am error'}
                      }}
       />
      </div>
