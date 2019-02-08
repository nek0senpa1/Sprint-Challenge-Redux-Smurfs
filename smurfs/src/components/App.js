import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";


import { getSmurfs, moreSmurfs } from './../actions/index';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSmurfy: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  handleChange = e => {
    this.setState({
      newSmurfy: {
        ...this.state.newSmurfy,
        [e.target.name]: e.target.value
      }
    });
  };

  componentDidMount() {
    this.props.getSmurfs();
   
  }


  postSmurf = e => {
    e.preventDefault();
    this.props.moreSmurfs(this.state.newSmurfy);

  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <img src='https://celebrateit.ie/c/177-category_default/the-smurfs.jpg' />
        <div>Welcome to THE REDUX version of Smurfbook!</div>
        <hr></hr>
        <div>
          <div>
            {this.props.fetchingSmurfs && (
              <div>
              <h3>ADDING SMURFS TO LIBRARY...</h3>
              <img src="https://media2.giphy.com/media/8vzipTfbN6QWssXUdm/giphy.gif" />
              </div>
            )}
                    
          </div>
        
          <div>
            {this.props.smurfs.map(smurf => {
              return (
              <div>

                <h2>{smurf.name}</h2>
                <h3>Age: {smurf.age}</h3>
                <h3>Height: {smurf.height}</h3>
                <p>_______________________________________</p>

              </div>
              )
            })}
          </div>
        </div>
        
        <div>
          <h2>--------------</h2>
          <h2>ADD NEW SMURF TO THE BOOK</h2>
          <form onSubmit={this.postSmurf}>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={this.handleChange}
              value={this.state.newSmurfy.name}
            />
            <input
              type="text"
              name="age"
              placeholder="age"
              onChange={this.handleChange}
              value={this.state.newSmurfy.age}
            />
            <input
              type="text"
              name="height"
              placeholder="height"
              onChange={this.handleChange}
              value={this.state.newSmurfy.email}
            />
            
            <button type="submit">
              ADD SMURF
            </button>
            <p>Don't forget to Refresh after adding Smurfs to the Smurfbook</p>
          </form>
        </div>


      </div>
    );
  }
}

const mapStoreToProps = state => {
  return {
   smurfs: state.smurfs,
   fetchingSmurfs: state.fetchingSmurfs,
   addingSmurf: state.addingSmurf,
   updatingSmurf: state.updatingSmurf,
   deletingSmurf: state.deletingSmurf,
   error: state.error
  };
};


export default connect (mapStoreToProps, { getSmurfs, moreSmurfs })(App);
