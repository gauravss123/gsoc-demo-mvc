Ext.define('test.view.mainTool',{
 
    extend: 'Ext.Toolbar',
    requires:['Ext.field.Search'
      
    ],
    
   xtype: 'mainTool',
    config:{
        docked:'top',
        ui:'normal',
       border: 5,
       style: 'border-color: black; border-style: solid;',
    
       
        items:[
          {
            xtype: 'searchfield',
            placeHolder: 'Search...',
            left: true,
            id:'mainSearch',
             width: 200,
       
          },
          {
            xtype:'button',
            ui:'action',
            qtip:'click to display filtering options',
            text:'filter',
            id:'filter1',
	   action:'filters'
          },
          {xtype:'spacer'},
          {
            xtype:'button',
            ui:'action',
	    hidden:true,
            text:'showOnMap',
	    qtip:'click to display position on map',
            id:'showOnMap'
          },
          {
            xtype:'button',
            ui:'action',
            iconCls:'arrow_left',
	    qtip:'click to go back to previous screen',
            id:'back'
          },
          {
                xtype:'button',
                ui:'action',
                iconCls:'home',
	        
	        qtip:'click to go to home screen',
                id:'home'
          }
   
        ]
   
      }
 
 
});
 