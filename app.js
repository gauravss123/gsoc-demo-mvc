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
      'test.utils.Global'
      
    ],
    views:[
      'mainTool',
      'listTool',
      'filterTool'   ,
      'mainContainer',
      'map',
      'mapPanel'
    ],
    controllers:[
      
      'mainTool',
      'filterTool',
      'listTool',
      'map'
      
    ],
    launch : function(){
      
        map = Ext.create('test.view.mapPanel');
	maintool=Ext.create('test.view.mainContainer');
	Ext.Viewport.add(map);
  }
});