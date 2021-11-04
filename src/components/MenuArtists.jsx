import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContex';
import ModalArtist from './modals/ModalArtist';
import ModalConfirm from './modals/ModalConfirm';
import AddButton from './buttons/AddButton';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
import '../style/MenuTables.css';
const axios = require('axios').default;

const MenuArtists = () => {
    const { artists } = React.useContext(AppContext);
    const [ showArtistModal, setShowArtistModal ] = React.useState(false);
    const [ showConfirmModal, setShowConfirmModal ] = React.useState(false);
    const [artist, setArtist] = React.useState(null);

    const handleshowArtistModal = (artist) => {
        setShowArtistModal(true);
        setArtist(artist);
    }

    const handleDelete = (artist) => {
        setShowConfirmModal(true);
        setArtist(artist);
    }

    const deleteArtist = () => {
        axios.delete(`http://localhost:8080/api/v1/artists/${artist.id_artist}`)
        setShowConfirmModal(false);
    }

    React.useEffect(() => {
        document.title = 'Menu Artistas'
    })

    return (
        <main className="artists__container">
            <div className="menu__add">
                <AddButton text="Agregar Artista" action={() => handleshowArtistModal(null)}/>
            </div>

            <table className="menu__table">
                <thead>
                    <tr>
                        <th> Artistas </th>
                        <th> Ventas </th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {!!artists.artists && !!artists.artists > 0 &&  artists.artists.map(artist => (
                        <tr key={artist.id_artist}>
                            <td>{artist.name}</td>
                            <td>{artist.sells}</td>
                            <td>
                                <Link to="/"> Discografía</Link>
                            </td>
                            <td>
                                <PrimaryButton text="Editar" action={() => handleshowArtistModal(artist)} size="sm"/>
                            </td>
                            <td>
                                <SecondaryButton text="Eliminar" action={() => handleDelete(artist)} size="sm"/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            { showConfirmModal && <ModalConfirm setShowConfirmModal={setShowConfirmModal} action={() => deleteArtist() }/>}
            { showArtistModal && <ModalArtist setShowArtistModal={setShowArtistModal} artist={artist}/> }
        </main>
    )
}

export default MenuArtists;
