
Ext.define('test.view.filterMenu', {
    extend: 'Ext.Menu',
    requires: [
      'test.view.filterTool'
    ],

    config: {
        padding: 20,
	enter:'right',
	exit:'right',
        scrollable: true,
        defaults: {
            xtype : 'button',
            cls   : 'demobtn',
            margin: '10 0'
        },
        items: [
            {
            },
        ]
    },

    doSetHidden: function(hidden) {
        this.callParent(arguments);

        if (hidden) {
            Ext.Viewport.removeMenu('right');
            
        } else {
            
            Ext.Viewport.setMenu(this.menuForSide('right'), {
                side: 'right',
                reveal: true
            });
        }
    },

    menuForSide: function(side) {
        var items = [
            {		xtype:'list',
		      width:200,
		      height:500,//Ext.Viewport.getHeight(),
			itemTpl: '{title}',
		      data: [
			{ title: 'Item 1' },
			{ title: 'Item 2' },
		    { title: 'Item 3' },
		      { title: 'Item 4' }
		  ]    
	      
	    },
            
            {
                xtype: 'button',
                text: 'hide',
		docked:'bottom',
                iconCls: 'delete',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu(side);
                }
            }
        ];

        var className = 'Ext.Menu';
        if (Ext.theme.name == "Blackberry") {
        	if (['top', 'bottom'].indexOf(side) != -1) {
    	       	className = 'Ext.ux.ApplicationMenu';
	        } else {
	        	className = 'Ext.ux.ContextMenu';
	        }
        }

        return Ext.create(className, {
            items: items
        });
    }
});
