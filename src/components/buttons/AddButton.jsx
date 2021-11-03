import React from 'react'

const AddButton = ({ text, action }) =>
<button type="button" className="button button--add" onClick={action}>
    { text }
</button>

export default AddButton
