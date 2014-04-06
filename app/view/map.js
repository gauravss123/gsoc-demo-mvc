Ext.define('test.view.map',{    
  extend:'Ext.Map',  
  xtype:'map',
 config: {
   layout:'fit',
   id:'maps'
   
   
},
initialize: function() {
      this.callParent();
	//test.utils.Global.setPosition(new google.maps.LatLng(37.44885, -122.158592));   
        var position = test.utils.Global.getPosition();
	console.log(position+'view map');
         var   infowindow = new google.maps.InfoWindow({
                content: test.utils.Global.getTitle(),
            });

            //Tracking Marker Image
           var image = new google.maps.MarkerImage(
                'resources/images/point.png',
                new google.maps.Size(32, 31),
                new google.maps.Point(0, 0),
                new google.maps.Point(16, 31)
            );

            var shadow = new google.maps.MarkerImage(
                'resources/images/shadow.png',
                new google.maps.Size(64, 52),
                new google.maps.Point(0, 0),
                new google.maps.Point(-5, 42)
            );



         var mapdemo = Ext.create('Ext.Map', {
	   id:'mapdemo',
            mapOptions : {
                center : position,  //nearby San Fran
                zoom : 12,
                mapTypeId : google.maps.MapTypeId.ROADMAP,
                navigationControl: true,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.DEFAULT
                }
            },

            listeners: {
                maprender: function(comp, map) {
                    var marker = new google.maps.Marker({
                        position: position,
                        title : test.utils.Global.getTitle(),
                        map: map
                    });

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });

                    setTimeout(function() {
                        map.panTo(position);
                    }, 5000);
                }

            }
        });

        toolbar =Ext.create('Ext.Button', {         
	      docked:'top',
	      ui:'action',
	      //items:[{
		text:'Reset Position',
		iconCls: 'home',
		id:'goBackToMarker',
		handler:function(){
                 mapdemo.getMap().panTo(position);
		}
	});
	this.setItems(mapdemo);
	this.setItems(toolbar);
    }
});
