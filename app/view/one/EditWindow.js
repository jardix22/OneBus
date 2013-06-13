Ext.define('OneBus.view.one.EditWindow', {
	extend: 'Ext.Window',
	alias: 'widget.editwindow',

	title: 'Bienvenido a OneBus!',
	width: 500,
	height: 350,
	closable: false,
	resizable: false,
	draggable: false,
	layout: 'fit',
	modal: true,
	border: false,
	id: 'e-window',


	requires: [
		'OneBus.view.bus.Old',
		'OneBus.view.bus.New'
	],

	initComponent: function() {
		console.log("Modal");
		Ext.apply(this, {
			items: [
				{

					xtype: 'tabpanel',
					layout: 'fit',
					tabPosition: 'bottom',

					items: [
						{
							title: 'Nuevo',
							items: [
								{
									xtype: 'oldbuses'
								}
							]
						},
						{
							title: 'Abrir',
							items: [
								{
									xtype: 'newbuses'
								}
							]
						}
					]
				}
			]
		});
		this.callParent(arguments);
	}
});