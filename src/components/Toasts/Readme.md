Some of our best toasts

    initialState = { paused: true };
    <div>
        <Toasts paused={state.paused} toasts={[
            <Toast text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                icon={<Icon type="mergado" />} />,
            <Toast text="Hello success!" type="success" icon={<Icon type="check" />} />,
            <Toast text="Hello warning, i'm not closable!" type="warning" closeable={false} icon={<Icon type="exclamation-triangle" />}/>,
            <Toast text="Hello error!" type="error" icon={<Icon type="exclamation-circle" />}/>,
            <Toast text="Hello inactive, try to close me." type="inactive" icon={<Icon type="bell-slash" />}
                     onClose={() => { alert('You can\'t escape me!'); return false; }} />,
            <Toast text="I'll vanish in %seconds% seconds" icon={<Icon type="hourglass-2" />} timeout={5000} />
        ]
        } />
        <button onClick={e => setState({ paused: false })} >Start countdown</button>
    </div>
