Ext.define("test.store.addocStore", {
extend:'Ext.data.Store',
requires:['test.model.addoc'],
config:{
  model:'test.model.addoc',
  autoLoad:true,  
  id:'addocStore',
  defaultRootProperty:true,
  proxy:{
        type: 'ajax',
        url: 'app/data/addoc.json',
        reader: {
            type: 'json',
            
			}
		}
}
});