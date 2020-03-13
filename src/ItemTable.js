import React from 'react';

class ItemTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {list: [], value: ''}
    }

    componentDidUpdate(prevproperty){
        
        if(prevproperty.records !== this.props.records){
            //this.state.list.push(this.props.records);
           this.setState({value: this.props.value});

            console.log(this.state.value);
        }

    }

    render(){
        
       return this.state.list;
    }

}

export default ItemTable;