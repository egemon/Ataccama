require('./DataTable/DataTable.css');
require('./DataRow/DataRow.css');
import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store/store';
import DataTable from './DataTable/DataTable';
let root = {
	data: {
		test1: 'test1',
		test2: 'test2',
		test3: 'test3',
		test4: 'test4',
	},
	kids: {
		main: {
			records: [...store.getState().slice(0,3)]
		}
	}
};

ReactDOM.render(
	<DataTable data={root} isRoot={true}/>,
	document.getElementById('dataTable')
);
