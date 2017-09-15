Multiple choices, hidden inputs

    var Field = require('redux-form').Field;

    <Field component={CheckboxContainer} name="queries"
                props={{
                        showInput: false,
                        availableQueries: [{
                            id: 999,
                            name: "First query",
                            product_count: 50,
                            active: false,
                        },{
                            id: 1000,
                            name: "♥ALLPRODUCTS♥",
                            product_count: 100,
                            active: true,
                        },{
                            id: 1001,
                            name: "Third query",
                            product_count: 100,
                            active: true,
                        }],
                        labels: {
                         main: 'Select queries', placeholder: 'Filter:', allProducts: 'All products'
                        }
                    }}

        />

Multiple choices, visible inputs

    var Field = require('redux-form').Field;

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

Single choice, visible inputs

    var Field = require('redux-form').Field;

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


Single choice, flexible height box, without filter, hidden inputs

    var Field = require('redux-form').Field;

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

Invalid container

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

Multilevel options

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
