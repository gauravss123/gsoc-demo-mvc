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
      'home',
      'tut',
      'main'
      //'services'
    ],
    controllers:[
      'sortList',		      
      'mainTool',
      'filterTool',
      'listTool',
      'map',
      'sortList',
      'tut',
      'home'
      
    ],
    launch : function(){
	Ext.fly('appLoadingIndicator').destroy();
        map = Ext.create('test.view.mapPanel');
	maintool=Ext.create('test.view.main');
	Ext.Viewport.add(map);
  }
});