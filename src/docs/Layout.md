Widget

    <div style={{ width: '279px', height: '73px', border: '1px solid #dbcba3', borderTop: '30px solid #948254',
                    boxSizing: 'content-box',
                    backgroundColor: 'hsla(0, 0%, 100%, .5)',
                    fontFamily: 'Arial, Helvetica, Verdana, Sans-serif'}}>
        <div className="widget">
            <div className="widget-row">
                <div className="widget-cell widget-status"><LittleStatus text="First item" type="success" /></div>
                <div className="widget-cell widget-value">2</div>
            </div>
            <div className="widget-row">
                <div className="widget-cell widget-status"><LittleStatus text="Second item" type="inactive" /></div>
                <div className="widget-cell widget-value">8</div>
            </div>
            <div className="widget-row">
                <div className="widget-cell widget-status"><LittleStatus text="Third item" type="warning" /></div>
                <div className="widget-cell widget-value">0</div>
            </div>
        </div>
    </div>

Application

    initialState = { activePage: 1 };
    var IconPlay = require('@reglendo/mergado-ui-icons/lib/icons/IconPlay').default;
    var IconPause = require('@reglendo/mergado-ui-icons/lib/icons/IconPause').default;
    var IconTrash = require('@reglendo/mergado-ui-icons/lib/icons/IconTrashO').default;
                
    <div style={{overflow: 'auto', background: "#f5ecd5", margin: "-10px"}}>
    <div className="document-style" style={{ maxWidth: '1146px', minWidth: '500px', height: '1000px', padding: '10px'}}>
        <section id="container">
            <Section>
                <TopNav logo={<img src="https://www.bidding-fox.cz/sites/all/themes/fox/logo.svg" alt="Hlavní strana" class="img-responsive" />}>
                            <NavLink active={(state.activePage == 1) ? true : false } key={1} 
                                     link={(<a onMouseDown={(o) => setState({ activePage: 1 })}>Hlavní strana</a>)} />
                            <NavLink active={(state.activePage == 2) ? true : false } key={2} 
                                     link={(<a onMouseDown={(o) => setState({ activePage: 2 })}>Diagnostika</a>)} />
                            <NavLink active={(state.activePage == 3) ? true : false } key={3} 
                                     link={(<a onMouseDown={(o) => setState({ activePage: 3 })} >Produkty</a>)} /> 
                            <NavLink active={(state.activePage == 4) ? true : false } key={4} 
                                     link={(<a onMouseDown={(o) => setState({ activePage: 4 })} >Nápověda</a>)} /> 
                            <NavLink active={(state.activePage == 5) ? true : false } key={5} 
                                     link={(<a onMouseDown={(o) => setState({ activePage: 5 })} >Ke stažení</a>)} /> 
                            <span style="float: right">Heureka CZ (test)</span>
                </TopNav>
            </Section>
            <Section header="Analytika">
            <div className="muk-grid--table">
            <div>
                <div className="muk-3-12" style={{padding: "14px"}}>
                    <Placeholder width={1} height={1} />
                </div>
                <div className="muk-9-12">
                    <div className="muk-grid" >
                        <div className="muk-3-12" style={{padding: "6px"}}>
                            <Placeholder width={10} height={6} className="muk-3-12" />
                        </div>
                        <div className="muk-3-12" style={{padding: "6px"}}>
                            <Placeholder width={10} height={6}/>
                        </div>
                        <div className="muk-3-12" style={{padding: "6px"}}>
                            <Placeholder width={10} height={6} />
                        </div>
                        <div className="muk-3-12" style={{padding: "6px"}}>
                            <Placeholder width={10} height={6} />
                        </div>
                        <div className="muk-3-12" style={{padding: "6px"}}>
                            <Placeholder width={10} height={6} />
                        </div>
                        <div className="muk-3-12" style={{padding: "6px"}}>
                            <Placeholder width={10} height={6} />
                        </div>
                        <div className="muk-3-12" style={{padding: "6px"}}>
                            <Placeholder width={10} height={6} />
                        </div>
                        <div className="muk-3-12" style={{padding: "6px"}}>
                            <Placeholder width={10} height={6} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </Section>
            <Section header="Strategie">

                <DataTable
                            labels={{actionsBar: "Actions:"}}
                            bulkActions={[
                                {icon: <IconPlay />, type: "play", action: () => { console.log('hello play')}},
                                {icon: <IconPause />, type: "pause", action: () => { console.log('hello pause')}},
                                {icon: <IconTrash />, type: "trash", action: () => { console.log('hello world')}},
                            ]}
                            filters={[
                                { type: "text", label: "Name:", action: (evt) => {  console.log(evt.currentTarget.value)  }},
                                { type: "checkbox", label: "Active only", action: (evt) => {  console.log(evt.currentTarget.value)  }},
                            ]}
                            buttons={[
                                <Button>Vytvořit novou</Button>
                            ]}
                >
                    <DataHeader key="dataheader">
                        <DataCell key={1} style={{width: "1%"}} type='header'></DataCell>
                        <DataCell key={2} type='header'>Priorita</DataCell>
                        <DataCell key={3} type='header'>Názov šablóny</DataCell>
                        <DataCell key={4} type='header'>Formát</DataCell>
                        <DataCell key={5} type='header'>Dátum</DataCell>
                        <DataCell key={6} type='header'>Akcia</DataCell>
                    </DataHeader>
                    <DataBody  key="databody"
                     sortable={true}
                     sortableProps={{ options: { handle: '.muk-icon--arrows-v' } }}>
                        <DataRow dataId={1} key={1}>
                            <DataCell key={1} style={{textAlign: 'center'}}><Icon style={{cursor: 'move'}} type="arrows-v" /></DataCell>
                            <DataCell key={2} style={{textAlign: 'center'}}>1</DataCell>
                            <DataCell key={3}>[Ukázková šablona] Akce</DataCell>
                            <DataCell key={4}>1200x628</DataCell>
                            <DataCell key={5}>8. 3. 2017</DataCell>
                            <DataCell key={6}>
                                <Button color="nocolor" size="tiny" icon={<Icon type="search" />} />
                                <Button color="nocolor" size="tiny" icon={<Icon type="edit" />} />
                                <Button color="nocolor" size="tiny" icon={<Icon type="pause" />} />
                                <Button color="nocolor" size="tiny" icon={<Icon type="copy" />} />
                                <Button color="nocolor" size="tiny" icon={<Icon type="trash" />} />
                            </DataCell>
                        </DataRow>
                        <DataRow dataId={2} key={2} inactive={true}>
                            <DataCell key={1} style={{textAlign: 'center'}}><Icon style={{cursor: 'move'}} type="arrows-v" /></DataCell>
                            <DataCell key={2} style={{textAlign: 'center'}}>2</DataCell>
                            <DataCell key={3}>[Ukázková šablona] Skladem</DataCell>
                            <DataCell key={4}>600x600</DataCell>
                            <DataCell key={5}>8. 3. 2017</DataCell>
                            <DataCell key={6}>
                                <Button color="nocolor" size="tiny" icon={<Icon type="search" />} />
                                <Button color="nocolor" size="tiny" icon={<Icon type="edit" />} />
                                <Button color="nocolor" size="tiny" icon={<Icon type="pause" />} />
                                <Button color="nocolor" size="tiny" icon={<Icon type="copy" />} />
                                <Button color="nocolor" size="tiny" icon={<Icon type="trash" />} />
                            </DataCell>
                        </DataRow>
                        <DataRow dataId={3} key={3}>
                            <DataCell key={1} style={{textAlign: 'center'}}><Icon style={{cursor: 'move'}} type="arrows-v" /></DataCell>
                            <DataCell key={2} style={{textAlign: 'center'}}>3</DataCell>
                            <DataCell key={3}>[Ukázková šablona] Doprava zdarma</DataCell>
                            <DataCell key={4}>1200x628</DataCell>
                            <DataCell key={5}>18. 3. 2017</DataCell>
                            <DataCell key={6} style={{width: "1%", whiteSpace: "nowrap"}}>
                                <Button color="nocolor" size="tiny" icon={<Icon type="search" />} />
                                <Button color="nocolor" size="tiny" icon={<Icon type="edit" />} />
                                <Button color="nocolor" size="tiny" icon={<Icon type="pause" />} />
                                <Button color="nocolor" size="tiny" icon={<Icon type="copy" />} />
                                <Button color="nocolor" size="tiny" icon={<Icon type="trash" />} />
                            </DataCell>
                        </DataRow>
                    </DataBody>
                </DataTable>
            </Section>

        </section>
    </div>
    </div>

