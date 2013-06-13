Ext.define('OneBus.model.Bus', {
	extend: 'Ext.data.Model',
	fields: [
		'id', 'description', 'is_template'
	],
	proxy: {
		type: 'ajax',
		url: 'data/buses.json',
		reader: {
			type: 'json',
			root: 'buses'
		}
	}
});