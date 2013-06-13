Ext.define('OneBus.view.one.WorkArea', {
	extend: 'Ext.Component',
	alias: 'widget.workarea',
	id: 'work-place',
	html: 'Holas',
	height: 200,

	loader: {
		url: 'plain/bus.html',
		contentType: 'html',
        loadMask: true,
	},

	initComponent: function() {
		this.callParent(arguments);
	}
});