Ext.define('test.controller.tut', {
    extend: 'Ext.app.Controller',
    
config: {
        refs: {
           previous: '#prev',
	   forward: '#next',
	   skip: '#skip',
	   home: '#home',
	   back:'#carBack'
            
        },
        control: {
            previous: {
                
		tap: function(){
		  if(Ext.getCmp('next').getDisabled())
		    Ext.getCmp('next').setDisabled(false);
		  carousel= Ext.getCmp('carouselTut');
		  console.log(carousel);
		  carousel.previous();
		  if(carousel.getActiveIndex()==1)
		    Ext.getCmp('prev').setDisabled(true);
		},

		
		
            },
	   forward:{
	     
		  tap:function(){
		  if(Ext.getCmp('prev').getDisabled())
		    Ext.getCmp('prev').setDisabled(false);
		  carousel= Ext.getCmp('carouselTut');
		  console.log(carousel);
		  carousel.next();
		  if(carousel.getActiveIndex()==4)
		    Ext.getCmp('next').setDisabled(true);
		}
            },
	   skip: {
                
		tap:function(){
		  Ext.getCmp('mainView').setActiveItem(Ext.getCmp('maincon')); 
		}

			
            },
	   home: {
                
		tap: function(){
		  Ext.getCmp('mainView').setActiveItem(Ext.getCmp('homeView')); 
		}
	   },

	}
    }
});