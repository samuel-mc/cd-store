import React from 'react'
import CatalogAlbum from '../components/CatalogAlbum';
import AppContext from '../context/AppContex';
import { useParams } from 'react-router-dom';
import '../style/Catalog.css'

const Catalog = () => {
    const { idGenre } = useParams();
    const { albums } = React.useContext(AppContext);

    return (
        <main className="catalog__container">
            {albums.length > 0 && <CatalogAlbum albums={albums} genre={idGenre} />}
        </main>
    )
}

export default Catalog
