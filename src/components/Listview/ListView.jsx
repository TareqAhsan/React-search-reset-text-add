import React from 'react'
import {ListGroup, ListGroupItem, CustomInput, Button } from 'reactstrap'
import PropTypes from 'prop-types'

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <ListGroupItem className='d-flex align-items-center'>
            <CustomInput
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
            >
            </CustomInput>
            <div className='mx-3'>
                <h3>{todo.text}</h3>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button className='ml-auto' color={todo.isComplete ? 'danger' : 'success'} onClick={()=> toggleComplete(todo.id)} >
                {todo.isComplete ? 'Completed' : 'Running'}
            </Button>
        </ListGroupItem>
    )
}
ListItem.propTypes = {
    todo:PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}

const ListView = ({todos,toggleSelect, toggleComplete}) =>{
    return (
        <ListGroup>
            {todos.map(todo => (
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ListGroup>
    )
}
ListView.propTypes = {
    todos:PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}
export default ListView
