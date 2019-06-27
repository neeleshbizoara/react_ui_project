import React from 'react';

const person = (properties) => {
    return <div className="Person">
        <p>Math Expression Output:  {Math.floor(Math.random() * 30)}</p>
        <p>{properties.name} : {properties.age}</p>
        <p>{properties.children}</p>
        </div>
}

export default person;