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
        
		      {text: 'Himachal Pradesh',
			items:[
			 {text: 'City7',leaf:true},
			 {text: 'City8',leaf:true},
			 {text: 'City9',leaf:true},
			 {text: 'Himachal Pradesh',leaf:true},   
			]
			
		      },
		      {text: 'Uttar Pradesh',
			items:[
			 {text: 'City10',leaf:true},		  
	   		 {text: 'Uttar Pradesh',leaf:true},
			]
			
		      },
		      {text: 'Punjab',
			items:[
			  {text: 'City3',leaf:true},
			  {text: 'City4',leaf:true},
	   		  {text: 'Punjab',leaf:true},
			]
			
		      },
		      {text: 'Delhi',
			items:[
			  {text: 'City1',leaf:true},
	   		  {text: 'City2',leaf:true},
	   		  {text: 'Delhi',leaf:true},
			]
			
		      },
		      {text: 'Haryana',
			items:[
			  {text: 'City5',leaf:true},
			  {text: 'City6',leaf:true},
	   		  {text: 'Haryana',leaf:true},
			]
			
			
		      },
	
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