/**
 * Created by ilukianov on 24.09.16.
 */
import React from 'react';
import DataTable from './../DataTable/DataTable'
import store from './../Store/store';

class AppContainer extends React.Component {
	constructor (props){
		super(props);
		this.remove.bind(this);
		this.state = {
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

		this.remove = this.remove.bind(this);
	}

	removeFromArray(arr, path){
		path.reduce((curArray, index, i) => {
			if (i === path.length - 1) {
				curArray.splice(index, 1);
				return arr;
			} else {
				let item = curArray[index];
				let relations = Object.keys(item.kids)[0];
				return item.kids[relations].records;
			}
		}, arr);
	}

	remove(){
		let path = Array.prototype.slice.call(arguments, 0, arguments.length - 3);
		console.log(arguments);
		console.log(path);
		let newState = JSON.parse(JSON.stringify(this.state));
		this.removeFromArray(newState.kids.main.records, path);
		this.setState(newState);
	}

	render(){
		return <DataTable data={this.state} remove={this.remove}/>;
	}
}

export default  AppContainer;