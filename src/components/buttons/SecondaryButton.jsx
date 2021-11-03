import React from 'react'

const SecondaryButton = ({ text, action }) => 
    <button type="button" className="button button--secondary" onClick={action}>
        { text }
    </button>
export default SecondaryButton;

