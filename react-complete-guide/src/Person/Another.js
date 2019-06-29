// Understand JSX
// Note: This is a functional component and here we used React hooks to maintane/use state 
// prior to React version 16.8 we can not use state in functional component.
import React from 'react'
import { useState } from 'react';

const another = () => {
    // Use useState for state in functional component
    const [addressState, updateAddressState] = useState({
        address: [
            { addressLabel: 'Current Address', addressValue: 'Flat No 604, Yash Wisteria, Wakad, Pune' }
        ]
    });

    const updateAddressHandler = () => {
        updateAddressState({
            address: [
                { addressLabel: 'Permanent Address', addressValue: 'H.N. 54/445, Teachers Colony Danganya, Raipur, Chhattisgarh' }
            ]
        })
    }
    // creatElement can take multiple parameters, but 3 argument is mandatry.
    // return React.createElement('div', null, React.createElement('h1', { className: 'another' }, 'Hi, I\'m React app!!!'));

    // The above code is equivalent to 
    // Note: class etc. can not be used in JSX as it is reserved keyword.
    return (
        <div>
            <h4 className="another">Hi I'm functional component.</h4>
            <button onClick={updateAddressHandler}>Get Permanant Address</button>
            <div>{addressState.address.addressLabel}</div>
            <div>{addressState.address.addressValue}</div>
        </div>
    )
}

export default another;