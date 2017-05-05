Multiple choices

    var Field = require('redux-form').Field;

    <Field component={CheckboxContainer} name="queries"
                props={{
                        availableQueries: [{
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
                        }],
                        labels: {
                         main: 'Select queries', placeholder: 'Filter:', allProducts: 'All products'
                        }
                    }}

        />

Flexible height single choice box without filter

    var Field = require('redux-form').Field;

    <Field component={CheckboxContainer} name="queries"
                props={{
                        availableQueries: [{
                            id: 1,
                            name: "First query",
                            product_count: 50,
                            active: 0,
                        },{
                            id: 2,
                            name: "♥ALLPRODUCTS♥",
                            product_count: 100,
                            active: 1
                        },{
                            id: 3,
                            name: "Third query",
                            product_count: 100,
                            active: 0
                        }],
                        singleChoice: true,
                        withoutFilter: true,
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
                         main: 'Select exactly one query', placeholder: 'Filter:', allProducts: 'All products'
                        }}
                        meta={{invalid: true, dirty: true}}
                    />

Multilevel options

    <CheckboxContainer availableQueries={{
                        'First group': [
                            {
                                id: 1,
                                name: "First query",
                                product_count: 50
                            },{
                                id: 2,
                                name: "♥ALLPRODUCTS♥",
                                product_count: 100
                            }
                         ],
                         'Second group': [
                            {
                                id: 3,
                                name: "Third query",
                                product_count: 100
                            }
                         ]
                        }}
                        singleChoice={true}
                        height='auto'
                        labels={{
                         main: 'Select exactly one query', placeholder: 'Filter:', allProducts: 'All products'
                        }}
                    />