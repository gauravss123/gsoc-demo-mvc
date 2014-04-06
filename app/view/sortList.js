Ext.define('test.view.sortList',{
 extend:'Ext.form.Panel',
 

    xtype:'sort',
    initialize : function() {
        this.callParent();
     },
    

    config:{flex:1,
      border: 1,
      style: 'border-color: black; border-style: solid;',
          scrollable: {
    direction: 'vertical',
    directionLock: true
    },	
    items:[
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
	
    },
    {
    xtype:'fieldset',
    title: 'Applied Filters',
    id:'filterListField',
    hidden:true,
    autoDestroy:true
    
    	
      }
    ]
  }
});