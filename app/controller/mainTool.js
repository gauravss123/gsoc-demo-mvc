Ext.define('test.controller.mainTool', {
    extend: 'Ext.app.Controller',
    requires:['Ext.Panel',
      'Ext.data.Store'
    ],
config: {
        refs: {
            filterBut: '#filter1',
	    backBut:'#back',
	    homeBut:'#home',
	    search:'#mainSearch',
            
        },
        control: {
            filterBut: {
                tap: "showFilter"
            },
        
            backBut: {
                tap: "showBack"
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
        console.log(this);
	Ext.getCmp('filterbar').setHidden(false);
	if(Ext.getCmp('listDocs').getStore().isFiltered())
	{Ext.getCmp('clearFilter').setHidden(false);
	  Ext.getCmp('clearFilter').setUi('action');
	}
      
    },
    showBack: function(){
       
	Ext.create('Ext.Panel',{
	  modal:true,
	  hidden:true,
	  hideOnMaskTap: true,
	  html:'Back Button'
	}).showBy(Ext.getCmp('back')); 
      
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
        
	Ext.create('Ext.Panel',{
	  modal:true,
	  hidden:true,
	  hideOnMaskTap: true,
	  html:'Home Button'
	}).showBy(Ext.getCmp('home'));
    },   
    onSearchClearIconTap: function() {
       
       Ext.getCmp('listDocs').getStore().clearFilter();
    },
});