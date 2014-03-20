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
    },
    showBack: function(){
        console.log("backBut tapped");
	Ext.create('Ext.Panel',{
	  modal:true,
	  hidden:true,
	  hideOnMaskTap: true,
	  html:'Back Button'
	}).showBy(Ext.getCmp('back')); 
      
    },
    onSearchKeyUp: function(field) {
            var value = field.getValue();
	    console.log(value);
            var store = Ext.getCmp('listDocs').getStore();
	    
           store.clearFilter( );

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(','),
                regexps = [],
                i, regex;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                regex = searches[i].trim();
                regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(regex.trim(), 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = search.test(record.get('firstName') + ' ' + record.get('lastName'));

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                return (regexps.length && matched.indexOf(true) !== -1);
            });
        }
    },
    showHome: function(){
        console.log("homeBut tapped");
	Ext.create('Ext.Panel',{
	  modal:true,
	  hidden:true,
	  hideOnMaskTap: true,
	  html:'Home Button'
	}).showBy(Ext.getCmp('home'));
    },   
    onSearchClearIconTap: function() {
       console.log('onSearchClearIconTap');
       Ext.getCmp('searchStore').clearFilter();
    },
});