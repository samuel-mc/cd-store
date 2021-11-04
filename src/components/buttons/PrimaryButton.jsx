import React from 'react';
import '../../style/Buttons.css';

const PrimaryButton = ({ text, action, size }) =>
    <button type="button" className={`button button--primary button--${size}`} onClick={action}>
        { text }
    </button>
export default PrimaryButton;

