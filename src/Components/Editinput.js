// import React, { Component, Fragment } from 'react';

// class EditInput extends Component {
//     state={toggle: false}

//     toggle= () => {this.setState({toggle: !this.state.toggle})}


//     render() {
//         return(
//             <Fragment>
//                 <button onClick={this.toggle}>Editar</button>
//                 {
//                     (this.state.toggle)?
//                  <div>
//                      <input
//                      value={this.state.newTodo}
//                      type='text'
//                      onChange={this.handleChange('newTdo')}
//                  />
//                 <button onClick={() => this.props.handleEdit(this.props.index)}>Listo</button>
//                 }
//                  </div>
//                  :''
//                  }
//             </Fragment>
//             )  
//         }
//     }

// export default EditInput;
/*
en Redux el estado siempre es uno, y los componentes pueden modificar al estado. Ver redux Sagas. El storage seria basicamente el estado global.







*/