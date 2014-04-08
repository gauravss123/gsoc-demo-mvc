Ext.define('test.view.home', {
    extend: 'Ext.tab.Panel',
    xtype: 'home',
    id:'homeView',
    config: {
        tabBarPosition: 'bottom',
	
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
		
                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: "Welcome to Doctor's Near Me"
                },
		{
		  xtype:'button',
		  docked:'bottom',
		  text:'Go To Application',
		  id:'goToAp',
		  
		}
		],
		
                html: [
                    "<center><h4>Welcome to demo for Doctor's Near Me</h4></center>",
                ].join("")
		
            }
        ]
    }
});
