Ext.define('OneBus.view.bus.Demos', {
	extend: 'Ext.DataView',
	alias: 'widget.demos',
	
	// width: 500,
	// height: 200,
	
	// requires: [
	// 	'OneBus.store.Demos'
	// ],
	
	// store: 'Demos',

	initComponent: function() {
		Ext.apply(this, {
			id: 'bussidebar',

			itemSelector: '.bus-element',
			itemId: 'cont',
			tpl: new Ext.XTemplate(
				'<tpl for=".">',
				
					'<tpl if="count &gt; 0">',
						'<table class="view_table">',    
							'<tpl for="numbers">',    
								'<tr>',
									'<td><div class="bus-element">{.}</div></td>',
								'</tr>',
							'</tpl>',    
						'</table>',
					'</tpl>',
				'</tpl>'
			),			
			emptyText: 'No images available'
		});

		this.callParent(arguments);
	}

});