import React, { Component } from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form'
import './app.css';
<<<<<<< HEAD
import storage from '../../utils/storage'
=======
import storage from '../../utils/storage';
>>>>>>> 28232b6f53f11223eb75b448231aa5bc6606b0f5

export default class App extends Component {

  maxId = 0

  state = {
<<<<<<< HEAD
    todoData: storage.get('todo') || [],
=======
    todoData: storage.get('todolist') || [],
>>>>>>> 28232b6f53f11223eb75b448231aa5bc6606b0f5
    filter: 'all',
  }

  createTodoItem(label) {
<<<<<<< HEAD
    this.maxId +=1;
=======
    this.maxId += 1;
>>>>>>> 28232b6f53f11223eb75b448231aa5bc6606b0f5
    return {
      label,
      important: false,
      done: false,
      id: this.maxId,
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 28232b6f53f11223eb75b448231aa5bc6606b0f5
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];
<<<<<<< HEAD

      storage.set('todo', newArray)

=======
      storage.set("todolist", newArray);
>>>>>>> 28232b6f53f11223eb75b448231aa5bc6606b0f5
      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)
<<<<<<< HEAD

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ]
      storage.set('todo', newArr)
      this.setState({todoData : newArr})
    } )

=======
    const newArr = [
      ...this.state.todoData,
      newItem
    ];
    storage.set("todolist", newArr);
    this.setState ({todoData: newArr})
>>>>>>> 28232b6f53f11223eb75b448231aa5bc6606b0f5
  }

  toggleProperty (arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem =arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    const newArr = [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
<<<<<<< HEAD
    storage.set ('todo', newArr)
    return newArr
=======
    storage.set("todolist", newArr);
    return newArr;
>>>>>>> 28232b6f53f11223eb75b448231aa5bc6606b0f5
  }

  onToggleImportant = (id) => {
    this.setState (({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    }) 
  }

  onToggleDone = (id) => {
    this.setState (({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })  
  }

  onFilterChange = (filter) => {
    this.setState({filter});
  }

  filter (items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }
  
  render () {

    const {todoData, filter} = this.state;
    const visibleItems = this.filter(todoData, filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;


    return (
      <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} /> 
        <div className="top-panel d-flex">
          <ItemStatusFilter 
          filter={filter}
          onFilterChange={this.onFilterChange}/>
        </div>
        <TodoList
        todos={visibleItems} 
        onDeleted = {this.deleteItem}
        onToggleImportant = {this.onToggleImportant}
        onToggleDone={this.onToggleDone}  />
        <ItemAddForm onItemAdded = {this.addItem}/>
      </div>
    );
  }
};

