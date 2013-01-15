tetra.model.register('counter', {

    scope: 'sample app',
    
    attr: { value : 1 },

    methods: function(attr) {
        return {
            validate: function(attr, errors) {
                if (attr.value < 0) errors.push('forbidden count value');
                return errors;
            }
        };
    }
});