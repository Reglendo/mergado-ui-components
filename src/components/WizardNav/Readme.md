Navigation menu

    initialState = { activePage: 1 };
    <Section>
    <WizardNav links={[
                <WizardStep active={(state.activePage == 1 || state.activePage == 2 || state.activePage == 3) ? true : false } key={1}
                       onClick={(o) => setState({ activePage: 1 })}
                       link={(<span>First</span>)} />,
                <WizardStep active={(state.activePage == 2 || state.activePage == 3 ) ? true : false } key={2}
                         link={(<span>Third</span>)}
                         onClick={(o) => setState({ activePage: 2 })} />,
                <WizardStep active={(state.activePage == 3) ? true : false } key={3}
                         link={(<span>Second</span>)}
                         onClick={(o) => setState({ activePage: 3 })} />
            ]} />
    </Section>