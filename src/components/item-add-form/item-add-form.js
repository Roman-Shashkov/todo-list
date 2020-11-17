import React, { Component} from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {

    render () {
        return (
            <form className = "item-add-form d-flex ">
                <input type="text"
                    className = "form-control"
                    onChange={this.onLabelChange}
                placeholder ='Write Something' />

                <button className = 'btn btn-outline-secondary'
                onClick = { () => this.props.onItemAdded('hi')}>
                  Add
                </button>
            </form>
        )
    }

}
