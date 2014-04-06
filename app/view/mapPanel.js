Ext.define('test.view.mapPanel',{
  extend:'Ext.Panel',
  
  xtype:'mapDis',
  config:{
	    
	    layout:'fit',
	    id:'mapDis',
	    width:Ext.Viewport.getWidth(),
	    height:Ext.Viewport.getHeight(), 
	    
	    items:[
	      {xtype:'map'},
	      {xtype:'button',
		docked:'bottom',
		ui:'action',
		text:'Close',
		handler:function(){
		  Ext.getCmp('mapDis').setHidden(true);
		}
	      }
	    ],
	    hidden:true,
	    centered: true,
	    modal:true,
	    hideOnMaskTap:true
  },
  
});
