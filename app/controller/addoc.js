Ext.define('test.controller.addoc', {
    extend: 'Ext.app.Controller',
    
config: {
        refs: {
            filterBut: '#filter1',
	    tutBut:'#tutMain',
	    homeBut:'#homeMain',
	    service:'#serv',
	    state:'#state',
	    city:'#city',
	    listitem:'#addocList',
	    reset:'#reset',
	    save:'#save',
	    close:'#close'
	    
            
        },
        control: {
	  close:{
	   tap:'closePanel' 
	  },
	  save:{
	    tap:'handler',
	  },
    	   service:{
	     clearicontap: 'onSearchClearIconTap',
             keyup: 'onSearchKeyUp',
	     blur:'remove',
	     focus:function(){
	       this.show(1);
	    }},
	   reset:{
	     tap:'resetTap',
	  },
	   state:{
	     clearicontap: 'onSearchClearIconTap',
             keyup: 'onSearchKeyUp',
	     blur:'remove',
	     focus:function(){
	       this.show(2);
	    }},
	   city:{
	     clearicontap: 'onSearchClearIconTap',
             keyup: 'onSearchKeyUp',
	     blur:'remove',
	     focus:function(){
	       this.show(3);
	     }},
	  listitem:{
	    itemtap:'addValue',
	  }
    
	
    }},
    closePanel:function(){
      Ext.getCmp('addocPanel').setHidden(true);
    },
    handler: function() {
      var state=Ext.getCmp('state').getValue(),
      city=Ext.getCmp('city').getValue(),
      serv=Ext.getCmp('serv').getValue(),
      ans=Ext.getCmp('answer').getValue(),
      name=Ext.getCmp('name').getValue(),
      authans=test.utils.Global.getAuthAnswer();
      console.log(ans+' '+authans);
                            if(state!=null&&city!=null&&serv!=null&&ans!=null&&ans==authans&&name!==null)
			    {var form = Ext.getCmp('addocPanel');

                            // Mask the form
                            form.setMasked({
                                xtype: 'loadmask',
                                message: 'Saving...'
                            });

                            // Put it inside a timeout so it feels like it is going to a server.
                            setTimeout(function() {
                                if (form.user) {
                                    // Call the updateRecord method of formpanel with the user record instance. This will update the user record
                                    // with the latest values.
                                    form.updateRecord(form.user, true);
                                }

                                // Unmask the formpanel
                                form.setMasked(false);
                            }, 1000);
			      
			    }
			    else if(ans!=authans)
			      Ext.Msg.alert('Answer is wrong');
			    else
			      Ext.Msg.alert('All fields are necessary');
			    
			    this.resetTap();
			    var num=Ext.data.amf.XmlEncoder.randomInt(1,8);
			    src='resources/photos/verify'+num;
			    Ext.getCmp('authImg').setSrc(src);
			    test.utils.Global.setAuthAnswer(num);
                        },
    resetTap:function(){
      Ext.getCmp('state').setValue('');
      Ext.getCmp('city').setValue('');
      Ext.getCmp('serv').setValue('');
      
      Ext.getCmp('answer').setValue('');
      Ext.getCmp('name').setValue('');
      Ext.getCmp('gov').setChecked(true);
    },
    addValue: function(listDocs,index,target,record){
       var id=test.utils.Global.getId(),
       ins=record.get('Serv');
       if(id==1)
       {var value= Ext.getCmp('serv').getValue();
       var match = value.split(','),
	     
	     finalVal='',
	     len=match.length;
       
	if(!(Ext.Array.contains(match,ins))){
	  match[len-1]=ins;
	  for(i=0;i<len;i++)
	    finalVal=finalVal+match[i]+', ';
	  Ext.getCmp('serv').setValue(finalVal);
	  
	}}
	else if(id==2)
	  Ext.getCmp('state').setValue(ins);
	else
	  Ext.getCmp('city').setValue(ins);
	
      
    },
    show:function(id){
      test.utils.Global.setId(id);
      var num=test.utils.Global.getSet();
      //if(Ext.getCmp('addocList')==undefined)
      test.utils.Global.setStoreName(id);
      if(num==0)
      {
	lis=Ext.create('test.view.addocList');
	num=1;
	
      }
      if(id==1)
	{Ext.Viewport.add(lis).showBy(Ext.getCmp('serv'),'tr-br');
	store=Ext.create('test.store.addocStore');
	  lis.setStore(store);
	  
	}
	else if (id==2){
	  Ext.Viewport.add(lis).showBy(Ext.getCmp('state'),'tr-br');
	store=Ext.create('test.store.stateStore');
	  lis.setStore(store);}
	else{
	  Ext.Viewport.add(lis).showBy(Ext.getCmp('city'),'tr-br');
	  store=Ext.create('test.store.cityStore');
	  lis.setStore(store);
	}
	
      test.utils.Global.setSet(num);
      Ext.getCmp('addocList').setHidden(false);
    },
    
    onSearchKeyUp: function(field) {
     
	    var value = field.getValue();
	
            var store = Ext.getCmp('addocList').getStore();
	    console.log(store);
           store.clearFilter();

        if (value) {
            var match = value.split(','),
                regexps = [],
		len=match.length,
                i, regex;
	  
	        searches=match[len-1];
		
		console.log(searches);
		console.log(searches.length);
	    if (searches){
                //if (!searches[i]) continue;

                regex = searches.trim();
                regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

                regexps.push(new RegExp(regex.trim(), 'i'));
            }

            store.filter(function(record) {
                var matched = [];

                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = search.test(record.get('Serv'));

                    matched.push(didMatch);
                }

                return (regexps.length && matched.indexOf(true) !== -1);
            });
        }
    },   
    onSearchClearIconTap: function() {
       
       Ext.getCmp('addocList').getStore().clearFilter();
    },
    remove:function(){
      
      Ext.getCmp('addocList').setHidden(true);
    }
});