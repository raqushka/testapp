Template.postItem.helpers({
	domain: function(){
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	}
/*	icon: function () {
		var b = document.createElement('div');
		b.class('ff');
		return b;
	}*/
});