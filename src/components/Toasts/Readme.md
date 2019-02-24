Toasts container, should be placed position: fixed, right: 5px


    initialState = { toasts: [] };
    <Section>
        <Button onClick={e => setState(s => { const toasts = [...s.toasts]; toasts.push(Math.round(Math.random() * 10) % 4); return ({ toasts, })})}>Add toast</Button>
        <div style={{position: "fixed", top: "5px", right: "5px", zIndex: 1000000, }}>
        <Toasts>
        {state.toasts.map(
            o => {
                if(o === 0) {
                    return ( <Toast text={`Toast ${o} `} type="material" icon={<Icon type="mergado" />} />)
                } else if(o === 1) {
                    return ( <Toast text={`Toast ${o} `} type="info" icon={<Icon type="mergado" />} />)
                } else if(o === 2) {
                    return ( <Toast text={`Toast ${o} `} type="error" icon={<Icon type="mergado" />} />)
                } else if(o === 3) {
                    return ( <Toast text={`Toast ${o} `} type="success" icon={<Icon type="mergado" />} />)
                }
            }
        )}
        </Toasts>
        </div>
    </Section>

