Ext.define('test.view.mainContainer',{
extend: 'Ext.Container',
requires : [
  'Ext.Panel',
  'test.view.mainTool',
  'test.view.filterTool',
  'test.view.listTool',
  'test.view.infoDisplay',
  'test.view.sortList',
  'Ext.Menu',
  'Ext.form.FieldSet'
],
xtype: 'mainCon',
config:{
  layout:'hbox',
  fullscreen:true
},
  
  initialize: function(){
  this.callParent();
  var maintool = Ext.create('test.view.mainTool');  
  var inf =Ext.create('test.view.infoDisplay');  
  var intro =Ext.create('test.view.intro');  
  var sort= Ext.create('test.view.sortList');
  Ext.getCmp('filter1').setLeft(Ext.getCmp('mainSearch').getWidth());
  var listsearch = Ext.create('test.view.listTool');  
  var filterlist= Ext.create('test.view.filterTool');
    var info= Ext.create('Ext.Container',{
    id:'info',
    styleHtmlContent:true,
    flex:5,
    layout:'card',
    
    items:[	
	      intro,
              inf
	    ]
        });
  
  var list = Ext.create('Ext.Panel',{
    flex:1,
    
    layout:'fit',
    items:[listsearch,
    
    
    ]
  });
  var filter = Ext.create('Ext.Panel',{
    flex:1.2,
    border: '0,7,7,7',
    style: 'border-color: black; border-style: solid;',
    layout:'card',
    items:[
    sort,
    filterlist]
  })
  
  this.add(maintool);
  this.add(list);
  this.add(info);
  this.add(filter);
  
    
  }
  
});