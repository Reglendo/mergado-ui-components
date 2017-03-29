Hello world

    var Field = require('redux-form').Field;

    <Field component={CheckboxContainer} name="queries"
                props={{
                        availableQueries: [{
                            id: 1,
                            name: "QueryName",
                            productCount: 50
                        },{
                            id: 2,
                            name: "♥ALLPRODUCTS♥",
                            productCount: 100
                        },{
                            id: 3,
                            name: "All a",
                            productCount: 100
                        }],
                        labels: {
                         main: 'Select queries', placeholder: 'Filter:', allProducts: 'All products'
                        }
                    }}

        />
