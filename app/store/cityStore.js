Ext.define("test.store.cityStore", {
extend:'Ext.data.Store',
requires:['test.model.city'],
config:{
  model:'test.model.city',
  autoLoad:true,  
  id:'cityStore',
  defaultRootProperty:true,
  proxy:{
        type: 'ajax',
        url: 'app/data/city.json',
        reader: {
            type: 'json',
            
			}
		}
}
});