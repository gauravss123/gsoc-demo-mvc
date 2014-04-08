Ext.define('test.view.services',{
  extend:'Ext.Panel',
  requires:'Ext.dataview.List',
  id:'servicesList',
  config:{
    layout:fit,
    modal:true,
    hideOnMaskTap:true,
    items:[
      {
	xtype:'list',
	itemTpl: '{Service}',
	data: [
	  { Service: 'Pharmacy' },
	  { Service: 'Ambulance' }
	]	
	
      }
    ]
    
  }
})