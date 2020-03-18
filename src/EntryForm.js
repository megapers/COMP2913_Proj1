import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import ItemTable from './ItemTable';


class EntryForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '', 
            records: [],
            new_item: {}
        };
        this.formRef = null;
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        if(this.state.value !== ''){

            const newItem = {
                data: this.state.value,
                date: new Date().toLocaleTimeString()
            };
            this.setState({new_item: newItem, value: ''});
            this.props.addRecord(newItem);
        }
        this.formRef.reset();
        event.preventDefault();
    }
      

    render(){
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
        </div>;

        return form;
    }
}

export default EntryForm;