import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'active'},
    {name: 'done', label: 'done'},
  ]

  render() {

    const {filter, onFilterChange} = this.props

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name
      const isClass = isActive ? 'btn-warning' : 'btn-outline-secondary'

      return (
        <button type="button"
          className={`btn ${isClass}`}
        key={name}
        onClick={() => onFilterChange(name)}>
          {label}
        </button>
      )
    })

    return (
      <div>
        {buttons}
      </div>
    );
  }

}
