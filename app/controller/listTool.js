Ext.define('test.controller.listTool', {
    extend: 'Ext.app.Controller',
config: {
        refs: {
            listDocs: '#listDocs',
            
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