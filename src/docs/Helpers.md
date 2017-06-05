**.muk-helper-loading**

    <DataTable setRef="datagrid" addClass="muk-helper-loading">
        <DataHeader>
            <DataCell key={2} type='header'/>
            <DataCell key={3} type='header'>Názov šablóny</DataCell>
            <DataCell key={4} type='header'>Formát</DataCell>
            <DataCell key={5} type='header'>Dátum</DataCell>
            <DataCell key={6} type='header'>Akcia</DataCell>
        </DataHeader >
        <DataBody>
            <DataRow dataId={1} key={1}>
                <DataCell key={2} style={{textAlign: 'center'}}>1</DataCell>
                <DataCell key={3}>[Ukázková šablona] Akce</DataCell>
                <DataCell key={4}>1200x628</DataCell>
                <DataCell key={5}>8. 3. 2017</DataCell>
                <DataCell key={6}>
                    <div><Icon type="search" /> <Icon type="edit" /> <Icon type="pause" /> <Icon type="copy" /> <Icon type="trash" /></div>
                </DataCell>
            </DataRow>
            <DataRow dataId={2}  key={2} inactive={true}>
                <DataCell key={2} style={{textAlign: 'center'}}>2</DataCell>
                <DataCell key={3}>[Ukázková šablona] Skladem</DataCell>
                <DataCell key={4}>600x600</DataCell>
                <DataCell key={5}>8. 3. 2017</DataCell>
                <DataCell key={6}>
                    <div><Icon type="search" /> <Icon type="edit" /> <Icon type="pause" /> <Icon type="copy" /> <Icon type="trash" /></div>
                </DataCell>
            </DataRow>
        </DataBody>
    </DataTable>

**.muk-helper-loading--in**

    <TextInput input={{className: 'muk-helper-loading--in'}} />


**.muk-helper-clearfix**

    <div>
        <em>I have clearfix:</em>
        <div className="muk-helper-clearfix" style={{border: '1px dashed black' }}>
            <div style={{ width: '30%', float: 'left', padding: '10px' }}>
                <Placeholder width={100} height={30}>Float left</Placeholder>
            </div>
            <div style={{ width: '30%', float: 'left', padding: '10px' }}>
                <Placeholder width={100} height={30}>Float left</Placeholder>
            </div>
            <div style={{ width: '30%', float: 'right', padding: '10px' }} >
              <Placeholder width={100} height={30}>Float right</Placeholder>
            </div>
        </div>
    </div>
