Multiple choices

    var Field = require('redux-form').Field;

    <Field component={CheckboxContainer} name="queries"
                props={{
                        showInput: true,
                        availableQueries: [{
                            id: 999,
                            name: "First query",
                            product_count: 50,
                        },{
                            id: 1000,
                            name: "♥ALLPRODUCTS♥",
                            product_count: 100
                        },{
                            id: 1001,
                            name: "Third query",
                            product_count: 100
                        }],
                        labels: {
                         main: 'Select queries', placeholder: 'Filter:', allProducts: 'All products'
                        }
                    }}

        />

Flexible height single choice box without filter

    var Field = require('redux-form').Field;

    <Field component={CheckboxContainer} name="queries2"
                props={{
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
                        singleChoice: true,
                        showInput: true,
                        withoutFilter: true,
                        showLabel: true,
                        height: 'auto',
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
                                id: 999,
                                name: "Empty query",
                                disabled: 1
                            },
                            {
                                id: null,
                                name: 'First group',
                                subheader: true,
                            },
                            {
                                id: 1,
                                name: "First query",
                                product_count: 50
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
