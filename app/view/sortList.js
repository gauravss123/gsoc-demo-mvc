Ext.define('test.view.sortList',{
 extend:'Ext.form.Panel',
 requires:['Ext.field.Radio',
	    'Ext.form.FieldSet'],


    xtype:'sort',
    initialize : function() {
        this.callParent();
     },
    

    config:{items:[
      {
    xtype:'fieldset',
    title: 'Group By',
    id:'sort',
    items:[
    
    {
    xtype: 'radiofield',
    id: 'sortFirstName',
    checked:true,
    label: 'First Name',
    labelWrap:true,
    labelWidth:'50%',
    name:'group'
    
    
    },
    {
    xtype: 'radiofield',
    id: 'sortLastName',
    label: 'Last Name',
    labelWrap:true,
    labelWidth:'50%',
    name:'group'
    
    
    },
    {
    xtype: 'radiofield',
    id: 'sortState',
    label: 'State',
    labelWrap:true,
    labelWidth:'50%',
    name:'group'
    
    
    },
    {
    xtype: 'radiofield',
    id: 'sortCity',
    label: 'City',
    labelWrap:true,
    labelWidth:'50%',
    name:'group'
    
    
    }  
    ]
	
      }
    ]
  }
});