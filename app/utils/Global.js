Ext.define('test.utils.Global', {
    singleton : true,
    alias : 'widget.global',
    config : {
            position: new google.maps.LatLng(37.44885, -122.158592),
            title:'Title'
    },
    constructor: function(config) {
        this.initConfig(config);
    }
})