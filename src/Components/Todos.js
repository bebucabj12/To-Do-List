import React from 'react';
import EditInput from './Editinput'

const Cards = (props) => {
    return (
        <div className="col-md-4">
          <div className="card mt-4 mb-4">
            <div className="card-header">
              <h3>{props.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {props.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{props.description}</p>
              <p><strong>{props.responsible}</strong></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" 
              onClick={() => props.removeTodo()}>Delete</button>
              <button className="badge badge-pill badge-danger ml-2">
                Edit
              </button>
            </div>            
          </div>
        </div>
    )
}

export default Cards;