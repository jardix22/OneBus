Ext.define('OneBus.model.Demo', {
	extend: 'Ext.data.Model',
	fields  : [
		{name: 'count',			type: 'string'},
		{name: 'maxcolumns',    type: 'string'},
		{name: 'maxrows',       type: 'string'},
		{name: 'numbers',       type: 'array'}
	]
});