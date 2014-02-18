var ListView = Backbone.View.extend({
	className: 'list-item',

	createTemplate: _.template($('#list-item-template').text()),

	events: {
		'click': 'setMainItem'
	},

	initialize: function(){
		$('.js-contact-list').prepend( this.el );
		
		this.render();

	},


	setMainItem: function(){
		new MainView({model: this.model})

		console.log(this.model.attributes)

	},

	render: function(){
		var renderedTemplate = this.createTemplate( this.model.attributes )

		this.$el.html( renderedTemplate );

	}

});




