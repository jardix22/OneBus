Ext.define('OneBus.view.onetoolbar.ChildrenElementsList', {
	extend: 'Ext.view.View',
	alias: 'widget.childrenelementslist',
	
	store: 'ChildrenElements',

	requires : [
        'Ext.ux.DataView.Draggable'
    ],

    mixins: { draggable: 'Ext.ux.DataView.Draggable' },

	
	initComponent: function() {

        this.mixins.draggable.init(this, {
            ddConfig: {
                ddGroup: 'ElementsDDGroup'                
            }
        });

        this.callParent(arguments);
    },

    itemSelector : 'div.children-element',

	itemTpl: '<div class="children-element">{name}</div>',
	emptyText: 'No hay Elementos',
});	