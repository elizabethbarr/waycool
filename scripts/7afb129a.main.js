var data=[{name:"Summer",bio:"Narwhal beard hoodie, whatever Terry Richardson street art put a bird on it tote bag cred aesthetic kitsch hella fanny pack.",phone:"555-555-5555",avatar:"http://i785.photobucket.com/albums/yy136/elizbarr20/Summer-10copy_zps1f9abea1.jpg"},{name:"Summer",bio:"Quinoa actually kitsch, sriracha chia viral ethnic VHS put a bird on it selvage roof party blog iPhone Pinterest Portland.",phone:"555-555-5555",avatar:"http://i785.photobucket.com/albums/yy136/elizbarr20/IMG_1172_zpsf6d5d4b1.jpg"},{name:"Summer",bio:"Selfies chia organic beard, jean shorts Banksy bitters YOLO Shoreditch XOXO quinoa photo booth forage fashion axe Tonx.",phone:"555-555-5555",avatar:"http://i785.photobucket.com/albums/yy136/elizbarr20/IMG_0718_zps078b73e6.jpg"}],Contact=Backbone.Model.extend({defaults:{name:"????",phone:"555-555-5555",avatar:"",bio:"summer"}}),ContactsCollection=Backbone.Collection.extend({model:Contact}),ListView=Backbone.View.extend({className:"list-item",createTemplate:_.template($("#list-item-template").text()),events:{click:"setMainItem"},initialize:function(){$(".js-contact-list").prepend(this.el),this.render()},setMainItem:function(){new MainView({model:this.model}),console.log(this.model.attributes)},render:function(){var a=this.createTemplate(this.model.attributes);this.$el.html(a)}}),MainView=Backbone.View.extend({className:"main-item",mainTemplate:_.template($("#main-item-template").text()),initialize:function(){$(".js-main-item").html(this.el),this.render()},render:function(){var a=this.mainTemplate(this.model.attributes);this.$el.html(a)}});console.log("Way cool, bitches."),$(document).ready(function(){window.contacts=new ContactsCollection(data),contacts.each(function(a){new ListView({model:a})})});