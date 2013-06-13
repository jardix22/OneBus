Ext.define('OneBus.view.one.DropElements', {
	extend: 'Ext.dd.DropTarget',
	alias: 'widget.dropelements',

	ddGroup: 'ElementsDDGroup',

	initComponent: function() {
		console.log('DropZone');

		this.callParent(arguments);
	}
});