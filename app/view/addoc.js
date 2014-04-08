Ext.define('test.view.addoc',{
  extend:'Ext.Panel',
  initialize:function(){
    var num=Ext.data.amf.XmlEncoder.randomInt(1,8);
    src='resources/photos/verify'+num+'.jpeg';
    Ext.getCmp('authImg').setSrc(src);
    test.utils.Global.setAuthAnswer(num);
    console.log(test.utils.Global.getAuthAnswer());
  },
  xtype:'doctoradd',
  config:{
	    
                modal: true,
                height: '90%',
                width: '60%',
		layout:'vbox',
		centered: true,
		id:'addocPanel',
                hidden:true,
                hideOnMaskTap: true,
            
            items:[{
		id:'form',
                xtype: 'fieldset',
		scrollable:true,
                title: 'Doctor',
                instructions: 'Please enter the information above. Scroll to load more fields',
                flex:5,
		defaults: 
		{
                    required: true
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
			id:'name',
                        label: 'Name',
                      
                    },
                    {
                        xtype: 'textfield',
                        name: 'City',
                        label: 'City',
			id:'city'
                   
                    },
                    {
                        xtype: 'textfield',
                        name: 'State',
			label: 'State',
			id:'state'
                        
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Government Employee',
                        value: true,
			id:'gov',
                        checked:true
                    },
		    
                    {
                        xtype: 'textfield',
                        id: 'serv',
			label:'Services'    
                        
                    },
                ]
            },{
	      flex:1,
	      xtype:'panel',
	   layout:'hbox',
	   items:[{
	      border: '2 2 2 2',
		      style: 'border-color: black; border-style: solid;',
		     
	     flex:4,
	      xtype:'textfield',
	      id:'answer',
	      labelWrap:true,
	      labelWidth:'50%',
	      label:'Enter answer of operation in image',
	    },
		    {flex:2,
		      border: '2 2 2 0',
		      style: 'border-color: black; border-style: solid;',
		     
		      id:'authImg',
		      xtype:'image',
		      
		      width:'150',
		      height:'100'
		    }]},
		    {
		      xtype: 'toolbar',
		      docked: 'bottom',
		      scrollable: {
		      direction: 'horizontal',
		      directionLock: true
		      },
		      items: [
		      {
			text: 'Save',
                        ui: 'confirm',
			id:'save',
                        
		      },
		      {xtype:'spacer'},
		      {
			
                        text: 'Reset',
			id:'reset'
		      },
		      {
			    
                        text: 'Close',
			ui:'decline',
			id:'close'
		      }
		      ]
		    }]
	    
      }
});