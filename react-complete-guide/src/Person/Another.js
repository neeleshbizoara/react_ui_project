// Understand JSX
// Note: This is a functional component and here we used React hooks to maintane/use state 
// prior to React version 16.8 we can not use state in functional component.
import React from 'react'
import { useState } from 'react';

const another = () => {
    return React.createElement('div', null, React.createElement('h1', { className: 'another' }, 'Hi, I\'m React app!!!'));
    // The above code is equivalent to 
    // Note: class etc. can not be used in JSX as it is reserved keyword.
    // return (<div>
    //     <h1 className="another">Hi I\'m React app!!!</h1>
    // </div>)
}

export default another;