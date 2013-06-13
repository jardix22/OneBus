Ext.define('OneBus.controller.OneToolBar', {
	extend: 'Ext.app.Controller',

	refs: [
		{
			ref: 'elementsList',
			selector: 'elementslist'
		},
		{
			ref: 'childrenElementsList',
			selector: 'childrenelementslist'
		}

	],
	
	init: function() {
		this.control(
			{
				'elementslist': {
					selectionchange: this.onElementSelect
				}
			}
		);

		this.application.on(
			{
				elementstart: this.onElementStart,
				scope: this
			}
		);
	},
	
	stores: ['Elements', 'ChildrenElements'],

	onLaunch: function() {
		var elementsStore = this.getElementsStore();

		elementsStore.load ({
			callback: this.onElementsLoad,
			scope: this
		});
	},

	onElementsLoad: function () {
		var elementsList = this.getElementsList();
		elementsList.getSelectionModel().select(0);
	},

	onElementSelect: function (selModel, selection) {
		this.application.fireEvent('elementstart', selection[0]);
	},

	onElementStart: function (element) {
		var store = this.getChildrenElementsStore();
		
		store.load({
			callback: this.onChildrenElementsLoad,
			params: {
				element: element.get('id')
			},
			scope: this
		});		
	},

	onChildrenElementsLoad: function (songs, request) {
		var store = this.getChildrenElementsStore();
		
		store.clearFilter();
		store.filter('father_id', request.params.element);
		store.sort('name', 'ASC');
		// console.log("Boom..!!");
	}
});