Example

    <Select name="form.select2" value={"second"} options={[{ name: 'First', value: 'first'}, { name: 'Second', value: 'second'}, { name: 'Third', value: 'third'} ]} />

    <Select label="Select:" options={[{ name: 'First', value: 'first'}, { name: 'Second', value: 'second'}, { name: 'Third', value: 'third'} ]} />

Multiple

    <Select onChange={e => console.log(e)} multiple={true} options={[{ name: 'First', value: 'first'}, { name: 'Second', value: 'second'}, { name: 'Third', value: 'third'} ]} />