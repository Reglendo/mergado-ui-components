Example

    var Field = require('redux-form').Field;
    <div>
        <Field component={Radio} name='video' labels={{main: 'Choose one:' }}
                props={{group: {bigLabel: true}}}
                items={[
                        { value: "Radio", label: "Radio"  },
                        { value: "Video", label: "Video"  },
                        { value: "Kills the star", label: "Kills the star"  }
                ]}
        />
    </div>
