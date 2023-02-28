import React, { Component } from 'react'
import Header from './common/Header'
import './AddUser.css'
export class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      username: '',
      phone: ''
    }
    console.log(this.state);
    console.log("Constructor called - Add User");
  }

  inputChangeHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state);
    console.log("inputChangeHandler called!!! - Add User");
  }

  onFormSubmitted = (e) => {
    e.preventDefault();
    this.props.addUserHandler(this.state);
  }

  render() {
    console.log("Render called!!! - Add User");
    const { username, phone } = this.state;
    return (
      <div>
        <Header heading="Add User"></Header>
        <div className='component-body-container'>
          <button className='custom-btn'>Back</button>
          <form className='user-form' onSubmit={this.onFormSubmitted.bind(this)}>
            <label htmlFor='username' className='label-control'>Name: </label><br />
            <input id="username" type="text" className="input-control" name="username" onChange={this.inputChangeHandler}></input><br /><br />
            <label htmlFor='phone' className='label-control'>Phone: </label><br />
            <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangeHandler}></input><br /><br />
            <div className='user-info-container'>
              <span className='user-to-add-heading'>User to be added:</span><br />
              <span className='user-info'>Name: {username}</span><br />
              <span className='user-info'>Phone: {phone}</span>
            </div>
            <button type="submit" className='custom-btn add-btn'>Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddUser


// function program:


// import React, { useState } from 'react'
// import './styles.css'

// const App = () => {

//     const [formValues, setFormValues] = useState([{ name: "", email : ""}])

//     let handleChange = (i, e) => {
//         let newFormValues = [...formValues];
//         newFormValues[i][e.target.name] = e.target.value;
//         setFormValues(newFormValues);
//       }
    
//     let addFormFields = () => {
//         setFormValues([...formValues, { name: "", email: "" }])
//       }
    
//     let removeFormFields = (i) => {
//         let newFormValues = [...formValues];
//         newFormValues.splice(i, 1);
//         setFormValues(newFormValues)
//     }
    
//     let handleSubmit = (event) => {
//         event.preventDefault();
//         alert(JSON.stringify(formValues));
//     }

//     return (
//         <form  onSubmit={handleSubmit}>
//           {formValues.map((element, index) => (
//             <div className="form-inline" key={index}>
//               <label>Name</label>
//               <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
//               <label>Email</label>
//               <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
//               {
//                 index ? 
//                   <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
//                 : null
//               }
//             </div>
//           ))}
//           <div className="button-section">
//               <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
//               <button className="button submit" type="submit">Submit</button>
//           </div>
//       </form>
//     )
// }

// export default App;