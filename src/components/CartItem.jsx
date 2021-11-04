import React from 'react';
import '../style/CartItem.css';
import '../style/Cart.css';

import AppContext from '../context/AppContex';


const CartItem = ({ product }) => {
    const { cart, setCart } = React.useContext(AppContext);

    const handlePlus = (product) => {
        let index = cart.findIndex(item => item.album.id_album === product.album.id_album);
        cart[index].quantity++;
        setCart([...cart]);
    }

    const handleMinus = (product) => {
        let index = cart.findIndex(item => item.album.id_album === product.album.id_album);
        if (cart[index].quantity === 1) {
            cart.splice(index, 1);
            setCart([...cart]);
        } else {
            cart[index].quantity > 1 && cart[index].quantity--;
        }
        setCart([...cart]);
    }

    const handleDelete = (product) => {
        let index = cart.findIndex(item => item.album.id_album === product.album.id_album);
        cart.splice(index, 1);
        setCart([...cart]);
    }

    return (
        <div className="cart-item">
            <div className="cart-item__info">
                <h3>{product.album.title}</h3>
                <h4>{product.album.artist.name}</h4>
                <h5>{`$${product.album.price}`}</h5>
            </div>

            <img className="cart-item__image" src={product.album.cover} alt="Album cover" />

            <div className="cart-item__buttons">
                <button className="cart-item__button button__less" onClick={() => handleMinus(product)}> - </button>
                <span className="cart-item__quantity"> {product.quantity}</span>
                <button className="cart-item__button button__more" onClick={() => handlePlus(product)}> + </button>
            </div>

            <h3>Total: {`$${product.album.price*product.quantity}`}</h3>

            <button className="cart-item__trash" onClick={() => handleDelete(product)}>
                Eliminar
            </button>

        </div>
    )
}

export default CartItem;
