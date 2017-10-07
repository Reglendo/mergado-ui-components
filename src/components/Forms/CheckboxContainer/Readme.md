Multiple choices, hidden inputs

    var Field = require('redux-form').Field;
    <Section>
    <Field component={CheckboxContainer} name="queries"
                props={{
                        showInput: false,
                        availableQueries: [{
                            id: 999,
                            name: "Bez Heureka kategorie",
                            product_count: 50,
                            active: false,
                        },{
                            id: 1000,
                            name: "Všechny produkty",
                            product_count: 100,
                            active: true,
                        },{
                            id: 1001,
                            name: "damske parfemy",
                            product_count: 100,
                            active: true,
                        },{
                            id: 1002,
                            name: "Panske parfemy",
                            product_count: 100,
                        },{
                            id: 1003,
                            name: "PRICE_VAT < 500",
                            product_count: 100,
                        },{
                            id: 1004,
                            name: "PRICE_VAT > 1000",
                            product_count: 100,
                         },{
                            id: 1005,
                            name: "TEST-BF-maly-vyber",
                            product_count: 100,
                        }],
                        labels: {
                         main: 'Select queries', placeholder: 'Filter:', allProducts: 'All products'
                        }
                    }}

        />
    </Section>

Multiple choices, visible inputs

    var Field = require('redux-form').Field;

    <Section>
    <Field component={CheckboxContainer} name="queries"
                props={{
                        showInput: true,
                        availableQueries: [{
                            id: 1299,
                            name: "First query",
                            product_count: 50,
                            active: false,
                        },{
                            id: 1200,
                            name: "♥ALLPRODUCTS♥",
                            product_count: 100,
                            active: true,
                        }
                        ],
                        labels: {
                         main: 'Select queries', placeholder: 'Filter:', allProducts: 'All products'
                        }
                    }}

        />
    </Section>

Single choice, visible inputs

    var Field = require('redux-form').Field;
    <Section>
    <Field component={CheckboxContainer} name="queries"
                props={{
                        singleChoice: true,
                        showInput: true,
                        availableQueries: [{
                            id: 2299,
                            name: "First query",
                            product_count: 50,
                            active: false,
                        },{
                            id: 2200,
                            name: "♥ALLPRODUCTS♥",
                            product_count: 100,
                            active: true,
                        }
                        ],
                        labels: {
                         main: 'Select queries', placeholder: 'Filter:', allProducts: 'All products'
                        }
                    }}

        />
    </Section>


Single choice, flexible height box, without filter, hidden inputs

    var Field = require('redux-form').Field;
    <Section>
    <Field component={CheckboxContainer} name="queries2"
                props={{
                        singleChoice: true,
                        withoutFilter: true,
                        showLabel: true,
                        height: 'auto',
                        availableQueries: [{
                            id: 1,
                            name: "First query",
                            product_count: 50,
                            active: 0,
                            link: 'https://google.com',
                        },{
                            id: 2,
                            name: "♥ALLPRODUCTS♥",
                            product_count: 100,
                            active: 1,
                            link: 'https://google.com',
                        },{
                            id: 3,
                            name: "Third query",
                            product_count: 100,
                            active: 0,
                            link: 'https://google.com',
                        }],
                        labels: {
                         main: 'Select exactly one query', placeholder: 'Filter:', allProducts: 'All products'
                        }
                    }}
        />
    </Section>

Invalid container

    <Section>
    <CheckboxContainer availableQueries={[
                        {
                            id: 1,
                            name: "First query",
                            product_count: 50
                        },{
                            id: 2,
                            name: "♥ALLPRODUCTS♥",
                            product_count: 100
                        },{
                            id: 3,
                            name: "Third query",
                            product_count: 100
                        }]}
                        singleChoice={true}
                        height='auto'
                        labels={{
                         main: 'Select exactly one query', placeholder: 'Filter:', allProducts: 'All products',
                         invalid: 'I am invalid',
                        }}
                        meta={{invalid: true, dirty: true}}
                    />
    </Section>

Multilevel options

    <Section>
        <CheckboxContainer availableQueries={[
                            {
                                id: "ALL",
                                name: "Empty query",
                            },
                            {
                                id: null,
                                name: 'First group',
                                subheader: true,
                            },
                            {
                                id: 1,
                                name: "First query",
                                product_count: 50,
                                disabled: 1
                            },
                            {
                                id: 2,
                                name: "♥ALLPRODUCTS♥",
                                product_count: 100
                            },
                            {
                                id: null,
                                name: 'Second group',
                                subheader: true,
                            },
                            {
                                id: 3,
                                name: "Third query",
                                product_count: 100
                            }
                        ]}
                        singleChoice={true}
                        height='auto'
                        labels={{
                         main: 'Select exactly one query', placeholder: 'Filter:', allProducts: 'All products'
                        }}
                    />
    </Section>
