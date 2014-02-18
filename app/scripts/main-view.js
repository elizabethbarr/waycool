var MainView = Backbone.View.extend({
	className: 'main-item',

	mainTemplate: _.template($('#main-item-template').text()),

	initialize: function(){
		$('.js-main-item').html(this.el);
		
		this.render();
	},

	render: function(){
		var mainTemplate = this.mainTemplate( this.model.attributes )

		this.$el.html( mainTemplate );

	}

});


