import React from 'react'

const SecondaryButton = ({ text, action, size }) => 
    <button type="button" className={`button button--secondary button--${size}`} onClick={action}>
        { text }
    </button>
export default SecondaryButton;

