Ext.define('OneBus.view.onetoolbar.ElementsList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.elementslist',
	
	store: 'Elements',
	hideHeaders: true,

	initComponent: function () {
		this.columns = [
			{
				dataIndex: 'name',
				flex: 1
			}
		],

		this.callParent(arguments);
	}
});