$c.define( {
	page 		: $g.modules.FQA,
	url 		: [ "page/FQA.html" , "css/FQA.min.css" ],
	constructor : function(){
		var self = this,
			tool,
			html,
			config;

		tool = {
			config : function(){
				html 	= {
					container 	: $( "#FQA_container_template" ).html()
				};
				config 	= {
					container 	: self.__config.container
				};
				config.container.html( html.container );
			}
		};
		tool.config();
		return {};
	}
} );