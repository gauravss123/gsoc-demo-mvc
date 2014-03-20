Ext.define("test.store.filterToolStore", {
extend:'Ext.data.TreeStore',
requires:['test.model.filterToolModel'],
    
config:{
id:'filterStore',
model:'test.model.filterToolModel',
defaultRootProperty: 'items',
 root: {
        items: [
            {
                text: 'State',
                items: [
        
		      {text: 'Himachal Pradesh',leaf:true},
		      {text: 'Uttar Pradesh',leaf:true},
		      {text: 'Punjab',leaf:true},
		      {text: 'Delhi',leaf:true},
		      {text: 'Haryana',leaf:true},
	
		    ]
	    },
	   {        text:'City',
                    items: [
                              {text: 'City1',leaf:true},
	   		      {text: 'City2',leaf:true},
	   		      {text: 'City3',leaf:true},
	   		      {text: 'City4',leaf:true},
	   		      {text: 'City5',leaf:true},
	   		      {text: 'City6',leaf:true},
	   		      {text: 'City7',leaf:true},
                        ]
            },
           {         text: 'Services',
		      items:[
		              {text: 'Pharmacy',leaf:true},
	   		      {text: 'Ambulance',leaf:true},
		      ]
		      
           },
           {         text: 'Type',
		      items:[
		              {text: 'Government',leaf:true},
	   		      {text: 'Private',leaf:true},
		      ]
		      
           }
        ]
    }
 }
});