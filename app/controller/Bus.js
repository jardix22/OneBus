Ext.define('OneBus.controller.Bus', {
	extend: 'Ext.app.Controller',
	stores: ['Buses', 'OldBuses', 'NewBuses'],
	models: ['Bus'],
 
	refs: [
		{ ref: 'old', selector: 'oldbuses'},
		{ ref: 'new', selector: 'newbuses'},
	],

	init: function() {
		console.log("Hii");
	},
	onLaunch: function() {
		console.log("Hii ++");
		this.getOld().bindStore(this.getOldBusesStore());
		this.getNew().bindStore(this.getNewBusesStore());
		
		// this.getDemo().bindStore(this.getDemosStore());
	}
});