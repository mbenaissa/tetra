tetra.controller.register('sampleController', {

    scope: 'sample app',

    constr: function (me, app, page, orm) {

        'use strict';

        return {

            events: {
            
                model : {
                    'counter' : {
	                    'update' 	: function(obj){ app.notify('update counter', obj.get('value')); },
	                    'invalid' 	: function(err){ console.warn(err); }
                    }
                },

                view : {
	                'set count' 		: function(){ me.counter = orm('counter').create(); },
                    'increment count' 	: function(){ me.counter.update({'value': me.counter.get('value') + 1}); },
                    'decrement count' 	: function(){ me.counter.update({'value': me.counter.get('value') - 1}); }
                }
            }
            
        };
    }
});