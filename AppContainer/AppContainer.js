/**
 * Created by ilukianov on 24.09.16.
 */
import React from 'react';
import DataTable from './../DataTable/DataTable';
import data from './../data';

class AppContainer extends React.Component {
    constructor () {
        super();
        this.remove = this.remove.bind(this);
        this.state = {
            kids: {
                main: {
                    records: data
                }
            }
        };
    }

    render() {
        return <DataTable data={this.state} remove={this.remove}/>;
    }

    remove() {
        const path = Array.prototype.slice.call(arguments, 0, arguments.length - 3);
        this.removeItem(this.state.kids.main.records, path);
        this.setState(this.state);
    }

    removeItem(arr, path) {
        path.reduce((curArray, index, i) => {
            if (i === path.length - 1) {
                curArray.splice(index, 1);
            } else {
                const item = curArray[index];
                const relations = Object.keys(item.kids)[0];
                return item.kids[relations].records;
            }
        }, arr);
    }
}

export default AppContainer;
