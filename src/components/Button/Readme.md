Simple button

    <div>
        <Button onClick={() => alert('Hello')}>Button</Button> <Button
         type="href">AHREF</Button> <Button
         type="void">Void</Button> <Button
         type="submit">Submit!</Button>
    </div>

Buttons with icons

    <div>
        <Button icon={<Icon type="reglendo" text="I have icon" />} /> <Button icon={<Icon type="mergado" />} />
    </div>

Button colors

    <Div style={{" .muk-button": { marginRight: "5px"}}}>
    primary:<br/>
        <Button color="blue">Blue</Button>
        <Button color="grey">Grey</Button>
        <Button color="green">Green</Button>
        <Button color="red">Red</Button>
        <Button color="orange">Orange</Button>
        <Button color="yellow">Yellow</Button>
        <Button color="decoration">Decoration</Button>
        <Button color="nocolor">Nocolor</Button>
        <br/>
        <br/>
    secondary:<br/>
        <Button color="blue" secondary={true}>Blue</Button>
        <Button color="grey" secondary={true}>Grey</Button>
        <Button color="green" secondary={true}>Green</Button>
        <Button color="red" secondary={true}>Red</Button>
        <Button color="orange" secondary={true}>Orange</Button>
        <Button color="yellow" secondary={true}>Yellow</Button>
        <Button color="decoration" secondary={true}>Decoration</Button>
        <Button color="nocolor" secondary={true}>Nocolor</Button>
    <br/>
    <br/>
    simple:<br/>
        <Button color="blue" simple={true}>Blue</Button>
        <Button color="grey" simple={true}>Grey</Button>
        <Button color="green" simple={true}>Green</Button>
        <Button color="red" simple={true}>Red</Button>
        <Button color="orange" simple={true}>Orange</Button>
        <Button color="yellow" simple={true}>Yellow</Button>
        <Button color="decoration" simple={true}>Decoration</Button>
    </Div>

Button state

    <div>
    <Button disabled={true}>Disabled</Button> <Button type="submit" error="Error message">Button with error</Button>
    </div>

Button sizes

    <div>
        <Button>Default</Button> <Button size="small">Small</Button> <Button size="smaller">Smaller</Button> <Button size="tiny">Tiny</Button>

    </div>

Icon button

    <div>
        <h3>Big icons</h3>
        <Button icon={<Icon type="reglendo" size="25" />} />
        <Button icon={<Icon type="search" size="25" />} color="nocolor" />
        <Button icon={<Icon type="pencil" size="25" />} color="nocolor" />
        <Button icon={<Icon type="play" size="25"/>} color="nocolor" />
        <Button icon={<Icon type="pause" size="25"/>} color="nocolor" />
        <Button icon={<Icon type="clipboard" size="25" />} color="nocolor" />
        <Button icon={<Icon type="trash" size="25" />} color="nocolor" />

        <h4>Small icons</h4>
        <Button icon={<Icon type="reglendo" size="20" />} size="small" />
        <Button icon={<Icon type="search" size="20" />} color="nocolor" size="small" />
        <Button icon={<Icon type="pencil" size="20" />} color="nocolor" size="small" />
        <Button icon={<Icon type="play" size="20" />} color="nocolor" size="small" />
        <Button icon={<Icon type="pause" size="20" />} color="nocolor" size="small" />
        <Button icon={<Icon type="clipboard" size="20" />} color="nocolor" size="small" />
        <Button icon={<Icon type="trash" size="20" />} color="nocolor" size="small" />

        <h5>Tiny icons</h5>
        <Button icon={<Icon type="reglendo"/>} size="tiny" />
        <Button icon={<Icon type="search" />} color="nocolor" size="tiny" />
        <Button icon={<Icon type="pencil" />} color="nocolor" size="tiny" />
        <Button icon={<Icon type="play" />} color="nocolor" size="tiny" />
        <Button icon={<Icon type="pause" />} color="nocolor" size="tiny" />
        <Button icon={<Icon type="clipboard" />} color="nocolor" size="tiny" />
        <Button icon={<Icon type="trash" />} color="nocolor" size="tiny" />
    </div>