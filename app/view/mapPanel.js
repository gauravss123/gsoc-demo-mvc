Ext.define('test.view.mapPanel',{
  extend:'Ext.Panel',
  requires:['Ext.Map',
    'test.view.map'
  ],
  xtype:'mapDis',
  config:{
	    
	    layout:'fit',
	    id:'mapDis',
	    height:400,
	    width:400,
	    
	    items:[
	      {xtype:'map'}
	    ],
	    hidden:true,
	    centered: true,
	    modal:true,
	    hideOnMaskTap:true
  },/*
    initialize:function(){
	this.callParent();
	this.setItems();
    }*/
  });
