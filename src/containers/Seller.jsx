import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Seller.css';

const Seller = () => {

    React.useEffect(() => {
        document.title = 'Seller';
    }, []);
    
    return (
        <div>
            <div className="seller__container">
            <h1> Hola, User </h1>
            <div className="seller__options">
                <Link to="/seller/artists" className="seller__option">
                        <h2>Artistas</h2>
                </Link>
                <Link to="/seller/albums" className="seller__option">
                        <h2>Albums</h2>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Seller
