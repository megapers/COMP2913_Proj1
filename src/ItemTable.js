import React from 'react';
import {BootstrapTable, TableHeaderColumn, DeleteButton } from 'react-bootstrap-table';
import EntryForm from './EntryForm';

class ItemTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {list: [], value: ''};
    }

    componentDidUpdate(prevproperty){
        if(prevproperty.record.date !== this.props.record.date){
            this.state.list.push({
                item: this.props.record.data,
                timeStamp: this.props.record.date

            });
        }
    }

    handleDeleteButtonClick = (onClick) => {
   
        onClick();
      }

    createCustomDeleteButton = (onClick) => {
        return (
          <DeleteButton
            btnText='Delete selected item'
            btnContextual='btn-danger'
            className='my-custom-class'
            btnGlyphicon='glyphicon-edit'
            onClick={ e => this.handleDeleteButtonClick(onClick) }/>
        );
      }

    render(){
        console.log(this.state.list);

        const options = {
            deleteBtn: this.createCustomDeleteButton
          };

        const selectRow = {
            mode: 'checkbox'
          };

        return(
            <div>
            <BootstrapTable selectRow={ selectRow } ref='table' data={ this.state.list } options={ options } striped hover deleteRow>
                <TableHeaderColumn dataField='item' dataSort={ true }>Data</TableHeaderColumn>
                <TableHeaderColumn dataField='timeStamp' isKey={ true } dataSort={ true }>Date</TableHeaderColumn>
            </BootstrapTable>
        </div>
      );
    }
}

export default ItemTable;