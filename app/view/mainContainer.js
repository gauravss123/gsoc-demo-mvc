Ext.define('test.view.mainContainer',{
extend: 'Ext.Container',
requires : [
  'Ext.Panel',
  'test.view.mainTool',
  'test.view.filterTool',
  'test.view.listTool',
],
xtype: 'mainCon',
config:{
  layout:'hbox',
  fullscreen:true
},
  
  initialize: function(){
  this.callParent();
  var maintool = Ext.create('test.view.mainTool');  
  Ext.getCmp('filter').setLeft(Ext.getCmp('mainSearch').getWidth());
  var listsearch = Ext.create('test.view.listTool');  
  var filterlist= Ext.create('test.view.filterTool');
  var info= Ext.create('Ext.Panel',{flex:5});
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
  this.setItems(maintool,list,info,filter);
    
  }
  
});