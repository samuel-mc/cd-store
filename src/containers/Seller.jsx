import React from 'react';
import AddArtist from '../components/AddAlbum';

const Seller = () => {

    React.useEffect(() => {
        document.title = 'Seller';
    }, []);
    
    return (
        <div>
            <AddArtist />
        </div>
    )
}

export default Seller
