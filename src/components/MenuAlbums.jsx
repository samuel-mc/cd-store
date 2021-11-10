import React from 'react';
import AppContext from '../context/AppContex';
import Loading from './Loading'
import AddButton from './buttons/AddButton';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
import ModalAlbum from './modals/ModalAlbum';
import ModalConfirm from './modals/ModalConfirm';

const axios = require('axios').default;

const MenuAlbums = () => {
    const { albums, setAlbums, loading, setLoading } = React.useContext(AppContext);
    const [ album, setAlbum ] = React.useState(null);
    const [order, setOrder] = React.useState(true);
    const [showAlbumModal, setShowAlbumModal] = React.useState(false);
    const [showConfirmModal, setShowConfirmModal] = React.useState(false);

    const handleOrder = () => {
        setOrder(!order);
        albums.reverse();
        setAlbums([...albums]);
    }

    const sortAlbums = (by) => {
        console.log(albums);
        if (by === 'artist' || by === 'genre') {
            albums.sort((a, b) => {
                if(a[by].name > b[by].name) return 1;
                if(a[by].name < b[by].name) return -1
                return 0;
            });
        } else {
            albums.sort((a, b) => {
                if(a[by] > b[by]) return 1;
                if(a[by] < b[by]) return -1
                return 0;
            });
        }
        setAlbums([...albums]);
        setOrder(false);
    }

    const handleShowAlbumModal = (album) => {
        setAlbum(album);
        setShowAlbumModal(true);
    }

    const handleDelete = (album) => {
        setAlbum(album);
        setShowConfirmModal(true);
    }

    const deleteAlbum = () => {
        axios.delete(`https://discos-chidos.herokuapp.com/api/v1/albums/${album.id_album}`);
        setShowConfirmModal(false);
        setLoading(true);
    }

    return (
        <>
            { loading
                ? <Loading />
                : <div className="albums__container">
                    <div className="menu__add">
                        <AddButton text="Agregar Album" action={() => handleShowAlbumModal(null)}/>
                    </div>

                    <div className="menu__sort">
                        <h1>Ordenar por: </h1>
                        <select onChange={(e) => sortAlbums(e.target.value, 'asc')}>
                            <option value="title">Titulo</option>
                            <option value="sells">Ventas</option>
                            <option value="stock">Stock</option>
                            <option value="artist">Artista</option>
                            <option value="genre">Género</option>
                            <option value="year">Año</option>
                        </select>
                        <PrimaryButton text={order ? '▲' : '▼'} action={() => handleOrder()} size="sm"/>
                    </div>

                    <table className="menu__table">
                        <thead>
                            <tr>
                                <th></th>
                                <th> Titulo </th>
                                <th> Ventas </th>
                                <th> Stock </th>
                                <th>Artista</th>
                                <th>Genero</th>
                                <th>Año</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (albums.length > 0 && !!albums)
                                    && albums.map( album => (

                                        <tr key={album.id_album}>
                                            <td><img src={album.cover} alt="Cover of album" /></td>
                                            <td>{album.title}</td>
                                            <td>{album.sells}</td>
                                            <td>{album.stock}</td>
                                            <td>{!album.artist ? '-' : album.artist.name}</td>
                                            <td>{album.genre.name}</td>
                                            <td>{album.year}</td>
                                            <td> <PrimaryButton text="Editar" action={() => handleShowAlbumModal(album)} size="sm"/></td>
                                            <td> <SecondaryButton text="Eliminar" action={() => handleDelete(album)} size="sm" /></td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                    { showConfirmModal && <ModalConfirm setShowConfirmModal={setShowConfirmModal} action={() => deleteAlbum() } />}
                    { showAlbumModal && <ModalAlbum setShowAlbumModal={setShowAlbumModal} setLoading={setLoading} album={album}/> }
                </div>
            }
        </>
    )
}

export default MenuAlbums
