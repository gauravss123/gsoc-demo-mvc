Ext.define('test.view.home',{
 extend:'Ext.Container',
 
    id:'home',
    xtype:'home',
    initialize : function() {
   	var prev= Ext.create('Ext.Button',{
	    text:'Search',
	    id:'goToDoc',
	    height:30,
	    left:'30%',
	    top:'50%',
	    //width:80
	 })
	
	var next= Ext.create('Ext.Button',{
	    text:'Tutorial',
	    height:30,
	    id:'help',
	    left:'40%',
	    
	    top:'50%',
	    //width:80
	 })
	var add=Ext.create('Ext.Button',{
	    text:'Add',
	    height:30,
	    id:'add',
	    left:'50%',
	    top:'50%',
	    //width:80
	 })
	var verify=Ext.create('Ext.Button',{
	    text:'Verify',
	    height:30,
	    id:'verify',
 	    left:'60%',
	    top:'50%',
	  //  width:80
	 })
	this.add(prev);
	this.add(next);
	this.add(add);
	this.add(verify);
        this.callParent();
     },
    

    config:{
    fullscreen:true,
  }
});