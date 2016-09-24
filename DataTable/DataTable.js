/**
 * Created by ilukianov on 24.09.16.
 */
import React from 'react';
import store from '../Store/store';

class DataTable extends React.Component {
	constructor (props){
		super(props);
		this.handlers = {
			'+': this.toggleView.bind(this),
			'-': this.remove.bind(this)
		};
		this.state = {
			expandedClass: ''
		}
	}

	toggleView(){
		this.setState({
			expandedClass: this.state.expandedClass === 'data-table__data-details--expanded' ? '' :
			'data-table__data-details--expanded'
		});
		console.log('expand');
	}

	remove(){
		console.log('remove');
	}

	render(){
		let title = Object.keys(this.props.data.kids)[0];
		if (!title) {
			return <div></div>;
		}

		let keys = Object.keys(this.props.data.kids[title].records[0].data);

		let headers = ['+', '-', ...keys];
		let headersElements = headers.map( (columnTitle, i)=> {
			return (
				<div key={i}
				     className={"data-table__header-cell " + "data-table__header-cell--" + i}>
					{columnTitle}
				</div>
			);
		}) ;

		let rows = this.props.data.kids[title].records.map((item, i) => {
			let cells = headers.map((key, j) => {
				return (
					<div key={key}
					     className={"data-table__row-cell " + "data-table__row-cell--" + j}
					     onClick={this.handlers[key]}>
						{item.data[key] || key}
					</div>
				);
			});

			return (
				<div key={i} className="data-table__data-item">
					<div className="data-table__data-row">
					{cells}
					</div>
					<div className={"data-table__data-details " + this.state.expandedClass}>
						<DataTable data={item} />
					</div>
				</div>
			);
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