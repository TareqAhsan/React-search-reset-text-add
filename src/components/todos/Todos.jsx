import React, { Component } from 'react'
import ListView from '../Listview/ListView'
import TableView from '../tableview/TableView'
import {Modal,ModalBody,ModalHeader} from 'reactstrap'
import Controller from '../controllers'
import TodoForm from '../create-todo-form/TodoForm'
import shortid from 'shortid'
 class Todos extends Component {

     state = {
         todos: [
             {
                 id: 'dhdkjashdk',
                 text: 'main  text 1',
                 description: 'simple description',
                 time: new Date(),
                 isComplete: false,
                 isSelect: false
             },
             {
                 id: 'dhdkjarershdk',
                 text: 'primary  text 2',
                 description: 'simple descript',
                 time: new Date(),
                 isComplete: false,
                 isSelect: false
             },
             {
                id: '1234rershdk',
                text: 'secondary  text 3',
                description: 'simple descript',
                time: new Date(),
                isComplete: false,
                isSelect: false
             },
             {
                id: '1234dhdkjarershdk',
                text: 'text  4',
                description: 'simple descript',
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
         ],
         isOpenTodo: false,
         term: '',
         view: 'list',
         filter:'all',
     };
     toggleSelect = (todoId) => {
         const todos = [...this.state.todos];
         const todo = todos.find(t => t.id === todoId)
         todo.isSelect = !todo.isSelect;
         this.setState({todos})
     }
     toggleComplete = (todoId) => {
         const todos = [...this.state.todos];
         const todo = todos.find(t => t.id == todoId)
         todo.isComplete = !todo.isComplete
         this.setState({todos})

     }
     handleSearch = value => {
         this.setState({
            term:value
        })
     }
     toggleForm = () => {
         this.setState({
             isOpenTodo: !this.state.isOpenTodo
         })
     }
     createTodo = (todo) => {
         todo.id = shortid.generate();
         todo.time = new Date();
         todo.isSelect = false;
         todo.isComplete = false;
         const todos = [todo, ...this.state.todos];
         this.setState({ todos });
         this.toggleForm();
     };
     handleFilter = (filter) => {
         this.setState({filter})
     }
     changeView = (event) => {
         this.setState({
             view:event.target.value
         })
     }
     clearSelected = () => {
         const todos = this.state.todos.filter(todo => !todo.isSelect);
         this.setState({ todos });
      }
     clearCompleted = () => {
         const todos = this.state.todos.filter(todo => !todo.isComplete)
         this.setState({ todos });
      }
     reset = () => {
         this.setState({
             filter: 'all',
             term: '',
             view: 'list',
             isOpenTodo: false
         });
      }
     performSearch = () => {
         return this.state.todos.filter(todo =>
             todo.text.toLocaleLowerCase()
                 .includes(this.state.term.toLocaleLowerCase()))
     }
     performFilter = (todos) => {
         const { filter } = this.state
         if (filter === 'completed') {
             return todos.filter(todo => todo.isComplete)
         } else if (filter === 'running') {
             return todos.filter(todo => !todo.isComplete)
         } else {
             return todos
         }
     }
     
     getView = () => {
         let todos = this.performSearch();
         todos = this.performFilter(todos);
         return this.state.view === 'list' ? (
            <ListView
            todos = {todos}
            toggleSelect={this.toggleSelect}
            toggleComplete = {this.toggleComplete}
        /> 
         ) : (
            <TableView
                todos= {todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
         )
     }
    render() {
        return (
            <div>
             <h1 className='display-4 mb-5 text-center'>Stack todos</h1>
                <Controller
                    term={this.state.term}
                    view={this.state.view}
                      toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    handleFilter={this.handleFilter}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                />
                <div>
                  {this.getView()}
                </div>
                
                <Modal
                    isOpen={this.state.isOpenTodo}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                        create new todo Item
                    </ModalHeader>
                    <ModalBody>
                        <TodoForm createTodo = {this.createTodo}/>
                    </ModalBody>
                </Modal>



            </div>
        )
    }
}

export default Todos

