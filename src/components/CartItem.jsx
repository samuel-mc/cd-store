import React from 'react';
import '../style/CartItem.css';

const CartItem = ({ product }) => {
    return (
        <div className="cart-item">
            <div className="cart-item__info">
                <h2>{product.cd.name}</h2>
                <h3>{product.cd.artist}</h3>
                <h4>{`$${product.cd.price}`}</h4>
            </div>
            
            <img className="cart-item__image" src={product.cd.image} alt={product.cd.image} />

            <div className="cart-item__buttons">
                <button className="cart-item__button button__less"> - </button>
                <span className="cart-item__quantity"> {product.quantity}</span>
                <button className="cart-item__button button__more"> + </button>
            </div>

            <h2>Total: {`$${product.cd.price*product.quantity}`}</h2>

            <button className="cart-item__trash">
                Eliminar
            </button>

        </div>
    )
}

export default CartItem;
