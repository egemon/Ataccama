/**
 * Created by ilukianov on 24.09.16.
 */
import React from 'react';
import DataTable from '../DataTable/DataTable';

class DataRow extends React.Component {
	constructor (props){
		super(props);
		this.handlers = {
			'+': this.toggleView.bind(this),
			'-': props.remove
		};
		this.state = {
			hiddenClass: 'hidden'
		}
	}

	toggleView(){
		this.setState({
			hiddenClass: this.state.hiddenClass === 'hidden' ? '' :
				'hidden'
		});
	}

	render(){
		let item = this.props.item;
		let keys = Object.keys(item.data);
		let headers = ['+', '-', ...keys];
		let relations = Object.keys(item.kids)[0];
		let hasItems = relations && !!item.kids[relations].records.length;

		let cells = headers.map((key, j) => {
			switch (key) {
				case '+':
					let arrowHidden = relations && hasItems ? '' : 'arrow--hidden';
					return (
						<div key={key}
						     className="data-table__row-cell data-table__row-cell-icon">
							<div
								onClick={this.handlers[key]}
								className={`icon arrow arrow-${this.state.hiddenClass ? 'right' : 'down'} ${arrowHidden}`}>
							</div>
						</div>
					);
				case '-':
					return (
						<div key={key}
						     className="data-table__row-cell data-table__row-cell-icon">
							<div
								onClick={this.handlers[key]}
								className="icon cross">
							</div>
						</div>
					);
				default:
					return (
						<div key={key} className="data-table__row-cell">
							{item.data[key]}
						</div>
					);
			}
		});

		return (
			<div className="data-table__data-item">
				<div className="data-table__data-row">
				{cells}
				</div>
				<div className={"data-table__data-details " + this.state.hiddenClass}>
					<DataTable data={item} remove={this.props.remove}/>
				</div>
			</div>
		);

	}
}

export default  DataRow;