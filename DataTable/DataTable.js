/**
 * Created by ilukianov on 24.09.16.
 */
import React from 'react';
import DataRow from '../DataRow/DataRow';

class DataTable extends React.Component {
    constructor () {
        super();
    }

    render() {
        const relations = Object.keys(this.props.data.kids)[0];
        if (!relations || !this.props.data.kids[relations].records.length) {
            return null;
        }

        const childrens = this.props.data.kids[relations].records;
        const rows = this.getRows(childrens);

        const keys = Object.keys(childrens[0].data);
        const headers = this.getHeaders(keys);

        return (
            <div className="data-table">
                <div className="data-table__title">{relations}</div>
                <div className="data-table__header-row">
                    {headers}
                </div>
                <div className="data-table__data-container">
                    {rows}
                </div>
            </div>
        );
    }

    getHeaders (keys) {
        const headers = ['+', '-', ...keys];
        return headers.map((columnTitle, i) => {
            const iconClass = keys.includes(columnTitle) ? '' : 'data-table__header-cell-icon';

            return (
                <div key={i}
                     className={`data-table__header-cell ${iconClass}`}>
                    {columnTitle}
                </div>
            );
        });
    }

    getRows (childrens) {
        return childrens.map((item, i) => {
            return (
                <DataRow
                    key={i}
                    item={item}
                    remove={this.props.remove.bind(this, i)}
                />
            );
        });
    }


}

export default DataTable;
