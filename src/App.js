import React, { Component } from 'react';
import './App.css';

import Person from  './components/person';

class App extends Component {
  state = {
    person:[{
      name: 'kishan',
      age: 20
    },{
      name: 'gopal',
      age: 23
    }],
    showPerson: false
  };

  nameChange = (event) =>{
    this.setState({person:[{
      name:event.target.value,
      age: 19
    }
    ]})
  }
  togglePerson = () => {
    const show = this.state.showPerson;
    console.log(show);
    this.setState({showPerson:!show});

    console.log("person show:",this.state.showPerson);

  }
  deletePerson = (index) => {
    const person= this.state.person;
    person.splice(index, 1);
    this.setState({person:person});

  }

  render() {
    let persons = null;
    if ( this.state.showPerson){
    persons = (
      <div>
        {this.state.person.map((person,index)=>{
          return <Person
            click={()=>this.deletePerson(index)}
            name = {person.name}
            age = {person.age} />

        })}
      </div>
    );
  }
    return (
      <div className="App">
        <h1>hello</h1>
        <button onClick ={this.togglePerson}>click me </button>
        {persons}
      </div>
    );
  }
}

export default App;
