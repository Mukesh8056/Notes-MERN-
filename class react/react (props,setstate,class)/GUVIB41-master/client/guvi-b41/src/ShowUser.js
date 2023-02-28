import React, { Component } from 'react'
import './ShowUser.css';
import Header from './common/Header';

export class ShowUser extends Component {
  // users = [
  //   {
  //     id: 100,
  //     name: "Jack",
  //     ph: "8987898989",
  //   },
  //   {
  //     id: 101,
  //     name: "Jill",
  //     ph: "7676768978",
  //   },
  //   {
  //     id: 102,
  //     name: "Mary",
  //     ph: "9089787678"
  //   }
  // ]
  deleteHandler(msg) {
    alert("Display msg: " + msg);
  }

  constructor() {
    super();
    this.state = {
      userListToShow: []
    }
    console.log("Constructor called");
  }

  componentDidMount() {
    let newUser = {
      id: 1,
      name: "Guvi",
      phone: "45454545455"
    }
    let userList = this.state.userListToShow;
    userList.push(newUser);
    this.setState({ userListToShow: userList });
    console.log("Component Did Mount");
    console.log("State", this.state);
  }

  render() {
    console.log("Render called!!!");
    return (
      <div className='component-container'>
        <Header heading="Phone Directory Application" />
        <div className='component-body-container'>
          <button className='custom-btn add-btn'> Add </button>

          <div className='grid-container heading-container'>
            <span className='grid-item name-heading'> Name </span>
            <span className='grid-item phone-heading'> Ph No </span>
          </div>
          {
            this.state.userListToShow.map(user => {
              return <div key={user.id} className='grid-container'>
                <span className='grid-item'> {user.name} </span>
                <span className='grid-item'> {user.ph} </span>
                <span className='grid-item action-btn-container'>
                  <button className='custom-btn delete-btn' onClick={this.deleteHandler.bind(this, "Item Deleted!!!")}>Delete</button>
                </span>
              </div>
            })
          }

        </div>
      </div>
    )
  }
}

//react.createElement(element_name, element_properties, children)

//ReactDOM.render(ar1, arg2); arg1 - What to render, where to render.

export default ShowUser;
