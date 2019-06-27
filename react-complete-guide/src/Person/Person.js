import React from 'react';

const person = (prop) => {
    return <div className="Person">
        <p>Math Expression Output:  {Math.floor(Math.random() * 30)}</p>
        <p>{prop.name} : {prop.age}</p>
        </div>
}

export default person;