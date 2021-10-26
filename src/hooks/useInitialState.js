import { useState } from "react";

const useInitialState = () => {
    const [ cartProducts, setCartProducts ] = useState([]);
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
        },
        {
            id: 7,
            name: "The Black Parade",
            artist: "My Chemical Romance",
            year: 2006,
            price: 299,
            image: "https://http2.mlstatic.com/D_NQ_NP_617509-MLM43423046121_092020-O.jpg"
        },
        {
            id: 8,
            name: "Three cheers for sweet revenge",
            artist: "My Chemical Romance",
            year: 2006,
            price: 299,
            image: "https://http2.mlstatic.com/D_NQ_NP_644574-MLM43422972979_092020-O.jpg"
        },
    ]

    return {
        cartProducts,
        setCartProducts,
        cds
    }

}


export { useInitialState }