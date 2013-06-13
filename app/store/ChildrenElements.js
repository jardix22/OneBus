Ext.define('OneBus.store.ChildrenElements', {
	extend: 'Ext.data.Store',
	model: 'OneBus.model.Element',
	// autoLoad: true,

	proxy: {
		type: 'ajax',
		api: {
			read: 'data/chlidrenElements.json'
		},
		reader: {
			type: 'json',
			root: 'children_elements'
		}
	}
});