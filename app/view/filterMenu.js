Ext.define('test.view.filterMenu', {
    extend: 'Ext.Menu',
    requires: [
      'test.view.filterTool'
    ],
    initialize:function(){
      this.callParent();/*
      var filterlist= Ext.create('test.view.filterTool');
      this.add(filterlist);*/
      
    },
    config: {
        layout:'vbox',
        items: [
            
	    {xtype:'filterTool'},
	
        ]
    },
});