import React from 'react';
import '../../style/Buttons.css';

const PrimaryButton = ({ text, action }) =>
    <button type="button" className="button button--primary" onClick={action}>
        { text }
    </button>
export default PrimaryButton;

