import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleInputChange(e) {
    const { value, name } = e.target;
    this.setState({
        [name]: value                        
        })
    }

handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
        title: '',
        responsible: '',
        description: '',
        priority: 'low'
        })    
    }

    render() {
        return (
            <div className="card mt-4 mr-2">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="title" 
                            onChange={this.handleInputChange}
                            className="form.control" 
                            value={this.state.title}
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="responsible" 
                            onChange={this.handleInputChange}
                            value={this.state.responsible}
                            className="form.control" 
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="description" 
                            onChange={this.handleInputChange}
                            value={this.state.description}
                            className="form.control" 
                            placeholder="Description"/>
                    </div>
                    <div className="form-group">
                        <select
                            name="priority" 
                            className="form.control"
                            value={this.state.priority} 
                            onChange={this.handleInputChange}
                            >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                            </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form> 
            </div>
        )
    }
}

export default Form;