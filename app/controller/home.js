Ext.define('test.controller.home', {
    extend: 'Ext.app.Controller',
    requires:['Ext.MessageBox'],
config: {
        refs: {
           go: '#goToAp',
	   forward: '#next',
	   skip: '#skip',
	   home: '#home',
	   back:'#carBack'
            
        },
        control: {
            go: {
                
		tap: function(){
		        Ext.Msg.confirm('Tutorial', 'Do you want to start tutorial',  function(btn){
			if (btn == 'yes'){	
			 Ext.getCmp('mainView').setActiveItem(Ext.getCmp('tutorial'));   // which page wants to redirect
			 }
			 else{
			  Ext.getCmp('mainView').setActiveItem(Ext.getCmp('maincon')); 
			 }
		    });
		  }
		},
            },
	},
    });