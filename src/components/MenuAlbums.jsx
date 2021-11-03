import React from 'react';
import AppContext from '../context/AppContex';
import AddButton from './buttons/AddButton';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
import ModalAlbum from './modals/ModalAlbum';

const MenuAlbums = () => {
    const { albums } = React.useContext(AppContext);
    React.useEffect(() => {
        console.log(albums);
    })
    return (
        <div className="albums__container">
            <div className="menu__add">
                <AddButton text="Agregar Album"/>
            </div>

            <table className="menu__table">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Ventas</th>
                        <th>Stock</th>
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
                                    <td>{album.title}</td>
                                    <td>{album.sells}</td>
                                    <td>{album.stock}</td>
                                    <td>{!album.artist ? '-' : album.artist.name}</td>
                                    <td>{album.genre.name}</td>
                                    <td>{album.year}</td>
                                    <td> <PrimaryButton text="Editar"/></td>
                                    <td> <SecondaryButton text="Eliminar" /></td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>

            <ModalAlbum/>
        </div>
    )
}

export default MenuAlbums
