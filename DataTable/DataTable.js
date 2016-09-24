/**
 * Created by ilukianov on 24.09.16.
 */
import React from 'react';
import DataRow from '../DataRow/DataRow';

class DataTable extends React.Component {
	constructor (props){
		super(props);
	}

	render(){
		let title = Object.keys(this.props.data.kids)[0];
		if (!title) {
			return <div></div>;
		}
		let childrens = this.props.data.kids[title].records;
		let keys = Object.keys(childrens[0].data);

		let headers = ['+', '-', ...keys];
		let headersElements = headers.map( (columnTitle, i)=> {
			return (
				<div key={i}
				     className={"data-table__header-cell " + "data-table__header-cell--" + i}>
					{columnTitle}
				</div>
			);
		}) ;

		let rows = childrens.map((item, i) => {
			return <DataRow key={i} item={item}/>;
		});


		return (
			<div className="data-table">
				<div className="data-table__title">{title}</div>
				<div className="data-table__header-row">
					{headersElements}
				</div>
				<div className="data-table__data-container">
					{rows}
				</div>
			</div>
		);
	}
}

export default  DataTable;