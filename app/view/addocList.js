Ext.define("test.view.addocList", {
    extend:'Ext.List',
    requires:['test.store.addocStore',
    'test.store.cityStore',
    'test.store.stateStore'
      
    ],
//    fullscreen: true,
    id:'addocList',
    xtype:'addocList',
    initialize : function() {
        this.callParent();
	storename=test.utils.Global.getStoreName();
	if(storename==1)
	  this.setStore(Ext.create("test.store.addocStore"));
	else if(storename==2)
	  this.setStore(Ext.create("test.store.stateStore"));
	else
	  this.setStore(Ext.create("test.store.cityStore"));

    },
    

    config:{
      border: '5 5 5 5 ',
      style: 'border-color: black; border-style: solid;',
      width:200,
      height:300,
      itemTpl: '<div class="contact">{Serv}</strong></div>',
      emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
	  
      
        
        
    },

});