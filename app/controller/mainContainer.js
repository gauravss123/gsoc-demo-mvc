Ext.define('test.controller.mainTool', {
    extend: 'Ext.app.Controller',
config: {
        refs: {
            filterBut: '#filter1',
            
        },
        control: {
            filterBut: {
                tap: "showFilter"
            }
        }
    },

    showFilter: function(){
        console.log("FilterBut tapped");
	Ext.getCmp('filterbar').setHidden(false);
    }
});