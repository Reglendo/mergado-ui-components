
    <Section>
        <PopupHint style={{border: "5px solid black !important"}} icon={<Icon type="reglendo" text="Click me" />}>Hello Reglendo!</PopupHint><br/>
        <PopupHint icon={<Icon type="mergado" text="No, click me" />}>Hello Mergado!</PopupHint><br/>
        What is this? <PopupHint hint={true} hover={true}>I'm hint on hover.</PopupHint><br/>
        What is this? <PopupHint help={true} hover={false}>I'm help on click.</PopupHint><br/>
        <br/>
        What is this? <PopupHint hint={true} hover={true}>I'm hint on hover.</PopupHint><br/>
        What is this? <PopupHint hint={true} hover={true}>I'm hint on hover.</PopupHint><br/>
        What is this? <PopupHint hint={true} hover={true}>I'm hint on hover.</PopupHint><br/>
        What is this? <PopupHint help={true} hover={false}>I'm help on click.</PopupHint><br/>
        What is this? <PopupHint hint={true} >I'm hint on hover.</PopupHint><br/>
        What is this? <PopupHint hint={true} >I'm hint on hover.</PopupHint><br/>
        What is this? <PopupHint help={true} hover={false}>I'm help on click.</PopupHint><br/>
        What is this? <PopupHint hint={true}>I'm hint on hover.</PopupHint><br/>
        What is this? <PopupHint help={true} hover={false}>I'm help on click.</PopupHint><br/>
        
        <br/>

        <div style={{float: "right", paddingRight: "5px", opacity: 1}}>
            <span>Hello world</span>
            <PopupHint hover={true}
                       style={{verticalAlign: "bottom", marginLeft: "5px", marginRight: "-20px"}}
                       icon={<Icon type="exclamation-circle" color={"orange"}/>}>
                {"warning_max_cpc_reached"}
            </PopupHint>
        </div>
        <div style={{float: "right", paddingRight: "5px", opacity: 1}}>
            <span>Hello world</span>
            <PopupHint 
                       style={{verticalAlign: "bottom", marginLeft: "5px", marginRight: "-20px"}}
                       icon={<Icon type="exclamation-circle" color={"orange"}/>}>
                {"warning_max_cpc_reached"}
            </PopupHint>
        </div>
    </Section>
