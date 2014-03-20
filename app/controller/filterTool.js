Ext.define('test.controller.filterTool', {
    extend: 'Ext.app.Controller',
    
config: {
        refs: {
            filterBut: '#closeFilter',
            filterList: '#filterbar',
	   clearFilter:'#clearFilter',
        },
        control: {
            filterBut: {
                tap: "closeFilter"
            },
	   filterList: {
	     leafitemtap:'showClearFilter',
	      
	  },
	   clearFilter: {
                tap: "clearFilter"
            }
        }
    },
    clearFilter:function(){
      Ext.getCmp('listDocs').getStore().clearFilter();
      Ext.getCmp('clearFilter').setHidden(true);
    },
    showClearFilter:function(filterlist, list, index, target, record){
      Ext.getCmp('clearFilter').setHidden(false);
      Ext.getCmp('clearFilter').setUi('action');
      rec= record.get('text');
      store = Ext.getCmp('listDocs').getStore();
      var state= ["Himachal Pradesh","Uttar Pradesh","Delhi","Haryana","Punjab"];
      var city = ["City1","City2","City3","City4","City5","City6","City7"];
      if(rec==("Private"))
	      store.filter('Government','n');
      else if(Ext.Array.contains(state,rec))
	      store.filter('State',rec);
      else if(Ext.Array.contains(city,rec))
	      store.filter('City',rec);
      else 
	     store.filter(rec,'y'); 
      
    
    },
    closeFilter: function(){
        
	Ext.getCmp('filterbar').setHidden(true);
    } 
    
});