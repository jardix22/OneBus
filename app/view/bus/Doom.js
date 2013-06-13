Ext.define('OneBus.view.bus.Doom', {
	extend: 'Ext.view.View',
	alias: 'widget.doom',
	store: 'Demos',
	itemSelector: '.demos',
	// itemTpl: '<div>{count}</div>'

	tpl: new Ext.XTemplate(
	    '<tpl for=".">',
	        '<tpl if="count &gt; 0">',
	            '<table class="bus_table" style="border: 1px solid black">',
	                '<tpl for="groupedNumbers">',    
	                    '<tr>',
	                        '<tpl for="numbers">', 
								'<td><div class="bus-element">{.}</div></td>',

	                        '</tpl>',
	                    '</tr>',
	                '</tpl>',    
	            '</table>',
	        '</tpl>',
	    '</tpl>'
	)
});