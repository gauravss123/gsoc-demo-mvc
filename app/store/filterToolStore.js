Ext.define("test.store.filterToolStore", {
extend:'Ext.data.TreeStore',
requires:['test.model.filterToolModel'],
    
config:{
id:'filterStore',
model:'test.model.filterToolModel',
autoLoad:true,
defaultRootProperty: 'items',
proxy:{
        type: 'ajax',
        url: 'app/data/filter.json',
        reader: {
            type: 'json',
           
			}
		} 
  }
  
});