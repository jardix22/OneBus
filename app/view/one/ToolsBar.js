Ext.define('OneBus.view.one.ToolsBar', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.toolsbar',
	
	title: 'Herramientas',
	tabPosition: 'bottom',
	height: 150,

	initComponent: function () {
		// console.log("Tolls");

		var itemslist  = { 
			'elements': 
			[
				{'name': 'Asientos'},
				{'name': 'Televisores'},
				{'name': 'Pisos'}
			]
		};

		(itemslist.elements).forEach(function (record) {
			console.log('Holas ' + record.name);
			
			// me.add({
			// 	// closable: !!closable,
			// 	html: 'Tab Body cosas',
			// 	iconCls: 'tabs',
			// 	title: record.name
			// }).show();
		});


		this.callParent(arguments);
	},

	// items: [
	// 	{
	// 		title: 'Asientos'
	// 	},
	// 	{
	// 		title: 'Televisores'
	// 	},
	// 	{
	// 		title: 'Pisos'
	// 	}
	// ]
});