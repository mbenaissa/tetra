tetra.model.register('todo', {
	scope: 'todo',
	store: true,

	req : {
	},
	
	attr : {
		value : '',
		completed : false
	},
	
	methods : function(attr, data) {

		return {
			validate : function(attr, errors){
				return errors;
			},
			getAttr : function(){
				return attr;
			}
		};
	}
});
