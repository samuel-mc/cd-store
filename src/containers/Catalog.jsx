import React from 'react'
import CatalogAlbum from '../components/CatalogAlbum';
import AppContext from '../context/AppContex';
import '../style/Catalog.css'

const Catalog = () => {
    const { albums } = React.useContext(AppContext);
    console.log(albums);
    const [albumsCatalog, setAlbumsCatalog] = React.useState([]);

    React.useEffect(() => {
        setAlbumsCatalog(albums);
        console.log('x');
    }, [albums])

    return (
        <main className="catalog__container">
            {albums.length > 0 && <CatalogAlbum albums={albums} />}
        </main>
    )
}

export default Catalog
