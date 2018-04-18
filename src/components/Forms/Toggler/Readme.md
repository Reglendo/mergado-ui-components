Light input

    <Section>
        <Toggler labels={{main: <span>On</span>}}
                 offLabel="Off"
                 name="checkbox001" input={{value: true, onChange: () => alert('Hello') }} />



        <Toggler label="Aktivní"
                 offLabel="Pozastaveno"
                 reverse={true}
                 name="checkbox001" input={{value: true, onChange: () => alert('Hello') }} />


        <Toggler    
                big={true}
                width={60}
                label="On"
                 offLabel="Off"
                 name="checkbox001" input={{value: true, onChange: () => alert('Hello') }} />

        <Toggler label="Aktivní"
                 big={true}
                 reverse={true}
                 width={120}
                 offLabel="Pozastaveno"
                 name="checkbox001" input={{value: true, onChange: () => alert('Hello') }} />

        <Toggler    
                big={true}
                boolean={true}
                name="checkbox001" input={{value: true, onChange: () => alert('Hello') }} />

    </Section>
