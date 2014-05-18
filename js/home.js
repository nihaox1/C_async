$c.define( {
	page 		: $g.modules.home,
	url 		: [ "page/home.html" ],
	constructor : function() {
		var self = this,
			config,
			html,
			tool;

		tool = {
			config : function(){
				config = {
					container 	: self.config.container
				};
				html = {
					container 	: $( "#home_container_template" ).html()
				};
			}
		};

		tool.config();

		return {

		};
	}
} );