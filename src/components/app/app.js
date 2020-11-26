import React, { Component } from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form'
import './app.css';
import storage from '../../utils/storage'

export default class App extends Component {

  maxId = 0

  state = {
    todoData: storage.get('todo') || [],
    filter: 'all',
  }

  createTodoItem(label) {
    this.maxId +=1;
    return {
      label,
      important: false,
      done: false,
      id: this.maxId,
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      storage.set('todo', newArray)

      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ]
      storage.set('todo', newArr)
      this.setState({todoData : newArr})
    } )

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
    storage.set ('todo', newArr)
    return newArr
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

    localStorage.setItem ('items',JSON.stringify());
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

