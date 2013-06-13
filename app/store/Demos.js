Ext.define('OneBus.store.Demos', {
	extend: 'Ext.data.Store',
    model: 'OneBus.model.Demo',
    
    storeId : 'viewStore',

    listeners: {
        datachanged: function(store) {
            
            store.data.each(function(record) {
                record.data.groupedNumbers = [];

                for (var i = 0, j = 0; i < record.data.count; ++i, j = i % record.data.maxrows) {
                    console.log( "i: " + i + ", j: " + j);
                    
                    record.data.groupedNumbers[j] = record.data.groupedNumbers[j] || { row: j, numbers: [] };
                    record.data.groupedNumbers[j].numbers.push(record.data.numbers[i]);

                }
                console.log(record.data.groupedNumbers );
            });
        }
    },

    proxy: {
		type: 'ajax',
		api: {
			read: 'data/demos.json'
		},
		reader: {
			type: 'json',
			root: 'demos'
		}
	}

	// data    : [
	// 	{count: '7', maxcolumns: '10', maxrows: '5', numbers: ['100','200','300','400','500','600','70 < 0']}
	// ],
});
