Ext.define('test.view.filterList',{
 extend:'Ext.form.Panel',
 requires:['Ext.field.Radio',
	    'Ext.form.FieldSet'],

    id:'filterList',
    xtype:'filterlist',
    initialize : function() {
        this.callParent();
     },
    

    config:{
      //hidden:true,
      border: '0 5 5 5 ',
      style: 'border-color: black; border-style: solid;',
    flex:1,
      scrollable: {
    direction: 'vertical',
    directionLock: true
    },	
    items:[
      {
    xtype:'fieldset',
    title: 'Applied Filters',
    id:'filterListField',
    
    	
      }
    ]
  }
});