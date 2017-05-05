Some of our best toasts

    initialState = { paused: true };
    <div>
        <Toasts paused={state.paused} toasts={[
            <Toast text="Hello toasts!" icon={<Icon type="mergado" />} />,
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