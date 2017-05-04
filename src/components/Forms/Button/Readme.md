Simple button

    var Field = require('redux-form').Field;
    <div>
        <Button labels={{main: 'I\'m button!'}} onClick={() => alert('Hello') } />
        <Button labels={{main: 'I\'m link!'}} type="link" />
        <Field component={Button} name="first-name" props={{ type: 'submit', labels: { main: "I\'m submit!" }}} />
        <Button labels={{main: 'I\'m void!'}} type="void" />
    </div>
    
Buttons with icons

    var Field = require('redux-form').Field;
    <div>
        <Button labels={{main: 'I have icon'}} icon={<Icon type="reglendo" />} />
        <Button type="link" labels={{main: 'Me too'}} icon={<Icon type="mergado" />} />
        <Field component={Button} name="first-name" props={{ type: 'submit', labels: { main: "I\'m submit!" }}} />
    </div>

Button colors

    <div>
        <Button labels={{main: 'I\'m blue'}} color="blue" />
        <Button labels={{main: 'I\'m grey'}} color="grey" />
        <Button labels={{main: 'I\'m green'}} color="green" />
        <Button labels={{main: 'I\'m red'}} color="red" />
        <Button labels={{main: 'I have no background'}} color="nocolor" />
    </div>

Button state

    <div>
    <Button labels={{main: 'I\'m disabled'}} state="disabled"  style={{verticalAlign: 'bottom'}} />   

    <Button labels={{main: 'Button', invalid: 'I\'m invalid'}} meta={{invalid: true, touched: true}} />
    </div>
    
Button sizes

    <div>
        <Button labels={{main: 'I\'m big'}} />
        <Button labels={{main: 'I\'m small'}} size="small" />
        <Button labels={{main: 'I\'m tiny'}} size="tiny" />
        
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
    