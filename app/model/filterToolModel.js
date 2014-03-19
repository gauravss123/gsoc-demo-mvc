Ext.define('test.model.filterToolModel', {
    extend: 'Ext.data.Model',
initialize:function(){
      this.callParent();
      console.log('inside store');
    },
    config: {
        fields: ['text']
    }
});