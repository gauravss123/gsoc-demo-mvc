Ext.define('test.view.main',{
  extend:'Ext.Container',
  id:'mainView',
  config:{
    fullscreen:true,
   layout:'card',
   items:[
   {xtype:'home'},
   {xtype:'mainCon'},
   {xtype:'tutorial'},
    ]	
  }
  
  
});