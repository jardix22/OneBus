Ext.define('OneBus.model.Element', {
	extend: 'Ext.data.Model',
	fields: ['id', 'name', 'father_id'],

	proxy: {
		type: 'ajax',
		url: 'data/elements.json',
		reader: {
			type: 'json',
			root: 'elements'
		}
	}
});