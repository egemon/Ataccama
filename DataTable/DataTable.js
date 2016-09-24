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
		let relations = Object.keys(this.props.data.kids)[0];
		if (!relations || !this.props.data.kids[relations].records.length) {
			return <div></div>;
		}
		let childrens = this.props.data.kids[relations].records;
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
			return <DataRow key={i} item={item} remove={this.props.remove.bind(this, i)}/>;
		});


		return (
			<div className="data-table">
				<div className="data-table__title">{relations}</div>
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