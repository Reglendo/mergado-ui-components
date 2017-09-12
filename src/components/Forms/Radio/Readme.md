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

Big buttons

    var Field = require('redux-form').Field;
    <div>
        <Field component={Radio} name='video' labels={{main: 'Choose one:' }}
                props={{group: {bigLabel: true}, bigButtons: true }}
                items={[
                        { value: "Radio", label: "Radio"  },
                        { value: "Video", label: "Video"  },
                        { value: "kills", label: "kills"  },
                        { value: "the", label: "the"  },
                        { value: "star", label: "star"  },
                ]}
        />
    </div>

Invalid

    var Field = require('redux-form').Field;
    <div>
        <Field component={Radio} name='video' labels={{main: 'Choose one:', invalid: "Not OK" }}
                meta={{touched: true, invalid: true}}
                props={{group: {bigLabel: true}}}
                items={[
                        { value: "Radio", label: "Radio"  },
                        { value: "Video", label: "Video"  },
                        { value: "Kills the star", label: "Kills the star"  }
                ]}
        />
    </div>
