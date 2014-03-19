Ext.define("test.view.filterTool", {
    extend:'Ext.NestedList',
    requires:['test.store.filterToolStore'],
    //fullscreen: true,
  
    xtype:'filterList',
    initialize : function() {
        this.callParent();
      this.setStore(Ext.create("test.store.filterToolStore"));
      
    },


    config:{
	    height:Ext.Viewport.getHeight(),
	    title:'Filters', 
	    width:200,    
	    hidden:true,
            toolbar:{
	    ui:'normal',
            items:[
            {xtype:'spacer'},
            {
            text:'Clear',
	    ui:'action',
	    id:'clearFilter',
	    hidden:true,
            align:'right'},{
            iconCls:'delete',
	    ui:'decline',
	    id:'closeFilter',
	    align:'right'}
               ]
            },        
            
            
    
        
        
    },

});