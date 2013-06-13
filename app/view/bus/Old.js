Ext.define('OneBus.view.bus.Old',{
	extend: 'Ext.view.View',
	alias: 'widget.oldbuses',
	
	initComponent: function() {
		Ext.apply(this, {
			id: 'sidebar',

			itemSelector: '.bus',
			itemId: 'contentBus',
			tpl: [
				'<div>Buses</div>',
				'<tpl for="."',
					'<div class="bus">{description}</div>',
				'</tpl>'
			],
			emptyText: 'No images available'
		});

		this.callParent(arguments);
	}
});