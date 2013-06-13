Ext.define('OneBus.store.OldBuses', {
	extend: 'Ext.data.Store',
	model: 'OneBus.model.Bus',
	autoLoad: true,

	proxy: {
		type: 'ajax',
		api: {
			read: 'data/oldbuses.json'
		},
		reader: {
			type: 'json',
			root: 'buses'
		}
	}
});