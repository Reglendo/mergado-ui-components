Example

    <div>
        <Checkbox labels={{main: 'Check me!' }} input={{name: 'checkbox1', onChange: () => alert('Hello') }} id="customid" />
        <br/>
        <Checkbox labels={{main: 'Check me!', invalid: 'I\'m invalid' }} input={{name: 'checkbox1' }} meta={{invalid: true, touched: true}} id="customid" />
    </div>