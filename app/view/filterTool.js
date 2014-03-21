Ext.define("test.view.filterTool", {
    extend:'Ext.NestedList',
    requires:['test.store.filterToolStore'],
    //fullscreen: true,
  
    xtype:'filterTool',
    initialize : function() {
        this.callParent();
      this.setStore(Ext.create("test.store.filterToolStore"));
      
    },


    config:{
	    title:'filters',
	    id:'filterbar',
	    width:200,
	   hidden:true,
	   height:Ext.Viewport.getHeight(),
	   
	    toolbar:{
	      title:'back',
	      ui:'normal'
	    },
	   items:[
	     
		    { 
		    xtype: 'toolbar', 
		    ui:'normal',
		    id:'sTool',
	            docked: 'bottom', 
		    items: [ 
			{ 
			  xtype: 'button', 
			  text:'Clear',
			  hidden:true,
			  ui:'action',
			  id:'clearFilter'
			
			},
			{xtype:'spacer'},
			{
			  xtype:'button',
			  iconCls:'delete',
			  ui:'decline',	
			  id:'closeFilter'
			}
    
		      ] 
		  }
	      ]
            
            
    
        
        
    },

});