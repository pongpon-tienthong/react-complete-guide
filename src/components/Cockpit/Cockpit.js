import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App.</h1>
      <p>It's really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
}

export default cockpit;