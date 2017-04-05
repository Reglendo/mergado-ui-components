Some of our best toasts

    <Toasts toasts={[
        <Toast text="Hello toast!" icon={<Icon type="mergado" />} />,
        <Toast text="Hello success!" type="success" icon={<Icon type="check" />} />,
        <Toast text="Hello error with maxi icon!" type="error" icon={<Icon type="exclamation-circle" size={50} />}/>,
        <Toast text="Hello inactive, try to close me." type="inactive" onClose={() => { alert('You can\'t escape me!'); return false; } }  icon={<Icon type="hourglass-2" />} />
    ]
    } />
