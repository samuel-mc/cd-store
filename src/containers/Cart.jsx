import React from 'react';
import AppContext from '../context/AppContex';
import CartItem from '../components/CartItem';

const Cart = () => {

    const { cart } = React.useContext(AppContext);

    return (
        <div className="cart__container">
            {
                cart.length === 0
                    ? <h1> Carrito Vacio </h1>
                    : cart.map(product => <CartItem product={product} key={product.cd.id} />)
            }
        </div>
    )
}

export default Cart
