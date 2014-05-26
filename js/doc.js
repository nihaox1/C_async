$c.define( {
	page 		: $g.modules.doc,
	url 		: [ 
		"page/doc.html" , 
		"css/doc.min.css" , 
		"css/lib/highlight.css" ,
		"js/docExample.js" ,
		"js/lib/highlight.pack.js" 
	],
	constructor : function() {
		var tool,
			self = this,
			html,
			manage;

		tool = {
			data : {
				getList : function( func ) {
					$g.config.db.get( function(){
						if( func ){ func( $g.config.db.doc.data ); };
					} );
				}
			},
			ui : {
				getList : function() {
					tool.data.getList( function( list ){
						E( list );
						var _lis = [];
					} );
				}
			},
			config : function() {
				html 	= {
					container 		: $( "#doc_container_template" ).html()
				};
				config 	= {
					container 		: self.config.container
				};
				config.container.html( html.container );
				tool.ui.getList();
				hljs.initHighlightingOnLoad();
			}
		};

		manage = {

		};

		tool.config();
		return manage;
	}
} );