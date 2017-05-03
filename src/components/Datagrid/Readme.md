Example
    
    <Datagrid 
    sortable={true}
    sortableProps={{onChange: () => console.log('hello world'), options: { handle: '.muk-icon--arrows-v' } }}
        header={<DataHeader cells={[
                    <DataCell key={1} type='header' content='Priorita' />, 
                    <DataCell key={2} type='header' content=''/>,
                    <DataCell key={3} type='header' content='Názov šablóny'/>,
                    <DataCell key={4} type='header' content='Formát'/>,
                    <DataCell key={5} type='header' content='Dátum'/>,
                    <DataCell key={6} type='header' content='Akcia'/>
            ]} />}
        rows={[
            <DataRow key={1} cells={[
                                <DataCell key={1} content={<Icon type="arrows-v" />}  style={{textAlign: 'center'}} />,
                                <DataCell key={2} content='1' style={{textAlign: 'center'}} />,
                                <DataCell key={3} content='[Ukázková šablona] Akce'/>,
                                <DataCell key={4} content='1200x628' />,
                                <DataCell key={5} content='8. 3. 2017' />,
                                <DataCell key={6} content={<div><Icon type="search" /> <Icon type="edit" /> <Icon type="pause" /> <Icon type="copy" /> <Icon type="trash" /></div>} />,
                                ]} />,
            <DataRow key={2} inactive={true} cells={[
                                <DataCell key={1} content={<Icon type="arrows-v" />}  style={{textAlign: 'center'}} />,
                                <DataCell key={2} content='2' style={{textAlign: 'center'}} />,
                                <DataCell key={3} content='[Ukázková šablona] Skladem'/>,
                                <DataCell key={4} content='600x600' />,
                                <DataCell key={5} content='8. 3. 2017' />,
                                <DataCell key={6} content={<div><Icon type="search" /> <Icon type="edit" /> <Icon type="pause" /> <Icon type="copy" /> <Icon type="trash" /></div>} />,
                                ]} />,
            <DataRow key={3} cells={[
                                <DataCell key={1} content={<Icon type="arrows-v" />}  style={{textAlign: 'center'}} />,
                                <DataCell key={2} content='3' style={{textAlign: 'center'}} />,
                                <DataCell key={3} content='[Ukázková šablona] Doprava zdarma'/>,
                                <DataCell key={4} content='1200x628' />,
                                <DataCell key={5} content='18. 3. 2017' />,
                                <DataCell key={6} content={<div><Icon type="search" /> <Icon type="edit" /> <Icon type="pause" /> <Icon type="copy" /> <Icon type="trash" /></div>} />,
                                ]} />
        ]}
    />