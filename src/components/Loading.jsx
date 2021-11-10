import React from 'react';
import '../style/Loading.css'

const Loading = () => 
<>  
    <div className="loading__container">
        <h1 className="loading__text">Cargando</h1>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
</>

export default Loading;
