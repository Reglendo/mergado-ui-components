Light input

    <Section>
        <Toggler labels={{main: <span>On</span>}}
                 offLabel="Off"
                 name="checkbox001" input={{value: true, onChange: () => alert('Hello') }} />



        <Toggler label="Aktivní"
                 offLabel="Pozastaveno"
                 reverse={true}
                 name="checkbox001" input={{value: true, onChange: () => alert('Hello') }} />
    </Section>
