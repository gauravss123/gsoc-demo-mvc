Ext.define('test.view.sortList',{
 extend:'Ext.form.Panel',
 requires:['Ext.form.Toggle',
	    'Ext.form.FieldSet'],
//    fullscreen: true,

    xtype:'sort',
    initialize : function() {
        this.callParent();
     },
    

    config:{items:[
      {
    xtype:'fieldset',
    title: 'Sort Values',
    id:'sort',
    items:[
    
    {
    xtype: 'togglefield',
    id: 'sortfirstName',
    value:1,
    label: 'First Name',
    labelWrap:true,
    labelWidth: '50%'
    },
    {
    xtype: 'togglefield',
    id: 'sortlastName',
    label: 'Last Name',
    labelWrap:true,
    labelWidth: '50%'
    },
    {
    xtype: 'togglefield',
    id: 'sortState',
    label: 'State',
    labelWrap:true,
    labelWidth: '50%'
    },
    {
    xtype: 'togglefield',
    id: 'sortCity',
    label: 'City',
    labelWrap:true,
    labelWidth: '50%'
    }  
    ]
	
      }
    ]
  }
});