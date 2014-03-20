Ext.define('test.controller.filterTool', {
    extend: 'Ext.app.Controller',
config: {
        refs: {
            filterBut: '#closeFilter',
            
        },
        control: {
            filterBut: {
                tap: "closeFilter"
            }
        }
    },

    closeFilter: function(){
        console.log("closeBut tapped");
	Ext.getCmp('filterbar').setHidden(true);
    }
});