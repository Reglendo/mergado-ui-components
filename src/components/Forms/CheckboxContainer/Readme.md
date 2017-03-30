Multiple choices

    var Field = require('redux-form').Field;

    <Field component={CheckboxContainer} name="queries"
                props={{
                        availableQueries: [{
                            id: 1,
                            name: "First query",
                            productCount: 50
                        },{
                            id: 2,
                            name: "♥ALLPRODUCTS♥",
                            productCount: 100
                        },{
                            id: 3,
                            name: "Third query",
                            productCount: 100
                        }],
                        labels: {
                         main: 'Select queries', placeholder: 'Filter:', allProducts: 'All products'
                        }
                    }}

        />

Flexible size single choice box without filter

    var Field = require('redux-form').Field;

    <Field component={CheckboxContainer} name="queries"
                props={{
                        availableQueries: [{
                            id: 1,
                            name: "First query",
                            productCount: 50
                        },{
                            id: 2,
                            name: "♥ALLPRODUCTS♥",
                            productCount: 100
                        },{
                            id: 3,
                            name: "Third query",
                            productCount: 100
                        }],
                        singleChoice: true,
                        withoutFilter: true,
                        labels: {
                         main: 'Select exactly one query', placeholder: 'Filter:', allProducts: 'All products'
                        }
                    }}

        />