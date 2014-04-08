Ext.application({
  name:'test',  
  position: 'gmap variable',
   setPositoin: function(arg) {
        this.position= arg;
    },
getPostition: function() {
        return this.position;
    },
  requires: [
      
      'Ext.Panel',
      'Ext.Spacer',
      'test.utils.Global',
      'Ext.carousel.Carousel',
      'Ext.Img'
    
      
    ],
    views:[
      'mainTool',
      'listTool',
      'filterTool'   ,
      'mainContainer',
      'map',
      'infoDisplay',
      'mapPanel',
      'sortList',
      'intro',
      //'home',
        'tut',
      //'services'
    ],
    controllers:[
      'sortList',		      
      'mainTool',
      'filterTool',
      'listTool',
      'map',
      'sortList',
      'tut'
      
    ],
    launch : function(){
	Ext.fly('appLoadingIndicator').destroy();
        map = Ext.create('test.view.tut');
	//maintool=Ext.create('test.view.mainContainer');
	Ext.Viewport.add(map);
  }
});