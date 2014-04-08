Ext.define('test.view.addField',{
 extend:'Ext.Panel',
 requires:['Ext.form.FieldSet'],

    id:'addRec',
    xtype:'addRec',
    initialize : function() {
        this.callParent();
     },
    

    config:{
    layout:'fit',
    modal:true,
    hideOnMaskTap:true,
    height: '90%',
    width: '60%',
    centered: true,
    scrollable: {
    direction: 'vertical',
    directionLock: true
    },	
    items:[
      {
    xtype:'fieldset',
    title: 'Enter Detail',
    id:'docAddRec',
    items:[
      {
	xtype:'textfield',
	label:name,
	clearIcon:true,
      },
        {
                        xtype: 'selectfield',
                        label: 'City',
                        valueField: 'city',
                        
                        store: {
                            data: [
				{ city: 'Select City',},
                                { city: 'City1',},
                                { city: 'City2',},
	                        { city: 'City3',},
	                        { city: 'City4',},
	                        { city: 'City5',},
	                        { city: 'City6',},
	                        { city: 'City7',},
	                        { city: 'City8',},
	                        { city: 'City9',},
				{ city: 'City10',},
                            ]
                        }
                    },
	   {
                        xtype: 'selectfield',
                        label: 'State',
                        valueField: 'state',
                        
                        store: {
                            data: [
				{ state: 'Select state',},
                                { state: 'Delhi',},
				{ state: 'Haryana',},
				{ state: 'Himachal Pradesh',},
				{ state: 'Uttar Pradesh',},
				{ state: 'Punjab',},
                                ]
                        }
                    },
	   {
                        xtype: 'textfield',
                        label: 'services',
			id:'addFieldServices',
			placeHolder:'Enter Services offered'
                        /*
			 * use blur and focus events
			 */
                    },
	   {
	     xtype:'togglefield'
	     label:'Government Employee' 
	  }
    ]
    ]
    
    	
      }
    ]
  }
});