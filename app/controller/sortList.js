Ext.define('test.controller.sortList', {
    extend: 'Ext.app.Controller',
    
config: {
        refs: {
           sortFname: '#sortFirstName',
	   sortLname: '#sortLastName',
	   sortState: '#sortState',
	   sortCity: '#sortCity',
            
        },
        control: {
            sortFname: {
                
		check: function(){
		    this.group('fname');
		},

		
		
            },
	   sortLname: {
                
		check: function(){
		  this.group('lname');
		}

		
            },
	   sortState: {
                
		check:function(){
		  this.group('state');
		}

			
            },
	   sortCity: {
                
		check: function(){
		  this.group('city');
		}


		
            },
        },
    },
    group:function(name){
      store = Ext.getCmp('listDocs').getStore();
      if(name=='fname')
      {store.setGrouper( function (item) {
             return item.get('firstName')[0];
                } );
      }
      else if(name=='lname')
      {store.setGrouper( function (item) {
             return item.get('lastName')[0];
                } );
      }
      else if(name=='state')
      {store.setGrouper( function (item) {
             return item.get('State');
                } );
      }
      else if(name=='city')
      {store.setGrouper( function (item) {
             return (item.get('State')+' '+item.get('City'));
                } );
      }
    },
});