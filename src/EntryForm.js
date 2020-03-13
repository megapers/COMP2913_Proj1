import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import ItemTable from './ItemTable';


class EntryForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '', 
            records: []
        };
        this.formRef = null;
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
      }

      handleSubmit = (event) => {
        this.state.records.push({data: this.state.value, timeStamp: new Date()});
        console.log(this.state.records);
        this.formRef.reset();
        event.preventDefault();
      }
    
      

    render(){
        const valueList = this.state.records;
        const table = valueList.length > 0 ? <ItemTable value = {this.state.value}/> : '';

        const form = 
        <div>
            <Form ref={(ref) => this.formRef = ref} onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" onChange={this.handleChange} placeholder="Add an item" />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Add to shopping list
                </Button>
            </Form>
            <br/>
            {table}
            
        </div>;
        return form;
    }


}

export default EntryForm;