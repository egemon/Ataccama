require('./DataTable/DataTable.css');
import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store/store';
import DataTable from './DataTable/DataTable';
let root = {
	data: {

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
