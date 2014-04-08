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
     closeMapFunction:function(){
       console.log('tapped');    
       //console.log(Ext.getCmp('mapDis').getHidden());
     }
     
  
  
  
});