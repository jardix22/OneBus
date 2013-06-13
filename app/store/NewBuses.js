
Ext.define('OneBus.store.NewBuses', {
	extend: 'Ext.data.Store',
	model: 'OneBus.model.Bus',
	autoLoad: true,

	proxy: {
		type: 'ajax',
		api: {
			read: 'data/newbuses.json'
		},
		reader: {
			type: 'json',
			root: 'buses'
		}
	}
});