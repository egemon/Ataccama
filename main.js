require('./DataTable/DataTable.css');
require('./DataRow/DataRow.css');
require('./DataRow/icons.css');
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer/AppContainer';


ReactDOM.render(
	<AppContainer/>,
	document.getElementById('dataTable')
);
