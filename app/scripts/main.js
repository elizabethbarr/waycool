console.log('Way cool, bitches.');

$(document).ready(function(){

	//start the app
	window.contacts = new ContactsCollection( data )

	contacts.each(function(contact){
		new ListView({model: contact});
	})


});