tetra.view.register('sampleView', {

    scope: 'sample app',

    constr: function(me, app, _) {

        'use strict';

        return {

            events : {
                user : {
                    'click' : {
                        '.add'		: function(e, elm){ app.notify('increment count'); },
                        '.remove'	: function(e, elm){ app.notify('decrement count'); }
                    }
                },
                controller : {
                    'update counter' : function(count){ _('.counter').html(count); }
                }
            },

            methods : {
                init : function() { app.notify('set count'); }
            }
        };
    }
});