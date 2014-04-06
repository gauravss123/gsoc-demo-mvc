Ext.define('test.controller.map', {
    extend: 'Ext.app.Controller',
  config:{
    refs: {
            
	    closeMap:'#closeMap',
	    map:'#showOnMap'
            
        },
        control: {
	   closeMap:{
	     tap:"closeMapFunction"
	  },
	   map: {
                tap: "map"
           }
        }
     },
     map:function(){
    
       Ext.getCmp('mapDis').setHidden(false);
    },
     
  
  
  
});