Headers

    <div className="muk-grid">
        <div className="muk-6-12" style={{padding: '0px 10px'}}>
            <Header type="1">Header 1</Header>
            <Placeholder width="10" height="1">...content....</Placeholder>
            <Header type="2">Header 2</Header>
            <Placeholder width="10" height="1">...content....</Placeholder>
            <Header type="3">Header 3</Header>
            <Placeholder width="10" height="1">...content....</Placeholder>
            <Header type="4">Header 4</Header>
            <Placeholder width="10" height="1">...content....</Placeholder>
            <Header type="5">Header 5</Header>
            <Placeholder width="10" height="1">...content....</Placeholder>
        </div>

    </div>

**.muk-grid**

    <div className="muk-grid" style={{fontSize: '11px'}}>

        <Placeholder width={100} height={5}  addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-6`}>.muk-1-6 (.muk-2-12)</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-6`}>.muk-1-6 (.muk-2-12)</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-6`}>.muk-1-6 (.muk-2-12)</Placeholder>


        <Placeholder width={100} height={5}  addClass={`muk-2-3`}>.muk-2-3 (.muk-8-12)</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-3`}>.muk-1-3 (.muk-4-12)</Placeholder>


        <Placeholder width={100} height={5}  addClass={`muk-1-2`}>.muk-1-2 (.muk-6-12)</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-4`}>.muk-1-4</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-4`}>.muk-3-12</Placeholder>

        <Placeholder width={100} height={5}  addClass={`muk-1-1`}>.muk-1-1 (.muk-12-12)</Placeholder>

        <Placeholder width={100} height={5}  addClass={`muk-1-2`}>.muk-1-2</Placeholder>
        <Placeholder width={100} height={5}  addClass={`muk-1-4 muk-col-right`}>.muk-1-4.muk-col-right</Placeholder>


    </div>


**.muk-grid--table**

    <div className="muk-grid--table" style={{fontSize: '11px'}}>
        <div>
            <div className={`muk-1-2`}>
                <Placeholder width={100} height={5} >.muk-1-2</Placeholder>
            </div>
            <div className={`muk-1-4`}>
                <Placeholder width={100} height={20} >.muk-1-4</Placeholder>
            </div>
            <div className={`muk-1-4`}>
                <Placeholder width={100} height={30} >.muk-1-4</Placeholder>
            </div>
        </div>
        <div>
            <div className={`muk-1-2`}>
                <Placeholder width={100} height={15} >.muk-1-2</Placeholder>
            </div>
            <div className={`muk-1-4`}>
                <Placeholder width={100} height={20} >.muk-1-4</Placeholder>
            </div>
            <div className={`muk-1-4`}>
                <Placeholder width={100} height={10} >.muk-1-4</Placeholder>
            </div>
        </div>

    </div>
