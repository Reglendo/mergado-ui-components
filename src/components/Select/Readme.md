Example

    <Select name="form.select2" value={"second"} options={[{ name: 'First', value: 'first'}, { name: 'Second', value: 'second'}, { name: 'Third', value: 'third'} ]} />

    <Select onChange={e => console.log(e)} options={[{ name: 'First', value: 'first'}, { name: 'Second', value: 'second'}, { name: 'Third', value: 'third'} ]} />

Multiple

    <Select name="form.selectmulti" multiple={true} options={[{ name: 'First', value: 'first'}, { name: 'Second', value: 'second'}, { name: 'Third', value: 'third'} ]} />