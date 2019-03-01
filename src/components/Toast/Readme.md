Types

    <Section>
        <div>
            <Toast text="Snackbar inspired" type="material" icon={<Icon type="mergado" />} />
            <Toast text="Info" type="info" icon={<Icon type="mergado" />} />
            <Toast text="Success" type="success" icon={<Icon type="check" />} />
            <Toast text="Warning" type="warning" icon={<Icon type="exclamation-triangle" />}/>
            <Toast text="Error" type="error" icon={<Icon type="exclamation-circle" />}/>
            <Toast text="Message" type="message" icon={<Icon type="reglendo" />} />
            <Toast text="Inactive" type="inactive" icon={<Icon type="heureka-small" />} />
        </div>
    </Section>


Some of our best toasts

    initialState = { paused: true };
    <Section>
        <Toast icon={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbpweYyc1mQOwkCQYsUmWUeRAo00tmYNzx7RfCynUzJhBEZb-' style={{float: "right", maxHeight: "90px", margin: "0 10px", width: "auto"}} />} style={{maxHeight: "200px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Toast>
        <Toast type="warning" closeable={false} text="I'll vanish in %seconds% seconds" icon={<Icon type="hourglass-2" />} timeout={50000} />
        <Toast text="Try to close me" type="inactive" icon={<Icon type="bell-slash" />}
                    onClose={() => { alert('You can\'t escape me!'); return false; }} />
        <button onClick={e => setState({ paused: false })} >Start countdown</button>
    </Section>