Ext.define('test.controller.mainTool', {
    extend: 'Ext.app.Controller',
    
config: {
        refs: {
            filterBut: '#filter1',
	    tutBut:'#tutMain',
	    homeBut:'#homeMain',
	    search:'#mainSearch',
	   
            
        },
        control: {
            filterBut: {
                tap: "showFilter"
            },
        
            tutBut: {
                tap: "tutor"
            },
    
            homeBut: {
                tap: "showHome"
            },
	   search:{
	     clearicontap: 'onSearchClearIconTap',
             keyup: 'onSearchKeyUp'
	  }
    
	
    }},
    
    showFilter: function(){
        
	Ext.getCmp('filterbar').setHidden(false);
	if(Ext.getCmp('listDocs').getStore().isFiltered())
	{Ext.getCmp('clearFilter').setHidden(false);
	  Ext.getCmp('clearFilter').setUi('action');
	}
      
    },
    tutor: function(){
       Ext.getCmp('mainView').setActiveItem(Ext.getCmp('tutorial')); 
    },
    onSearchKeyUp: function(field) {
            var value = field.getValue();
	
            var store = Ext.getCmp('listDocs').getStore();
	    
           store.clearFilter( );

        if (value) {
            var searches = value.split(','),
                regexps = [],
                i, regex;

            for (i = 0; i < searches.length; i++) {
                if (!searches[i]) continue;

                regex = searches[i].trim();
                regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

                regexps.push(new RegExp(regex.trim(), 'i'));
            }

            store.filter(function(record) {
                var matched = [];

                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = search.test(record.get('firstName') + ' ' + record.get('lastName'));

                    matched.push(didMatch);
                }

                return (regexps.length && matched.indexOf(true) !== -1);
            });
        }
    },
    showHome: function(){
        Ext.getCmp('mainView').setActiveItem(Ext.getCmp('homeView')); 
    },   
    onSearchClearIconTap: function() {
       
       Ext.getCmp('listDocs').getStore().clearFilter();
    },
});