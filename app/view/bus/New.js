Ext.define('OneBus.view.bus.New',{
	extend: 'Ext.view.View',
	alias: 'widget.newbuses',

	// store: '',
	
	initComponent: function() {
		Ext.apply(this, {
			id: 'new-buses-list',

			itemSelector: '.new-bus',
			itemId: 'contentBus',
			
			selModel: {
				deselectOnContainerClick: false
			},

			tpl: [
				'<tpl for=".">',
					'<div class="new-bus">',
						'<div>{description}</div>',
					'</div>',
				'</tpl>'
			],
			emptyText: 'No images available'
		});

		this.callParent(arguments);
	}
});