Example

    <Autocomplete label={"Autocomplete"} placeholder={'Find me...'}
                name="form.autocomplete"
                items={[ {value: '123', text: 'You'},
                                 {value: '456', text: 'Me'},
                                 {value: '123456', text: 'You & me'},
                                 {value: '456123', text: 'Me & you'},
                                 {value: 'nothing', text: 'Some other men'}
                    ]}
     />


Uncontrolled

    <Autocomplete label={"Autocomplete"} placeholder={'Find me...'}
                onChange={(e) => alert(e)} value="Me"
                items={[ {value: '123', text: 'You'},
                                 {value: '456', text: 'Me'},
                                 {value: '123456', text: 'You & me'},
                                 {value: '456123', text: 'Me & you'},
                                 {value: 'nothing', text: 'Some other men'}
                    ]}
     />

    <Autocomplete label={"Autocomplete"} placeholder={'Find me...'}
                error={"Error!"}
                onChange={(e) => alert(e)} value="Me"
                items={[ {value: '123', text: 'You'},
                                 {value: '456', text: 'Me'},
                                 {value: '123456', text: 'You & me'},
                                 {value: '456123', text: 'Me & you'},
                                 {value: 'nothing', text: 'Some other men'}
                    ]}
     />


