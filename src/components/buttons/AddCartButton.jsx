import React from 'react';
import AppContext from '../../context/AppContex';
import { FaShoppingCart } from "react-icons/fa";


const AddCartButton = ({ album }) => {
    const { cart, setCart } = React.useContext(AppContext);

    const handleAdd = (album) =>{
        let repeated = false;
        cart.forEach (product => {
            if (product.album.id_album === album.id_album) {
                repeated = true;
            }
        })
        !repeated && setCart(cart => [...cart, {album, quantity: 1}]);
        console.log(cart);
    }

    return (
        <button
        className="button button--primary button--md"
        onClick={() => handleAdd(album)}
        >
            Agregar
            <span>
                <FaShoppingCart size={'2rem'}/>
            </span>
        </button>
    )
}

export default AddCartButton;
