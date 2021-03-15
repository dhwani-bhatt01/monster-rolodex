import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor()
{
super();
this.state= {
  monsters: []
};
}

componentDidMount() {
  fetch('http://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(monsters => this.setState({ monsters }));
  console.log('data')
}

  render() {
    return (
      // <div>
      //   <h1>Hello World</h1>
      //   {console.log(this.state.monsters)}
      //   <h1>{this.state.monsters.id}</h1>
      //   <h1>{this.state.monsters.name}</h1>
      // </div>
      
      <div className="App">
        {this.state.monsters.map((name) => {
          return (
            <>
            <h1>{this.state.monsters.id}</h1>
            <h1>{this.state.monsters.name}</h1>
            </>
          )
        })}
      </div>
    );
  }
}

export default App;
