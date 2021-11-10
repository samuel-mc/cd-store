import React from 'react'
import CatalogAlbum from '../components/CatalogAlbum';
import AppContext from '../context/AppContex';
import '../style/Catalog.css'

const Catalog = () => {
    const { albums } = React.useContext(AppContext);

    return (
        <main className="catalog__container">
            {albums.length > 0 && <CatalogAlbum albums={albums} />}
        </main>
    )
}

export default Catalog
