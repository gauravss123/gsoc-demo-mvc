Ext.define("test.store.list1store", {
extend:'Ext.data.Store',
requires:['test.model.list1model'],
config:{
  model:'test.model.list1model',
  autoLoad:true,  
  sorters: 'firstName',
  id:'searchStore',
  defaultRootProperty:true,
  grouper: {
            groupFn: function(record) {
                return record.get('firstName')[0];
            }},
proxy:{
        type: 'ajax',
        url: 'app/data/doctor.json',
        reader: {
            type: 'json',
            
			}
		}
}
});