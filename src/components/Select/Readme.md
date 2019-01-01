Example

    <Select name="form.select" value={"second"} options={[{ name: 'First', value: 'first'}, { name: 'Second', value: 'second'}, { name: 'Third', value: 'third'} ]} />

Multi select

    <Select name="form.multiselecct" multiple={true} options={[{ name: 'First', value: 'first'}, { name: 'Second', value: 'second'}, { name: 'Third', value: 'third'} ]} />

Uncontrolled

    <Select value={"first"} onChange={e => alert(e)} options={[{ name: 'First', value: 'first'}, { name: 'Second', value: 'second'}, { name: 'Third', value: 'third'} ]} />

Uncontrolled multi select

    <Select value={"first|second"} onChange={e => alert(e)} multiple={true} options={[{ name: 'First', value: 'first'}, { name: 'Second', value: 'second'}, { name: 'Third', value: 'third'} ]} />

    <Select value={['first','third']} onChange={e => alert(e)} multiple={true} options={[{ name: 'First', value: 'first'}, { name: 'Second', value: 'second'}, { name: 'Third', value: 'third'} ]} />
