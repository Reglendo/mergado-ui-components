Navigation menu
    
    initialState = { activePage: 1 };
    <Nav logo={<img src="https://www.bidding-fox.cz/sites/all/themes/fox/logo.svg" alt="Hlavní strana" class="img-responsive" />}>
                <NavLink active={(state.activePage == 1) ? true : false } key={1} 
                         link={(<a onMouseDown={(o) => setState({ activePage: 1 })}>Homepage</a>)} />
                <NavLink active={(state.activePage == 2) ? true : false } key={2} 
                         link={(<a onMouseDown={(o) => setState({ activePage: 2 })}>About</a>)} />
                <NavLink active={(state.activePage == 3) ? true : false } key={3} 
                         link={(<a onMouseDown={(o) => setState({ activePage: 3 })} >Contact</a>)} /> 
    </Nav>
