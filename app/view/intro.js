Ext.define("test.view.intro",{
   extend: 'Ext.Panel',
    xtype: 'main',

    config: {


        items: [
            {
		centered:true,
		
                html: [
                    "<h4>Welcome to Doctor's Near Me",
                    "Start by selecting doctor's name from the left,<br>",
                    "or filter results using filter tool, which can be<br>",
		    "made visible by clicking the 'filter' button at the top of page.</h4>"
                ].join("")
            }
        ]
    } 
  
});