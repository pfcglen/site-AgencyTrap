 
 
 
 requirejs.config({
	 baseUrl: 'js',	 
	 paths:{
				jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery',
				modernizr: 'modernizr-2.8.3-respond-1.4.2.min',
				cycle: 'jquery.cycle.all'		 
	 },
	  "shim": {
                'cycle': {
                    deps: ['jquery']
                }
            }
 });
 
 
