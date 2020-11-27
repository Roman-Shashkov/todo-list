import React, { Component} from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        label: '',
    }

    onLabelChange = (e) => {
        this.setState({ label: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { label } = this.state;
        this.setState({ label: '' });
        const cb = this.props.onItemAdded;
        cb(label);
    }

    render () {
        const emptyLabel = !this.state.label 
        return (
            <form 
                className = "item-add-form d-flex "
                onSubmit = {this.onSubmit}>

                <input type="text"
                    className = "form-control"
                    onChange={this.onLabelChange}
                    placeholder ='Write Something'
                    value={this.state.label} />

                <button type="submit" className = 'btn btn-outline-secondary'
                disabled = {emptyLabel}>
                  Add
                </button>
            </form>
        )
    }
}