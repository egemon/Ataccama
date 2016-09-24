/**
 * Created by ilukianov on 24.09.16.
 */
import React from 'react';
import DataTable from '../DataTable/DataTable';

class DataRow extends React.Component {
    constructor (props) {
        super(props);
        this.toggleView = this.toggleView.bind(this);
        this.state = {
            hiddenClass: 'hidden'
        };
    }

    render() {
        const item = this.props.item;
        const keys = Object.keys(item.data);
        const headers = ['+', '-', ...keys];
        const cells = headers.map(key => {
            switch (key) {
                case '+':
                    return this.getArrowButton(item, key);
                case '-':
                    return this.getRemoveButton(key);
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
                <div className={`data-table__data-details ${this.state.hiddenClass}`}>
                    <DataTable
                        data={item}
                        remove={this.props.remove}
                    />
                </div>
            </div>
        );

    }

    getArrowButton(item, key) {
        const relations = Object.keys(item.kids)[0];
        const hasItems = relations && item.kids[relations].records.length;
        const arrowHidden = relations && hasItems ? '' : 'arrow--hidden';
        return (
            <div key={key}
                 onClick={this.toggleView}
                 className="data-table__row-cell data-table__row-cell-icon">
             <div
                 className={`icon arrow arrow-${this.state.hiddenClass ? 'right' : 'down'} ${arrowHidden}`}>
             </div>
            </div>
        );
    }

    toggleView() {
        this.setState({
            hiddenClass: this.state.hiddenClass === 'hidden' ? '' : 'hidden'
        });
    }

    getRemoveButton(key) {
        return (
            <div key={key}
                 onClick={this.props.remove}
                 className="data-table__row-cell data-table__row-cell-icon">
                <div
                    className="icon cross">
                </div>
            </div>
        );
    }


}

export default DataRow;
