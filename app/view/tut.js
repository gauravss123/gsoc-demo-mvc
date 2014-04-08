Ext.define('test.view.tut',{
 extend:'Ext.Container',
 requires:['Ext.carousel.Carousel',
   'Ext.Img'
],
    id:'tutorial',
    xtype:'tutorial',
    initialize : function() {
       items=[];

        //now we loop through each of the categories
        for (i = 1,ln = 7; i <= ln; i++) {
            //items = [];
                items.push({
                    xtype: 'image',
                    src: 'resources/photos/' + 'screen' + i + '.jpeg'
                });
            }
            
	var prev= Ext.create('Ext.Button',{
	    
	    id:'prev',
	    height:30,
	    left:0,
	    ui:'back',
	    top:'50%',
	    iconCls:'arrow_left',
	    disabled:true,
	    padding:0
	 })
	
	var next= Ext.create('Ext.Button',{
	    
	    height:30,
	    id:'next',
	    iconCls:'arrow_right',
	    right:0,
	    ui:'forward',
	    top:'50%',
	    padding:0
	    
	 })
	var tool=Ext.create('Ext.Toolbar',{
	  docked:'top',
	  items:[
	    {xtype:'spacer'},
	    {
	      xtype:'button',
	      text:'skip',
	      id:'skip'
	    },
	    {
	      xtype:'button',
	      iconCls:'home',
	      id:'home'
	    }
	  ]
	})
	   var carousel=Ext.create('Ext.carousel.Carousel',{
	     direction: 'horizontal',
	     directionLock: true,
	     id:'carouselTut',
	     items:items,
	  })
	   
	this.add(prev);
	this.add(next);
	this.add(tool);
	this.add(carousel);
        this.callParent();
     },
    

    config:{
    fullscreen:true,
    layout:'fit',
    hidden:true
  }
});