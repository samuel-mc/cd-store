import React from 'react';
import AddCartButton from '../components/buttons/AddCartButton';

const CatalogAlbum = ({ albums }) => {

    const [ searchValue, setSearchValue ] = React.useState("");
    const searchInput = React.useRef(null);

    const handleSearch = React.useCallback(() => {
        setSearchValue(searchInput.current.value.toLowerCase());
    }, [])

    const filteredAlbums = React.useMemo(() => 
        albums.filter((album) =>{
            return album.title.toLowerCase().includes(searchValue) || album.artist.name.toLowerCase().includes(searchValue)
        }), [ albums, searchValue]
    )

    return (
        <>
            <div className="catalog__search">
                <input
                    className="input"
                    type="text"
                    name="search"
                    placeholder="Buscar en el catálogo"
                    onChange={handleSearch}
                    ref={searchInput}
                />
            </div>
            <div className="catalog__albums">

                {filteredAlbums.map(album =>
                    <div className="catalog__album" key={album.id_album}>
                        <img src={album.cover} alt={album.title} />
                        <div>
                            <h2>{`$ ${album.price}`}</h2>
                            <h3>{`${album.title} (${album.year})`}</h3>
                            <p>{album.artist.name}</p>
                        </div>
                        <AddCartButton album={album} />
                    </div>
                )}
            </div>
        </>
    )
}

export default CatalogAlbum
