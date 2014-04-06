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
      'Ext.form.FieldSet',
      'test.utils.Global',
      'test.utils.Global',
      'Ext.field.Radio',
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
      'filterList'
    ],
    controllers:[
      
      'mainTool',
      'filterTool',
      'listTool',
      'map',
      'sortList'
      
    ],
    launch : function(){
	Ext.fly('appLoadingIndicator').destroy();
        map = Ext.create('test.view.mapPanel');
	maintool=Ext.create('test.view.mainContainer');
	Ext.Viewport.add(map);
  }
});