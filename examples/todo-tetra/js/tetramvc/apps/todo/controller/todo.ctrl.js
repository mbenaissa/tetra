tetra.controller.register('todo', {
	scope: 'todo', // application name
	use: ['todo'], // list of required models
	
	constr: function(me, app, page, orm) {
		return {
			events: {
				model: { // events received from model
					'todo' : {
						// Callback on .create()
						'create' : function(obj) {
							var obj = obj.getAttr();
							app.notify('todo created', obj );
						},
						// Callback on .update()
						'update' : function(obj) {
							var obj = obj.getAttr();
							app.notify('todo updated', obj );
						},
						// Callback on .delete()
						'deleted' : function(obj) {
							console.log(obj);
						},
					}
				},
				
				view: { // events received from view
					'create todo': function( data ) {
						orm('todo').create(data);
					},
					'get todo' : function () {
						orm('todo').fetch({}, function(){} );
					},
					'get one todo' : function ( data ) {
						orm('todo').findByRef(data.target, function(){});
					},
					'update todo' : function( data ) {
						orm('todo').findByRef(data.target, function(){}).update( { value: data.value, completed: data.completed } );
					},
					'delete todo' : function( data ) {
						orm('todo').findByRef(data.target, function(){}).remove();
					}
				}
			}
		};
	}
});