import React, { Component } from 'react';
import './App.css';

import Person from  './components/person';

class App extends Component {
  state = {
    person:[{
      id: 0,
      name: 'kishan',
      age: 20
    },{
      id: 1,
      name: 'gopal',
      age: 23
    }],
    showPerson: false
  };

  nameChange = (event,id) =>{
    const p = this.state.person.findIndex(per=>{
      return per.id===id;
    });
    // const person = {
    //   ...this.state.person[p]
    // };
    // person.name = event.target.value;
    const persons = [...this.state.person];
    // persons[p]=person
    persons[p].name = event.target.value;
    this.setState({person:persons})
  }
  togglePerson = () => {
    const show = this.state.showPerson;
    console.log(show);
    this.setState({showPerson:!show});

    console.log("person show:",this.state.showPerson);

  }
  deletePerson = (index) => {
    const person= [...this.state.person];
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
            age = {person.age}
            key={person.id}
            change = {(event)=>this.nameChange(event,person.id)} />

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
