import React from 'react';

const person = (props) => {
  return(
    <div>
      <p onClick={props.click}>Im a {props.name} of age {props.age} </p>
      <input type='text'onChange={props.change} value={props.name}/>
    </div>
  );
};

export default person
