import React from 'react'
import AddCartButton from '../components/buttons/AddCartButton';
import AppContext from '../context/AppContex';
import '../style/Catalog.css'

const Catalog = () => {
    const { albums } = React.useContext(AppContext)
    return (
        <main className="catalog__container">
            <h1>catalogo</h1>
            <div className="catalog__albums">
                {albums && albums.map(album =>
                    <div className="catalog__album">
                        <img src={album.cover} alt={album.title} />
                        <div>
                            <h2>{`$ ${album.price}`}</h2>
                            <h3>{`${album.title} (${album.year})`}</h3>
                            <p>{album.artist.name}</p>
                        </div>
                        <AddCartButton  />
                    </div>
                )}
            </div>
        </main>
    )
}

export default Catalog
