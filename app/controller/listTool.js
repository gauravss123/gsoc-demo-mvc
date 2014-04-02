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
      var body2 = "Doctor Name : Dr."+record.get('firstName')+" "+record.get('lastName')+" State :"+record.get('State')+" City :"+record.get('City')+" Pharmacy :"+record.get('Pharmacy')+" Ambulance :"+record.get('Ambulance')+" Government Employee:"+record.get('Government');  
      Ext.getCmp('clearFilter').setUi('action');
      Ext.getCmp('docName').setValue('Dr. '+record.get('firstName')+' '+record.get('lastName'));
      Ext.getCmp('docCity').setValue(record.get('City'));
      Ext.getCmp('docState').setValue(record.get('State'));
    
      var serv = '';
      if(record.get('Pharmacy')=='y')
	serv=serv+'Pharmacy, ';
	
      if(record.get('Ambulance')=='y')
      	serv=serv+'Ambulance, ';
      
      if (serv=='')
	serv='None';
      else
	serv=serv.slice(0,-2);
      if(record.get('Government')=='y')
      	Ext.getCmp('docGovEmp').setValue('Yes');
      else
	Ext.getCmp('docGovEmp').setValue('No');
      Ext.getCmp('docServOff').setValue(serv);
      Ext.getCmp('docInfo').setHidden(false);
      
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
      
      map=Ext.getCmp('maps');
      console.log(map.getItems());
      Ext.getCmp('mapDis').remove(map);
      map=Ext.create('test.view.map');
      Ext.getCmp('mapDis').setItems(map);
    
      
      
    }
});