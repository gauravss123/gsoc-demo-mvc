Ext.define('test.controller.map', {
    extend: 'Ext.app.Controller',
 requires:['Ext.Map',
	  'Ext.Panel'],
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
           Ext.getCmp('mapDis').setHidden(true);
     }
     
  
  
  
});