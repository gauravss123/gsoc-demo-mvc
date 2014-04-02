Ext.define("test.view.infoDisplay", {
    extend:'Ext.Panel',
    requires:['Ext.form.FieldSet'],
//    fullscreen: true,

    xtype:'infodis',
    initialize : function() {
        this.callParent();
        

    },
    

    config:{
      id:'docInfoPanel',
      hidden:true,
      items:[{
      xtype:'fieldset',
      title: 'Doctor Information',
	    //hidden:true,
	    id:'docInfo',
            
      items:[
        {
                    xtype: 'textfield',
                    label: "Doctor's Name",
		    id:'docName',
                    
                    readOnly:true,
                    
                },
		{
                    xtype: 'textfield',
                    label: "State",
		    id:'docState',
                    
                    readOnly:true,
                    
                },
		{
                    xtype: 'textfield',
                    label: "City",
		    id:'docCity',
                    
                    readOnly:true,
                    
                },
		{
                    xtype: 'textfield',
                    label: "Services Offered",
		    id:'docServOff',
                    
                    readOnly:true,
                    
                }, 	
		{
                    xtype: 'textfield',
                    label: "Government Employee",
		    id:'docGovEmp',
                    
                    readOnly:true,
                    
                },
      ]}
    ]
    },

});