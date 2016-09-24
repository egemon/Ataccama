/**
 * Created by ilukianov on 22.09.16.
 */
import { createStore } from 'redux';
import data from './../data';
const router = (state = data, action) => {
	switch (action.type) {
		case 'TOGGLE_VIEW':
			break;
		case 'DELETE_ROW':
			break;
	}
	return state;
};

export default createStore(router);