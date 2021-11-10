import React from 'react';
import Modal from './Modal';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import '../../style/ModalArtist.css'
const axios = require('axios').default;

const ModalArtist = ({ setShowArtistModal, setLoading, artist }) => {

    if (!artist) artist = { id_artist: 0, name: ''};

    const [ name, setName ] = React.useState(artist.name);

    const handleChange = (e) => setName(e.target.value);

    const handleSave = () => {
        const body ={ name };
        artist.name === ''
            ? axios.post(`https://discos-chidos.herokuapp.com/api/v1/artists/`, body)
                .then( setShowArtistModal(false))
            : axios.put(`https://discos-chidos.herokuapp.com/api/v1/artists/${artist.id_artist}/name`, body)
                .then( setShowArtistModal(false))
        setLoading(true);
    }

    const handleCancel = () => setShowArtistModal(false);

    React.useEffect(() => {
        document.title = 'Editar Artista';
    })

    return (
        <Modal>
            <form action="" className="artist__form">
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder={artist.name !== '' ? artist.name : 'Andrés Negro' }
                    onChange={(e) => handleChange(e)}
                    />
                <div className="modal__buttons">
                    <PrimaryButton text="Guardar" action={() => handleSave()} size="sm"/>
                    <SecondaryButton text="Cancelar" action={() => handleCancel()} size="sm"/>
                </div>
            </form>
        </Modal>
    )
}

export default ModalArtist
