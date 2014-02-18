var Contact = Backbone.Model.extend({
	defaults: {
		name: '????',
		phone: '555-555-5555',
		avatar: '',
		bio: 'summer'
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact 
})

