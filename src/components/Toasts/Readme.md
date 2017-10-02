Types

    <div>
        <Toasts paused={state.paused} toasts={[
            <Toast text="Info" type="info" icon={<Icon type="mergado" />} />,
            <Toast text="Success" type="success" icon={<Icon type="check" />} />,
            <Toast text="Warning" type="warning" icon={<Icon type="exclamation-triangle" />}/>,
            <Toast text="Error" type="error" icon={<Icon type="exclamation-circle" />}/>,
            <Toast text="Message" type="message" icon={<Icon type="reglendo" />} />,
            <Toast text="Inactive" type="inactive" icon={<Icon type="heureka-small" />} />,

         ] } />   
    </div>
         
Some of our best toasts 

       initialState = { paused: true };
        <div>
        <Toasts paused={state.paused} toasts={[
                <Toast icon={<Icon type="mergado" />}>
                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbpweYyc1mQOwkCQYsUmWUeRAo00tmYNzx7RfCynUzJhBEZb-' style='float: right; max-height: 90px; margin: 0 10px; width: auto'/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Toast>,                     
                <Toast type="warning" closeable={false} text="I'll vanish in %seconds% seconds" icon={<Icon type="hourglass-2" />} timeout={50000} />,
                <Toast text="Try to close me" type="inactive" icon={<Icon type="bell-slash" />}
                         onClose={() => { alert('You can\'t escape me!'); return false; }} />,
        ]} />   
        <button onClick={e => setState({ paused: false })} >Start countdown</button>
        </div>
