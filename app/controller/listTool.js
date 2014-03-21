Ext.define('test.controller.listTool', {
    extend: 'Ext.app.Controller',
config: {
        refs: {
            listDocs: '#listDocs',
            
        },
        control: {
            listDocs: {
                itemtap: "showDetail"
            }
        }
    },

    showDetail: function(listDocs,index,target,record){
      Ext.getCmp('clearFilter').setUi('action');
      rec= record.get('firstName');
      var body = "Doctor Name : Dr."+record.get('firstName')+" "+record.get('lastName')+"<br>State :"+record.get('State')+"<br>City :"+record.get('City')+"<br>Pharmacy :"+record.get('Pharmacy')+"<br>Ambulance :"+record.get('Ambulance')+"<br>Government Employee:"+record.get('Government');  
      var body2 = "Doctor Name : Dr."+record.get('firstName')+" "+record.get('lastName')+" State :"+record.get('State')+" City :"+record.get('City')+" Pharmacy :"+record.get('Pharmacy')+" Ambulance :"+record.get('Ambulance')+" Government Employee:"+record.get('Government');  
      Ext.getCmp('info').setHtml(body);
      Ext.getCmp('showOnMap').setUi('action').setHidden(false);
      var lat = record.get('lat');
      var long = record.get('long');
      position = new google.maps.LatLng(lat,long);
      console.log(position);
      test.utils.Global.setPosition(position);
      test.utils.Global.setTitle(body2);
      Ext.destroy('test.view.map');
      Ext.destroy(Ext.getCmp('mapdemo'));
      Ext.destroy(Ext.getCmp('goBackToMarker'));
      Ext.destroy(Ext.getCmp('closeMap'));
      map=Ext.getCmp('maps');
      Ext.getCmp('mapDis').remove(map);
      map=Ext.create('test.view.map');
      Ext.getCmp('mapDis').setItems(map);
    
      
      
    }
});