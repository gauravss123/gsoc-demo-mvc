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
      'Ext.Img',
      'Ext.field.Radio',
      'Ext.data.amf.XmlEncoder'
      
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
      'main',
      'addoc',
      'addocList'
      
    ],
    controllers:[
      'sortList',		      
      'mainTool',
      'filterTool',
      'listTool',
      'map',
      'sortList',
      'tut',
      'home',
      'addoc'
      
    ],
    launch : function(){
	Ext.fly('appLoadingIndicator').destroy();
	map = Ext.create('test.view.mapPanel');
	docadd=Ext.create('test.view.addoc');
	maintool=Ext.create('test.view.main');
	Ext.Viewport.add(map);
	Ext.Viewport.add(docadd);
	
  }
});
