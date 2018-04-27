Light input

    <Section>
        <Radio name='lightvideo' labels={{main: 'Choose one:' }}
                items={[
                        { value: "Radio", label: "Radio"  },
                        { value: "Video", label: "Video"  },
                        { value: "Kills the star", label: "Kills the star"  }
                ]}
        />
    </Section>


Example

    var Field = require('redux-form').Field;
    <Section>
        <Field component={Radio} name='video' labels={{main: 'Choose one:' }}
                props={{group: {bigLabel: true}}}
                items={[
                        { value: "Radio", label: "Radio"  },
                        { value: "Video", label: "Video"  },
                        { value: "Kills the star", label: "Kills the star"  }
                ]}
        />
    </Section>

Big buttons

    var Field = require('redux-form').Field;

    <Section>
        <Radio name='video' labels={{main: 'Choose one:' }}
                bigLabel={true} bigButtons={true}
                
                items={[
                        { value: "Radio", label: <span><Icon type="angellist" />Radio</span>  },
                        { value: "Video", label: <span><Icon type="cab" />Video</span>  },
                        { value: "kills", label: <span><Icon type="medkit" />kills</span>  },
                        { value: "the", label: <span><Icon name="IconHandORight" />the</span>   },
                        { value: "star", label: <span>star star star star</span> },
                ]}
        />
        <Field component={Radio} name='video' labels={{main: 'Choose one:' }}
                props={{group: {bigLabel: true}, bigButtons: true, hideInput: true, }}
                items={[
                        { value: "Radio", label: <span><Icon type="angellist" />Radio</span>  },
                        { value: "Video", label: <span><Icon type="cab" />Video</span>  },
                        { value: "kills", label: <span><Icon type="medkit" />kills <PopupHint hint={true}>Hello world</PopupHint></span>  },
                        { value: "the", label: <span><Icon name="IconHandORight" />the</span>   },
                        { value: "star", label: <span><Icon name="IconReglendo" size={20} />star <PopupHint hint={true}>Hello world</PopupHint></span> },
                ]}
        />
    </Section>

Invalid

    var Field = require('redux-form').Field;
    <Section>
        <Field component={Radio} name='video' labels={{main: 'Choose one:', invalid: "Not OK" }}
                meta={{touched: true, invalid: true}}
                props={{group: {bigLabel: true}}}
                items={[
                        { value: "Radio", label: "Radio"  },
                        { value: "Video", label: "Video"  },
                        { value: "Kills the star", label: "Kills the star"  }
                ]}
        />
    </Section>
