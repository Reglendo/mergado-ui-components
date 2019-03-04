Datetime picker

    <div style={{float: "right"}}>
    <DatePicker datetime={true} name="form.datetimepicker" label="Pick a datetime:" placeholder="DD. MM. YYYY"/>
    </div>

Date picker

    <DatePicker name="form.datepicker" label="Pick a date:" />

    <DatePicker invalid={true} name="form.datepicker" label="Pick a date:" />

    <DatePicker error="Error!" name="form.datepicker" label="Pick a date:" />


Uncontrolled

    <DatePicker datetime={true} onChange={(value) => alert(value)} value={"2018-09-01 10:00:00"} label="Pick a datetime:" placeholder="DD. MM. YYYY"/>
