import React from 'react';
import Loading from './Loading';
import AddCartButton from './buttons/AddCartButton';
import AppContext from '../context/AppContex';
import '../style/Banner.css';

const Banner = ({ albums }) => {

    const { loading } = React.useContext(AppContext);
    
    return (
        <>
        {
            loading
            ? <Loading /> 
            : <section className="banner">
                {
                    albums && albums.map( album => (
                        <div className="banner__item" key={album.id_album}>
                            <h3 className="item__title">
                                {`"${album.title}" - ${album.artist.name} (${album.year})`}
                            </h3>
                            <h4 className="item__price">$ {album.price}</h4>
                            <img className="item__image" src={album.cover} alt="" />
                            <AddCartButton album={album} />
                            <h5>Descripción</h5>
                        </div>
                    ))
                }
            </section>
        }
        </>
    )
}

export default Banner;
