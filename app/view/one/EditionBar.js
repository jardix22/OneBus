Ext.define('OneBus.view.one.EditionBar', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.editionbar',
	items: [
		{
			xtype: 'splitbutton',
			text: 'Buses',
			width: 100,
			itemId: 'buttonBuses',


			menu: {
				items: [
					{
						itemId: 'new',
						text: 'Nuevo'
					},
					{
						itemId: 'open',
						text: 'Abrir'						
					},
					{ 
						itemId: 'save',
						text: 'Guardar' 
					},
					{
						itemId: 'quit',
						text: 'Cerrar' 
					}
				]
			}
		}
	]
});