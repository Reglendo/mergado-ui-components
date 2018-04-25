Application

    initialState = { activePage: 1 };
    var IconPlay = require('@reglendo/mergado-ui-icons/lib/icons/IconPlay').default;
    var IconPause = require('@reglendo/mergado-ui-icons/lib/icons/IconPause').default;
    var IconTrash = require('@reglendo/mergado-ui-icons/lib/icons/IconTrashO').default;
    var Field = require('redux-form').Field;
    var FieldLabel = require('../../Forms/Field').FieldLabel;
    var Div = require('../../Layout/Div').Div;

    <div style={{overflow: 'auto'}}>
    <div style={{ minWidth: '500px'}}>
        <div id="container">
            <Section>
                <Nav logo={<img src="https://www.bidding-fox.cz/sites/all/themes/fox/logo.svg" alt="Hlavní strana" class="img-responsive" />}>
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
                </Nav>
            </Section>
            <Section header="Analytika" prefix="Projekt" suffix="Heureka.cz">
            <Grid rows="100px 100px" gap="5px">
                <GridCell col="1" row="1 / 3">
                   <Placeholder style={{paddingBottom: 0, height: "100%"}}/>
                </GridCell>

               <GridCell col="2" row="1">
                   <Placeholder style={{paddingBottom: 0, height: "100%"}}/>
               </GridCell>
               <GridCell col="3" row="1">
                   <Placeholder style={{paddingBottom: 0, height: "100%"}}/>
               </GridCell>
               <GridCell col="4" row="1">
                   <Placeholder style={{paddingBottom: 0, height: "100%"}}/>
               </GridCell>
               <GridCell col="5" row="1">
                   <Placeholder style={{paddingBottom: 0, height: "100%"}}/>
               </GridCell>
               
               <GridCell col="2" row="2">
                   <Placeholder style={{paddingBottom: 0, height: "100%"}}/>
               </GridCell>
               <GridCell col="3" row="2">
                   <Placeholder style={{paddingBottom: 0, height: "100%"}}/>
               </GridCell>
               <GridCell col="4" row="2">
                   <Placeholder style={{paddingBottom: 0, height: "100%"}}/>
               </GridCell>
               <GridCell col="5" row="2">
                   <Placeholder style={{paddingBottom: 0, height: "100%"}}/>
               </GridCell>               

            </Grid>
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

            <Section>
                <h2>Ukázkový formulář</h2>
                <TextInput name="searching" labels={{main: 'I\'m looking for:', placeholder: 'Describe something'}} type="search" />
                <Div width='50%' display='inline-block' verticalAlign='middle'>
                    <h3>Identification</h3>
                    <TextInput name="firstname" labels={{ main: 
                                                                                <span>
                                                                                    First name*:&nbsp;
                                                                                    <PopupHint hint={true}>First name hint!</PopupHint>
                                                                                </span>, invalid: 'This field is required' }} meta={{invalid: state.invalid, dirty: true}} />
                    <TextInput name="lastname" labels={{main:  <span>
                                                                                    Last name:&nbsp;
                                                                                    <PopupHint icon={<Icon type="info-circle" />} >Last!</PopupHint>
                                                                                </span> }} />
                </Div>
                <div style={{ width: '50%', display: 'inline-block', verticalAlign: 'middle' }}>
                    <h3>Contact <PopupHint hover={true} hint={true}>Contact!</PopupHint></h3>
                    <TextInput name="tel" labels={{main: 'Your phone number:', placeholder: 'e.g. 777 123 456' }} type="tel" />
                    <TextInput name="email" labels={{main: 'Email address*:', invalid: 'This field is required', placeholder: 'e.g. email@email.cz' }} meta={{invalid: state.invalid, dirty: true}} type="email" />
                </div>
                <div style={{ width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
                    <Radio name="favcolor"
                            items={[
                                {value: "black", label: "black"},
                                {value: "blue", label: "blue"},
                                {value: "orange", label: "orange"},
                                {value: "pink", label: "pink"}
                            ]}
                            label="Your favourite color:" />
                </div>
                <div style={{width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
                        <FieldLabel>Your favourite superpower</FieldLabel>
                        <Checkbox name="superpower1" labels={{main: "invisibility"}} />
                        <Checkbox name="superpower2" labels={{main: "immortality"}} />
                        <Checkbox name="superpower3" labels={{main: "stupidity"}} />
                        <Checkbox name="superpower4" labels={{main: "other-ity"}} />
                </div>

                <h3>Other information</h3>
                <div style={{width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
                    <ColorPicker name="colorpicker"  labels={{main: 'What is your favorite color:'}} color={{ r:0, g:140, b:0, a:1 }} />
                </div>
                <div style={{width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
                    <Textarea name="textarea" labels={{main: 'Leave us message:'}} />
                </div>

                <div style={{textAlign: "center"}}>
                    <Button name="submit" props={{icon: <Icon type="check" />}} type="button" labels={{main: 'Submit' }} onClick={ () => { setState( { invalid: true }) }} />
                    <code>&nbsp;</code>
                    <Button name="reset" props={{icon: <Icon type="close" />}} type="button" color="gray" labels={{main: 'Reset' }} onClick={ () => { setState( { invalid: false }) }} />
                </div>
            </Section>

        </div>
    </div>
    </div>