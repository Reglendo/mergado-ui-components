Navigation menu
    
    initialState = { activePage: 1 };
    <WizardNav links={[
                <WizardStep current={(state.activePage == 1) ? true : false } key={1} 
                         link={(<a href='#home' onMouseDown={(o) => setState({ activePage: 1 })}>Homepage</a>)} />,
                <WizardStep current={(state.activePage == 2) ? true : false } key={2} 
                         link={(<a href='#about' onMouseDown={(o) => setState({ activePage: 2 })}>About</a>)} />,
                <WizardStep current={(state.activePage == 3) ? true : false } key={3} 
                         link={(<a href='#contact' onMouseDown={(o) => setState({ activePage: 3 })} >Contact</a>)} /> 
            ]} />
