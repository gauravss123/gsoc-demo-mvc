Ext.define("test.store.stateStore", {
extend:'Ext.data.Store',
requires:['test.model.state'],
config:{
  model:'test.model.state',
  autoLoad:true,  
  id:'stateStore',
  defaultRootProperty:true,
  proxy:{
        type: 'ajax',
        url: 'app/data/state.json',
        reader: {
            type: 'json',
            
			}
		}
}
});