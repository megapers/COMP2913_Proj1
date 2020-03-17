import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class ItemTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {list: [], value: ''};
        this.options = {
            defaultSortName: 'item',  // default sort column name
            defaultSortOrder: 'timeStamp'  // default sort order
          };
    }

    componentDidUpdate(prevproperty){
        if(prevproperty.records.date !== this.props.records.date){
            this.state.list.push({
                item: this.props.records.data,
                timeStamp: this.props.records.date

            });
        }
    }


    render(){
        return(
            <div>
            <BootstrapTable ref='table' data={ this.state.list } striped hover>
                <TableHeaderColumn dataField='item' dataSort={ true }>Data</TableHeaderColumn>
                <TableHeaderColumn dataField='timeStamp' isKey={ true } dataSort={ true }>Date</TableHeaderColumn>
            </BootstrapTable>
        </div>
      );
    }
}

export default ItemTable;