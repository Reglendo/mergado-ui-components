Spinner

    initialState = { loaded: false };
    <div style={{display: 'table', textAlign: 'center', width: '100%', tableLayout: 'fixed'}}>
        <div style={{display: 'table-cell' }}>
            <Spinner loaded={state.loaded} size="50"><Icon type="reglendo" text="I'm Icon!" /></Spinner>
        </div>
        <div style={{display: 'table-cell' }}>
            <Spinner loaded={state.loaded} type="dashed" color="green"><LittleStatus type="success" text="I'm LittleStatus!" /></Spinner>
        </div>
        <div style={{display: 'table-cell'}}>
            <Spinner loaded={state.loaded} type="dotted" color="blue">I'm text!</Spinner>
        </div>
        <div style={{display: 'table-cell'}}>
            <Spinner loaded={state.loaded} type="mergado"><Icon type="mergado" text="I'm Mergado" /></Spinner>
        </div>
        {! state.loaded ? (
            <button onClick={(e) => { e.preventDefault(); setState( { loaded: true }); }}>Stop loading</button>
         ) : (
            <button onClick={(e) => { return false; }}>Loaded</button>
         ) }
    </div>