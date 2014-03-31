Ext.define("test.view.listTool", {
    extend:'Ext.List',
    requires:['test.store.list1store',
      'Ext.Toolbar',
      'Ext.field.Search'
    ],
//    fullscreen: true,

    xtype:'searchList',
    initialize : function() {
        this.callParent();
        this.setStore(Ext.create("test.store.list1store"));

    },
    

    config:{
      grouped:true,
      id:'listDocs',
      border: '0 5 5 5 ',
      style: 'border-color: black; border-style: solid;',
    
	   //height:Ext.Viewport.getHeight(),
	   //width:200,
	   itemTpl: '<div class="contact">{firstName} <strong>{lastName}</strong></div>',
	   emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
	  
      //      fullscreen: true,
        
        
    },

});