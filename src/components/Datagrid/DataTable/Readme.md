Example test

    var IconPlay = require('@reglendo/mergado-ui-icons/lib/icons/IconPlay').default;
    var IconPause = require('@reglendo/mergado-ui-icons/lib/icons/IconPause').default;
    var IconTrash = require('@reglendo/mergado-ui-icons/lib/icons/IconTrashO').default;
    
    <Section>
    <DataTable
                buttons={[ <span>Hello</span> ]}
                labels={{actionsBar: "Actions:"}}
                style={{ borderBottom: "5px solid black" }}
                bulkActions={[
                    {icon: <IconPlay />, type: "play", action: () => { console.log('hello play')}},
                    {icon: <IconPause />, type: "pause", action: () => { console.log('hello pause')}},
                    {icon: <IconTrash />, type: "trash", action: () => { console.log('hello world')}},
                ]}
                filters={[
                    { type: "text", label: "Name:", action: (evt) => {  console.log(evt.currentTarget.value)  }},
                    { type: "checkbox", label: "Active only", action: (evt) => {  console.log(evt.currentTarget.value)  }},
                ]}
    >
        <DataHeader key="dataheader">
            <DataCell key={1} type='header'>Priorita</DataCell>
            <DataCell key={2} type='header'/>
            <DataCell key={3} type='header'>Názov šablóny</DataCell>
            <DataCell key={4} type='header'>Formát</DataCell>
            <DataCell key={5} type='header'>Dátum</DataCell>
            <DataCell key={6} type='header'>Akcia</DataCell>
        </DataHeader>
        <DataBody  key="databody"
         sortable={true}
         sortableProps={{ options: { handle: '.muk-icon--arrows-v' } }}>
            <DataRow dataId={1} key={1}>
                <DataCell key={1} style={{textAlign: 'center'}}><Icon style={{cursor: 'move'}} type="arrows-v" /></DataCell>
                <DataCell key={2} style={{textAlign: 'center'}}>1</DataCell>
                <DataCell key={3}><a href="#"><Icon name="IconBadgePno" /> [Ukázková šablona] Akce</a></DataCell>
                <DataCell key={4}>1200x628</DataCell>
                <DataCell key={5}>8. 3. 2017</DataCell>
                <DataCell key={6}>
                    <Button color="nocolor" size="tiny" icon={<Icon type="search" />} />
                    <Button color="nocolor" size="tiny" icon={<Icon type="edit" />} />
                    <Button color="nocolor" size="tiny" icon={<Icon type="pause" />} />
                    <Button color="nocolor" size="tiny" icon={<Icon type="copy" />} />
                    <Button color="nocolor" size="tiny" icon={<Icon type="trash" />} />
                </DataCell>
            </DataRow>
            <DataRow dataId={2} key={2} inactive={true}>
                <DataCell key={1} style={{textAlign: 'center'}}><Icon style={{cursor: 'move'}} type="arrows-v" /></DataCell>
                <DataCell key={2} style={{textAlign: 'center'}}>2</DataCell>
                <DataCell key={3}><Icon name="IconBadgePno" /> <a href="#">[Ukázková šablona] Skladem</a></DataCell>
                <DataCell key={4}>600x600</DataCell>
                <DataCell key={5}>8. 3. 2017</DataCell>
                <DataCell key={6}>
                    <Button color="nocolor" size="tiny" icon={<Icon type="search" />} />
                    <Button color="nocolor" size="tiny" icon={<Icon type="edit" />} />
                    <Button color="nocolor" size="tiny" icon={<Icon type="pause" />} />
                    <Button color="nocolor" size="tiny" icon={<Icon type="copy" />} />
                    <Button color="nocolor" size="tiny" icon={<Icon type="trash" />} />
                </DataCell>
            </DataRow>
            <DataRow dataId={3} key={3}>
                <DataCell key={1} style={{textAlign: 'center'}}><Icon style={{cursor: 'move'}} type="arrows-v" /></DataCell>
                <DataCell key={2} style={{textAlign: 'center'}}>3</DataCell>
                <DataCell key={3}><a href="#">[Ukázková šablona] Doprava zdarma</a></DataCell>
                <DataCell key={4}>1200x628</DataCell>
                <DataCell key={5}>18. 3. 2017</DataCell>
                <DataCell key={6} style={{width: "1%", whiteSpace: "nowrap"}}>
                    <Button color="nocolor" size="tiny" icon={<Icon type="search" />} />
                    <Button color="nocolor" size="tiny" icon={<Icon type="edit" />} />
                    <Button color="nocolor" size="tiny" icon={<Icon type="pause" />} />
                    <Button color="nocolor" size="tiny" icon={<Icon type="copy" />} />
                    <Button color="nocolor" size="tiny" icon={<Icon type="trash" />} />
                </DataCell>
            </DataRow>
        </DataBody>
    </DataTable>
    </Section>
