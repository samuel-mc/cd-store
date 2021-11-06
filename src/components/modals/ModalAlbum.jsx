import React from 'react'
import { useForm } from 'react-hook-form'
import AppContext from '../../context/AppContex';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import '../../style/ModalAlbum.css';
const axios = require('axios').default;


const AddAlbum = ({ setShowAlbumModal, album }) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [ addArtist, setAddArtist ] = React.useState(false);
    const [ addGenre, setAddGenre ] = React.useState(false);
    const [ initialData, setInitialData ] = React.useState({
        title: album ? album.title : '',
        year: album ? album.year : '',
        cover: album ? album.cover : '',
        description: album ? album.description : '',
        id_artist: album ? album.artist.id_artist : 0,
        id_genre: album ? album.genre.id_genre : 0,
        stock: album ? album.stock : '',
        price: album ? album.price : ''
    });
    const { artists, genres } = React.useContext(AppContext);

    const onSubmit = (data) => {

        addArtist ? data.id_artist = 0 : data.name_artist = 'none';
        addGenre ? data.id_genre = 0 : data.name_genre = 'none';

        data = {
            title: data.title,
            year: data.year,
            cover: data.cover,
            price: data.price,
            description: data.description,
            stock: data.stock,
            id_artist: parseInt(data.id_artist),
            id_genre: parseInt(data.id_genre),
            name_artist: data.name_artist,
            name_genre: data.name_genre
        }

        if(album) {
            axios.put(`https://discos-chidos.herokuapp.com/api/v1/albums/${album.id_album}`, data );
        } else {
            axios.post('https://discos-chidos.herokuapp.com/api/v1/albums', data);
        }

        setShowAlbumModal(false);
    }

    const handleChange = (event) => {
        setInitialData({
            ...initialData,
            [event.target.name] : event.target.value
        })
    }


    return (
        <div className="album__modal">
            <form onSubmit={handleSubmit(onSubmit)} className="album__form">
                <div className="form__item">
                    <label htmlFor="title">Titulo</label>
                    <input
                        className="input"
                        type="text"
                        id="title"
                        name="title"
                        placeholder="El mejor disco del mundo"
                        value={initialData.title}
                        {...register("title", { required: true, maxLength: 20, value: initialData.title})}
                        onChange={(e) => handleChange(e)}
                    />
                    {  !album && errors.title && <span className="error">El titulo es obligatorio</span>}
                </div>

                <div className="form__item">
                    <label htmlFor="year">Año</label>
                    <input
                        className="input"
                        type="number"
                        id="year"
                        min="1950"
                        max="2050"
                        placeholder="AAAA"
                        value={initialData.year}
                        {...register("year", { required: true, max: 2050, min: 1950, value: initialData.year})}
                        onChange={(e) => handleChange(e)}
                    />
                    { !album && errors.year && <span className="error">El año es obligatorio</span>}
                </div>

                <div className="form__item">
                    <label htmlFor="cover">URL de la Portada</label>
                    <input
                        className="input"
                        type="text"
                        id="cover"
                        placeholder="http://www.image.com"
                        {...register("cover", { required: true, value: initialData.cover})}
                        value={initialData.cover}
                        onChange={(e) => handleChange(e)}
                    />
                    { !album && errors.cover && <span className="error">La portada es obligatoria</span>}
                </div>

                <div className="form__item">
                    <label htmlFor="description">Descripción</label>
                    <input
                        className="input"
                        type="text"
                        id="desctiption"
                        placeholder="Acá va una descripción ..."
                        {...register("description", { required: true, value: initialData.description})}
                        value={initialData.description}
                        onChange={(e) => handleChange(e)}
                    />
                    { !album && errors.description && <span className="error">La descripción es obligatoria</span>}
                </div>

                <div className="form__item form__item--number">
                    <div className="form__number">
                        <label htmlFor="price">Precio</label>
                        <input
                            className="input"
                            type="number"
                            id="price"
                            min="0"
                            step="0.1"
                            placeholder="199.9"
                            {...register("price", { required: true, max: 10000, min: 0, value: initialData.price})}
                            value={initialData.price}
                            onChange={(e) => handleChange(e)}
                        />
                        { !album && errors.price && <span className="error">El precio es obligatorio</span>}
                    </div>
                    <div className="form__number">
                        <label htmlFor="stock">Stock</label>
                        <input
                            className="input"
                            type="number"
                            id="stock"
                            min="0"
                            step="1"
                            placeholder="50"
                            {...register("stock", { required: true, max: 10000, min: 0, value: initialData.stock})}
                            value={initialData.stock}
                            onChange={(e) => handleChange(e)}
                        />
                        { !album && errors.stock && <span className="error">El stock es obligatorio</span>}
                    </div>

                </div>
                <div className="form__item">
                    <label htmlFor="stock">Artista</label>
                    <div className="form__select">
                        {addArtist
                        ?   <>
                                <input
                                    className="input"
                                    type="text" 
                                    id="name_artist" 
                                    placeholder="Ingrega el nombre" 
                                    {...register("name_artist", { required: true })}
                                />
                                <SecondaryButton
                                    text="Cancelar"
                                    action={() => setAddArtist(!addArtist)}
                                    size="sm"
                                />
                                { !album && errors.name_artist && <span className="error">Es necesario el nombre</span>}
                            </>
                        :   <>
                                <select
                                    name="id_artist"
                                    id="id_artist"
                                    hidden={addArtist}
                                    {...register("id_artist", { required: true, value: initialData.id_artist})}
                                    value={initialData.id_artist}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option value="0">Seleccione un Artista</option>
                                    {
                                        artists.length !== 0 && artists.artists.map(artist => <option value={artist.id_artist} key={artist.id_artist}>{artist.name}</option>)
                                    }
                                </select>
                                <PrimaryButton text="Nuevo" action={() => setAddArtist(!addArtist)} size="sm" />
                                { !album && errors.id_artist && <span className="error">Es necesario el artista</span>}
                            </>
                        }

                    </div>
                </div>
                <div className="form__item">
                    <label htmlFor="stock">Genero</label>
                    <div className="form__select">
                        {addGenre

                        ?   <>
                                <input 
                                    className="input"
                                    type="text"
                                    id="name_genre"
                                    placeholder="Ingresa el genero"
                                    {...register("name_genre", { required: true })}
                                />
                                <SecondaryButton text="Cancelar" action={() => setAddGenre(!addGenre)} size="sm" />
                                { !album && errors.name_genre && <span className="error">Es necesario el género</span>}
                            </>
                        :   <>
                                <select 
                                    name="id_genre"
                                    id="id_genre"
                                    {...register("id_genre", { required: true, value: initialData.id_genre})}
                                    value={initialData.id_genre}
                                    onChange={(e) => handleChange(e)}
                                >
                                    <option value="0">Seleccione un Género</option>
                                    {
                                        genres.length !== 0 && genres.map(genre => <option value={genre.id_genre} key={genre.id_genre}>{genre.name}</option>)
                                    }
                                </select>
                                <PrimaryButton text="Nuevo" action={() => setAddGenre(!addGenre)} size="sm" />
                                { !album && errors.id_genre && <span className="error">Es necesario el género</span>}
                            </>
                        }
                    </div>
                </div>
                <div className="form__button">
                    <button className="button button--primary button--lg"type="submit">Guardar</button>
                    <SecondaryButton text="Cancelar" action={() => setShowAlbumModal(false)} size="lg"/>
                </div>
            </form>
        </div>
    )
}

export default AddAlbum;
