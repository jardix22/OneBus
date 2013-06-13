 	Ext.define('OneBus.controller.One', {
	extend: 'Ext.app.Controller',
	
	requires: [
		'OneBus.view.bus.Doom',
		'OneBus.view.bus.Demos',
	],
	
	views: [
		'one.EditWindow',
		'one.WorkArea',
		'one.ToolsBar',
		'one.EditionBar'
	],

	refs: [
		{
			ref: 'new', selector: 'newbuses'
		}
	],

	stores: ['Demos'],

	init: function () {
		Ext.create('OneBus.view.one.EditWindow', {}).show();

		this.control({
			'editionbar > #buttonBuses menuitem#new': {
				click: this.onAddButton
			},
			'newbuses': {
				selectionchange: this.onNewBusesSelection
			}
		});
	},
	
	onAddButton: function () {
		Ext.getCmp('e-window').show();
	},

	onNewBusesSelection: function (view, records) {
		// console.log(view);
		// console.log(records);
		// console.log(records[0]);
		
		// Oculto Ventana
		Ext.getCmp('e-window').hide();
		this.onLoadWorkArea(records[0]);
	},

	onLoadWorkArea: function(bus, b, c) {
		var area = Ext.getCmp('content-area');
		var workarea = Ext.create('OneBus.view.one.WorkArea');
		
		workarea.loader.load(
			{
				params: { index_bus: bus.get('id') },
				callback: function (argument) {
					cells = Ext.query('#work-place .cell');
					Ext.each(cells, function (cell) {
						var DD = Ext.create('Ext.dd.DDTarget', cell, 'ElementsDDGroup');

						// console.log(DD);
					});
					// console.log(cells);
				}
			}
		);
		area.add(workarea);
	}
});