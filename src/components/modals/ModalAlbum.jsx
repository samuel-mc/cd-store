import React from 'react'
import AppContext from '../../context/AppContex';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import '../../style/ModalAlbum.css';

const AddAlbum = () => {

    const [ addArtist, setAddArtist ] = React.useState(false);
    const [ addGenre, setAddGenre ] = React.useState(false);

    const { artists } = React.useContext(AppContext);
    const { genres } = React.useContext(AppContext);

    React.useEffect(() => {
        console.log(genres);
    })

    const handleAddArtist = () => {
        setAddArtist(!addArtist);
    }
    const handleAddGenre = () => {
        setAddGenre(!addGenre);
    }

    return (
        <div className="album__modal">
            <form action="" className="album__form">
                <div className="form__item">
                    <label htmlFor="name">Titulo</label>
                    <input type="text" id="name" placeholder="El mejor disco del mundo"/>
                </div>
                <div className="form__item">
                    <label htmlFor="year">Año</label>
                    <input type="number"  id="year" min="1950" max="2050" placeholder="AAAA"/>
                </div>
                <div className="form__item">
                    <label htmlFor="cover">URL de la Portada</label>
                    <input type="text" id="cover" placeholder="http://www.image.com"/>
                </div>
                <div className="form__item">
                    <label htmlFor="description">Descripción</label>
                    <input type="text" id="desctiption" placeholder="Acá va una descripción ..."/>
                </div>
                <div className="form__item form__item--number">
                    <div className="form__number">
                        <label htmlFor="price">Precio</label>
                        <input type="number" id="price" min="0" step="0.1" placeholder="199.9"/>
                    </div>
                    <div className="form__number">
                        <label htmlFor="stock">Stock</label>
                        <input type="number" id="stock" min="0" step="1" placeholder="50"/>
                    </div>
            
                </div>
                <div className="form__item">
                    <label htmlFor="stock">Artista</label>
                    <div className="form__select">
                        {addArtist
                        ?   <>
                                <input type="text" id="name" placeholder="Gerardo Camino" className=""/>
                                <button type="button" onClick={() => handleAddArtist()} className="button--cancel">Cancelar</button>
                            </>
                        :   <>
                                <select name="id_artist" id="id_artist" hidden={addArtist}>
                                    <option value="">Seleccione un Artista</option>
                                    {
                                        artists.length !== 0 && artists.artists.map(artist => <option value={artist.id_artist} key={artist.id_artist}>{artist.name}</option>)
                                    }
                                </select>
                                <button type="button" onClick={() => handleAddArtist()}>Nuevo</button>
                            </>
                        }
                    </div>
                </div>
                <div className="form__item">
                    <label htmlFor="stock">Genero</label>
                    <div className="form__select">
                        {addGenre
                        ?   <>
                                <select name="id_genre" id="id_genre">
                                    <option value="">Seleccione un Género</option>
                                    {
                                        genres.length !== 0 && genres.map(genre => <option value={genre.id_genre} key={genre.id_genre}>{genre.name}</option>)
                                    }
                                </select>
                                <button type="button" onClick={() => handleAddGenre()} className="button--new">Nuevo</button>
                            </>
                        :   <>
                                <input type="text" id="name" placeholder="Post Pop" />
                                <button type="button" onClick={() => handleAddGenre()} className="button--cancel">Cancelar</button>
                            </>
                        }
                    </div>
                </div>
                <div className="form__button">
                    <PrimaryButton text="Guardar" />
                    <SecondaryButton text="Cancelar" />
                </div>
            </form>
        </div>
    )
}

export default AddAlbum;
