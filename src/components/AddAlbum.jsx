import React from 'react'
import AppContext from '../context/AppContex'

const AddAlbum = () => {

    const { artists } = React.useContext(AppContext);
    const { genres } = React.useContext(AppContext);

    React.useEffect(() => {
        console.log(genres);
    })

    return (
        <div className="artist__form">
            <form action="">
                <h1>Agregar Album</h1>
                <div className="artist__form__input">
                    <label htmlFor="name">Titulo</label>
                    <input type="text" id="name" placeholder="Titulo"/>
                </div>
                <div className="artist__form__input">
                    <label htmlFor="year">Año</label>
                    <input type="number" id="year" min="1950" max="2050" placeholder="AAAA"/>
                </div>
                <div className="artist__form__input">
                    <label htmlFor="cover">URL de la Portada</label>
                    <input type="text" id="cover" placeholder="http://www.image.com"/>
                </div>
                <div className="artist__form__input">
                    <label htmlFor="description">Descripción</label>
                    <input type="text" id="desctiption" placeholder="Acá va una descripción ..."/>
                </div>
                <div className="artist__form__input">
                    <label htmlFor="price">Precio</label>
                    <input type="number" id="price" step="0.1" placeholder="199.9"/>
                </div>
                <div className="artist__form__input">
                    <label htmlFor="stock">Stock</label>
                    <input type="number" id="stock" step="1" placeholder="50"/>
                </div>
                <div className="artist__form__input">
                    <label htmlFor="stock">Artista</label>
                    <select name="id_artist" id="id_artist">
                        <option value="">Seleccione un Artista</option>
                        {
                            artists.length !== 0 && artists.artists.map(artist => <option value={artist.id_artist} key={artist.id_artist}>{artist.name}</option>)
                        }
                    </select>
                </div>
                <div className="artist__form__input">
                    <label htmlFor="stock">Genero</label>
                    <select name="id_genre" id="id_genre">
                        <option value="">Seleccione un Género</option>
                        {
                            genres.length !== 0 && genres.map(genre => <option value={genre.id_genre} key={genre.id_genre}>{genre.name}</option>)
                        }
                    </select>
                </div>
            </form>
        </div>
    )
}

export default AddAlbum;
