import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: '111', name: 'David', age: 25 },
      { id: '222', name: 'Josh', age: 30 },
      { id: '333', name: 'Stephany', age: 28 },
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    })

    const person = { ...this.state.persons[personIndex] };
    // OR const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // Always update your state in an immutable fashion
    // const persons = this.state.persons.slice();
    //  OR
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          persons={this.state.persons} />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
