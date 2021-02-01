import { Button } from 'bootstrap'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Form, FormGroup,Label,Input } from 'reactstrap'
class TodoForm extends Component {
    state = {
        text: '',
        description:'',
    }
    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.createTodo( this.state )
        event.target.reset()
        this.setState({text:'',description:''})
    }
     
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter Text</Label>
                    <Input
                        placeholder='do some code'
                        name='text'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>DEscribe your text</Label>
                    <Input
                        placeholder='write some short description'
                        type='textarea'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type='submit'>create Task</Button>
            </Form>
           
        )
    }
}
TodoForm.propTypes = {
     createTodo:PropTypes.func.isRequired,
}

export default TodoForm
