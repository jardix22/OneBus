Ext.define('OneBus.view.Viewport', {
	extend: 'Ext.container.Viewport',

	requires: [
		'OneBus.view.one.EditionBar',
		'OneBus.view.one.WorkArea',
		'OneBus.view.one.ToolsBar',

		'OneBus.view.onetoolbar.ElementsList',
		'OneBus.view.onetoolbar.ChildrenElementsList'
	],

	layout: 'fit',

	initComponent: function() {
		this.items = {
			xtype: 'panel',
			dockedItems: [
				{
					dock: 'top',
					xtype: 'editionbar'
				},
				{
					dock: 'bottom',
					xtype: 'panel',		
					height: 150,
					title: 'Barra de Herramientas',
					
					layout: {
						type: 'hbox',
						align: 'stretch'
					},

					items: [
						{
							xtype: 'elementslist',
							flex: 1
						},
						{
							xtype: 'container',							
							flex: 5,

							items: [
								{
									xtype: 'childrenelementslist',
									flex: 1,
									margin: '5 5 5 15'
								}
							]
						}
					]	
				}
			],
			
			items: [
				{
					xtype: 'container',
					id: 'content-area',
					margin: 10
				}
			]
		};

		this.callParent();
	}
});