Ext.define('test.controller.filterTool', {
    extend: 'Ext.app.Controller',
    
config: {
        refs: {
            filterBut: '#closeFilter',
            filterList: '#filterbar',
	   clearFilter:'#clearFilter',
        },
        control: {
            filterBut: {
                tap: "closeFilter"
            },
	   filterList: {
	     leafitemtap:'showClearFilter',
	      
	  },
	   clearFilter: {
                tap: "clearFilter"
            }
        }
    },
    clearFilter:function(){
      Ext.getCmp('listDocs').getStore().clearFilter();
      Ext.getCmp('clearFilter').setHidden(true);
      filterlistitem=[];
      test.utils.Global.setFilterListItem(filterlistitem);
      filterlistfield=[];
      test.utils.Global.setFilterListItemField(filterlistfield);
      fil=Ext.getCmp('filterListField');
      fil.removeAll();
      fil.setHidden(true);
      
    },
    showClearFilter:function(filterlist, list, index, target, record){
      Ext.getCmp('clearFilter').setHidden(false);
      Ext.getCmp('filterListField').setHidden(false);
      Ext.getCmp('clearFilter').setUi('action');
      rec= record.get('text');
      fieldName=this.findFieldValue(rec);
      this.checkDuplicateFilter(fieldName,rec);
      this.filterStore();
    },
    filterStore:function(){
      store = Ext.getCmp('listDocs').getStore();
      filterlistitem=test.utils.Global.getFilterListItem();
      filterlistfield=test.utils.Global.getFilterListItemField();
      console.log(filterlistfield+' '+filterlistitem)
      var length = filterlistitem.length;
      for (var i = 0; i < length; i++) {
	
	     store.filter(filterlistfield[i],filterlistitem[i]);
	};
    },
    findFieldValue:function(rec){
      
	store = Ext.getCmp('listDocs').getStore();
	store.clearFilter();
	if (store.findRecord( 'State', rec  )!=null)
	  {
	    return('State');
	  }
	  else if (store.findRecord( 'City', rec  )!=null)
	  {
	    return('City');
	  }
	  else return -1;
	   
     },
     checkDuplicateFilter:function(fieldName,rec){
      stat=0;

       if(fieldName==-1&&rec=='Private')
	{
	  fieldName='Government';
	  rec='n'
	  
	}
	else if(fieldName==-1)
	{
	  fieldName=rec;
	  rec='y'
	  stat=1;
	}
      filterlistitem=test.utils.Global.getFilterListItem();
      filterlistfield=test.utils.Global.getFilterListItemField();
      if(Ext.Array.contains(filterlistfield,'City')&&fieldName=='State')
      {
	ind=Ext.Array.indexOf(filterlistfield,'City');
	Ext.Array.replace(filterlistitem,ind,1,rec);
	Ext.Array.replace(filterlistfield,ind,1,'State');
      }
      else if(Ext.Array.contains(filterlistfield,fieldName))
      {
	ind=Ext.Array.indexOf(filterlistfield,fieldName);
	Ext.Array.replace(filterlistitem,ind,1,rec);
      }
      else if (stat==1&&Ext.Array.contains(filterlistfield,fieldName))
      {
	
      }
      else
      {
	filterlistitem.push(rec);
	filterlistfield.push(fieldName);
	this.createFilter(fieldName);
      }
      test.utils.Global.setFilterListItem(filterlistitem);
      test.utils.Global.setFilterListItemField(filterlistfield);
     },
     createFilter:function(fieldName){
       filterlistitem=test.utils.Global.getFilterListItem();
      filterlistfield=test.utils.Global.getFilterListItemField();
      
     var radioField= Ext.create('Ext.field.Checkbox',{
		    
		    id:fieldName,
                    checked:true,
		    label:fieldName,
		    labelWidth:'70%',
		    listeners:{
		    change:function(){
		      store = Ext.getCmp('listDocs').getStore();
		      store.clearFilter();
		      ind=Ext.Array.indexOf(filterlistfield,fieldName);
		      fieldRec=filterlistitem[ind];
		      Ext.Array.remove(filterlistfield,fieldName);
		      Ext.Array.remove(filterlistitem,fieldRec);
		      console.log(filterlistitem+' '+filterlistfield);
		      test.utils.Global.setFilterListItem(filterlistitem);
		      test.utils.Global.setFilterListItemField(filterlistfield);
		      if(filterlistitem.length==0)
		      {Ext.getCmp('filterListField').setHidden(true);
			
		      }
		      else
		      {
			var length = filterlistitem.length;
		       for (var i = 0; i < length; i++) {
	         	  store.filter(filterlistfield[i],filterlistitem[i]);
			  }
			};
		      
		      this.destroy()
		      
		    }
            } 
	});
	Ext.getCmp('filterListField').add(radioField);
       
    },
    closeFilter: function(){
        
	Ext.getCmp('filterbar').setHidden(true);
    } ,
    group:function(record){
      return store.record.get('city');
    }
    
});