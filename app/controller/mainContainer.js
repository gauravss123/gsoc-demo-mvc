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
        
	Ext.getCmp('filterbar').setHidden(false);
    }
});