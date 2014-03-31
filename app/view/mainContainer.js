Ext.define('test.view.mainContainer',{
extend: 'Ext.Container',
requires : [
  'Ext.Panel',
  'test.view.mainTool',
  'test.view.filterTool',
  'test.view.listTool',
  'Ext.Menu'
],
xtype: 'mainCon',
config:{
  layout:'hbox',
  fullscreen:true
},
  
  initialize: function(){
  this.callParent();
  var maintool = Ext.create('test.view.mainTool');  
  Ext.getCmp('filter1').setLeft(Ext.getCmp('mainSearch').getWidth());
  var listsearch = Ext.create('test.view.listTool');  
  var filterlist= Ext.create('test.view.filterTool');
    var info= Ext.create('Ext.Panel',{
    id:'info',
    styleHtmlContent:true,
    flex:5,
    items:[
      {			
            xtype: 'fieldset',
            title: 'Doctor Information',
	    hidden:true,
	    id:'docInfo',
            items: [
                {
                    xtype: 'textfield',
                    label: "Doctor's Name",
		    id:'docName',
                    
                    readOnly:true,
                    
                },
		{
                    xtype: 'textfield',
                    label: "State",
		    id:'docState',
                    
                    readOnly:true,
                    
                },
		{
                    xtype: 'textfield',
                    label: "City",
		    id:'docCity',
                    
                    readOnly:true,
                    
                },
		{
                    xtype: 'textfield',
                    label: "Services Offered",
		    id:'docServOff',
                    
                    readOnly:true,
                    
                }, 	
		{
                    xtype: 'textfield',
                    label: "Government Employee",
		    id:'docGovEmp',
                    
                    readOnly:true,
                    
                },
	    ] 	
    
	  }]
        });
  
  var list = Ext.create('Ext.Panel',{
    flex:1,
    
    layout:'fit',
    items:[listsearch]
  });
  var filter = Ext.create('Ext.Panel',{
    flex:1,
    layout:'fit',
    items:[filterlist]
  })
  this.setItems(maintool);
  this.setItems(list);
  this.setItems(info);
  this.setItems(filter);
  
    
  }
  
});