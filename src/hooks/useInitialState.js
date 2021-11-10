import React, { useState } from 'react';

const useInitialState = () => {
    const axios = require('axios').default;
    const [cart, setCart] = useState([]);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);


    React.useEffect(() => {
        axios.get('https://discos-chidos.herokuapp.com/api/v1/artists')
            .then(res => {
                setArtists(res.data);
            })
            .catch(err => console.log(err))
        axios.get('https://discos-chidos.herokuapp.com/api/v1/genres')
                    .then(res => {
                setGenres(res.data);
            })
            .catch(err => console.log(err))
        axios.get('https://discos-chidos.herokuapp.com/api/v1/albums')
            .then(res =>{
                setAlbums(res.data);
                setLoading(false);
            })
    }, [loading]);


  const cds = [
      {
          id: 1,
          name: "The Black Parade",
          artist: "My Chemical Romance",
          year: 2006,
          price: 299,
          image: "https://http2.mlstatic.com/D_NQ_NP_617509-MLM43423046121_092020-O.jpg"
      },
      {
          id: 2,
          name: "Three cheers for sweet revenge",
          artist: "My Chemical Romance",
          year: 2006,
          price: 299,
          image: "https://http2.mlstatic.com/D_NQ_NP_644574-MLM43422972979_092020-O.jpg"
      },
      {
          id: 3,
          name: "The Black Parade",
          artist: "My Chemical Romance",
          year: 2006,
          price: 299,
          image: "https://http2.mlstatic.com/D_NQ_NP_617509-MLM43423046121_092020-O.jpg"
      },
      {
          id: 4,
          name: "Three cheers for sweet revenge",
          artist: "My Chemical Romance",
          year: 2006,
          price: 299,
          image: "https://http2.mlstatic.com/D_NQ_NP_644574-MLM43422972979_092020-O.jpg"
      },
      {
          id: 5,
          name: "The Black Parade",
          artist: "My Chemical Romance",
          year: 2006,
          price: 299,
          image: "https://http2.mlstatic.com/D_NQ_NP_617509-MLM43423046121_092020-O.jpg"
      },
      {
          id: 6,
          name: "Three cheers for sweet revenge",
          artist: "My Chemical Romance",
          year: 2006,
          price: 299,
          image: "https://http2.mlstatic.com/D_NQ_NP_644574-MLM43422972979_092020-O.jpg"
      }
  ]

  return {
    albums,
    setAlbums,
    artists,
    cart,
    setCart,
    cds,
    genres,
    loading,
    setLoading
  };
};

export default useInitialState;