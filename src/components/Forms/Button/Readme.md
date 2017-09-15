Simple button

    var Field = require('redux-form').Field;
    <div>
        <Button labels={{main: 'I\'m button!'}} onClick={() => alert('Hello')} /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m link!'}} type="link" /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m <a href>!'}} type="href" /><code>&nbsp;</code>
        <Field component={Button} name="first-name" props={{ type: 'submit', labels: { main: "I\'m submit!" }}} /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m void!'}} type="void" /><code>&nbsp;</code>
    </div>

Buttons with icons

    var Field = require('redux-form').Field;
    <div>
        <Button labels={{main: 'I have icon'}} icon={<Icon type="reglendo" />} /><code>&nbsp;</code>
        <Button type="link" labels={{main: 'Me too'}} icon={<Icon type="mergado" />} /><code>&nbsp;</code>
        <Field component={Button} name="first-name" props={{ type: 'submit', labels: { main: "I\'m submit!" }}} />
    </div>

Button colors

    <div>
    primary:<br/>
        <Button labels={{main: 'I\'m blue'}} color="blue" /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m grey'}} color="grey" /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m green'}} color="green" /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m red'}} color="red" /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m orange'}} color="orange" /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m yellow'}} color="yellow" /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m decoration'}} color="decoration" /><code>&nbsp;</code>

        <Button labels={{main: 'I have no background'}} color="nocolor" /><br/>
    secondary:<br/>
        <Button labels={{main: 'I\'m blue'}} color="blue" secondary={true} /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m grey'}} color="grey" secondary={true} /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m green'}} color="green" secondary={true} /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m red'}} color="red" secondary={true} /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m orange'}} color="orange" secondary={true} /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m yellow'}} color="yellow" secondary={true} /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m decoration'}} color="decoration" secondary={true} /><code>&nbsp;</code>

        <Button labels={{main: 'I have no background'}} color="nocolor" secondary={true} />
    </div>

Button state

    <div>
    <Button labels={{main: 'I\'m disabled'}} disabled={true}  style={{verticalAlign: 'bottom'}} /><code>&nbsp;</code>

    <Button type="submit" hello="world" labels={{main: 'Invalid', invalid: 'I\'m invalid'}} meta={{invalid: true, touched: true}} />
    </div>

Button sizes

    <div>
        <Button labels={{main: 'I\'m big'}} /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m small'}} size="small" /><code>&nbsp;</code>
        <Button labels={{main: 'I\'m tiny'}} size="tiny" />

    </div>

Icon button

    <div>
        <h3>Big icons</h3>
        <Button icon={<Icon type="reglendo" size="25" />} /><code>&nbsp;</code>
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
