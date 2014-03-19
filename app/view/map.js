Ext.define('test.view.maps',{
    extend:['Ext.Panel'],
    requires:['Ext.Map'],
    
    infowindow = new google.maps.InfoWindow({
    content: 'title'
    }),

                //Tracking Marker Image
    image = new google.maps.MarkerImage('resources/images/point.png',
       new google.maps.Size(32, 31),
       new google.maps.Point(0, 0),
       new google.maps.Point(16, 31)),
    shadow = new google.maps.MarkerImage('resources/images/shadow.png',
        new google.maps.Size(64, 52),
        new google.maps.Point(0, 0),
        new google.maps.Point(-5, 42));


    var mapdemo = Ext.create('Ext.Map', {
         id: 'hi',
         mapoptions: {
                center: position,
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                navigationControl: true,
                navigationControlOptions: {
                style: google.maps.NavigationControlStyle.DEFAULT
                    }
                },
         plugins: [
            new Ext.plugin.google.Tracker({
            trackSuspended: true, //suspend tracking initially
            allowHighAccuracy: false,
            marker: new google.maps.Marker({
            position: position,
            title: 'My Current Location',
            shadow: shadow,
            icon: image
                })
            }),
            new Ext.plugin.google.Traffic()
            ],

          listeners: {
             maprender: function(comp, map) {
             var marker = new google.maps.Marker({
             position: position,
             title: title,
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
   x   })
});