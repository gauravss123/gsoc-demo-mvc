Ext.application({
  name:'test',  
  requires: [
      
      'Ext.Panel',
      'Ext.Spacer'
      
    ],
    views:[
      'mainTool',
      'list',
      'filterTool'      
    ],
    launch : function(){
      
        var maintool=Ext.create('test.view.mainTool');
	var listsearch=Ext.create('test.view.list');
	var listfilter=Ext.create('test.view.filterTool');
	
	Ext.getCmp('filter').setLeft(Ext.getCmp('mainSearch').getWidth());
        Ext.create('Ext.Container',{
          id:'contain',
          layout:'hbox',
   
          fullscreen:true,
          items:[
                       maintool,
			listsearch,
                        {xtype:'spacer'},
                         listfilter
 
          ]
  });
  }
});