Ext.application({
  name:'test',  
  requires: [
      
      'Ext.Panel',
      'Ext.Spacer'
      
    ],
    views:[
      'mainTool',
      'listTool',
      'filterTool'   ,
      'mainContainer'
    ],
    controllers:[
      
      'mainTool',
      'filterTool'
    ],
    launch : function(){
        /*
	Ext.Viewport.add({
	  xtype:'mainCon'
	});*/
        var maintool=Ext.create('test.view.mainTool');
	var listsearch=Ext.create('test.view.listTool');
	var listfilter=Ext.create('test.view.filterTool');
	Ext.getCmp('filter1').setLeft(Ext.getCmp('mainSearch').getWidth());
        Ext.create('Ext.Container',{
          id:'contain',
          layout:'hbox',
   
          fullscreen:true,
          items:[
                maintool,
		{xtype:'panel',
		  flex:1,
		   layout:'fit',
		   //modal:true,
		   items:[
		  listsearch]
		  
		},
		
                {xtype:'panel',
		  id:'info',
		  html:"Select Doctor from list to display",
		  flex:5
		},
		{xtype:'panel',
		  layout:'fit',
		  flex:1,
		    modal:true,
		   items:[
		  listfilter]
		  
		}
 
          ]
  });
  }
});