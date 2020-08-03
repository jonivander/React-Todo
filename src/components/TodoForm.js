import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'; 

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemText: ''
        };
    };

    handleChanges = e => {
        this.setState({
            itemText: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.itemText);
        this.setState({
          itemText: ""
        });
      };

    render() {
        return (
            <Form className='form' onSubmit={this.handleSubmit}>
                <FormGroup>
                <Input
                    type="text"
                    name="item"
                    placeholder="What do you need to do?"
                    value={this.state.itemText}
                    onChange={this.handleChanges}
                />
                <Button className='btn' color='secondary' >Add to List</Button>
                </FormGroup>
            </Form>
        );
    }

}

export default TodoForm; 