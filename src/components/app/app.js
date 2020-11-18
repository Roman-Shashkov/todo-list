import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form'
import './app.css';

export default class App extends Component {

  maxId = 100

  state = {
    todoData: [],
    filter: 'all',
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

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
      return {
        todoData: newArr,
      }
    } )

  }

  toggleProperty (arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem =arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
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

