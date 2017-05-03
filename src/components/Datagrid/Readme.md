Example
    
    <Datagrid 
    sortable={true}
    sortableProps={{onChange: () => console.log('hello world'), options: { handle: '.muk-icon--arrows-v' } }}
        header={<DataHeader cells={[
                    <DataCell key={1} type='header'>Priorita</DataCell>, 
                    <DataCell key={2} type='header'/>,
                    <DataCell key={3} type='header'>Názov šablóny</DataCell>,
                    <DataCell key={4} type='header'>Formát</DataCell>,
                    <DataCell key={5} type='header'>Dátum</DataCell>,
                    <DataCell key={6} type='header'>Akcia</DataCell>
            ]} />}
        rows={[
            <DataRow dataId={1} key={1} cells={[
                                <DataCell key={1} style={{textAlign: 'center'}}><Icon type="arrows-v" /></DataCell>,
                                <DataCell key={2} style={{textAlign: 'center'}}>1</DataCell>,
                                <DataCell key={3}>[Ukázková šablona] Akce</DataCell>,
                                <DataCell key={4}>1200x628</DataCell>,
                                <DataCell key={5}>8. 3. 2017</DataCell>,
                                <DataCell key={6}><div><Icon type="search" /> <Icon type="edit" /> <Icon type="pause" /> <Icon type="copy" /> <Icon type="trash" /></div></DataCell>,
                                ]} />,
            <DataRow dataId={2}  key={2} inactive={true} cells={[
                                <DataCell key={1} style={{textAlign: 'center'}}><Icon type="arrows-v" /></DataCell>,
                                <DataCell key={2} style={{textAlign: 'center'}}>2</DataCell>,
                                <DataCell key={3}>[Ukázková šablona] Skladem</DataCell>,
                                <DataCell key={4}>600x600</DataCell>,
                                <DataCell key={5}>8. 3. 2017</DataCell>,
                                <DataCell key={6}><div><Icon type="search" /> <Icon type="edit" /> <Icon type="pause" /> <Icon type="copy" /> <Icon type="trash" /></div></DataCell>,
                                ]} />,
            <DataRow dataId={3}  key={3} cells={[
                                <DataCell key={1} style={{textAlign: 'center'}}><Icon type="arrows-v" /></DataCell>,
                                <DataCell key={2} style={{textAlign: 'center'}}>3</DataCell>,
                                <DataCell key={3}>[Ukázková šablona] Doprava zdarma</DataCell>,
                                <DataCell key={4}>1200x628</DataCell>,
                                <DataCell key={5}>18. 3. 2017</DataCell>,
                                <DataCell key={6}><div><Icon type="search" /> <Icon type="edit" /> <Icon type="pause" /> <Icon type="copy" /> <Icon type="trash" /></div></DataCell>,
                                ]} />
        ]}
    />