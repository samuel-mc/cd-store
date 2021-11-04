import React from 'react';
import AppContext from '../context/AppContex';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cart } = React.useContext(AppContext);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        let totalPrice = 0;
        cart.map(item => totalPrice = totalPrice + (item.album.price*item.quantity));
        console.log('totalPrice', totalPrice);
        setTotal(totalPrice);
    }, [cart]);

    return (
        <div className="cart__container">
            {
                cart.length === 0
                    ? <div className="cart__container--empty"> 
                        <h1> Carrito Vacio  </h1>
                        <a className="empty__link" href="/"> Ir al catalogo </a>
                    </div>
                    : cart.map(product => <CartItem product={product} key={product.album.id_album} />)
            }

            {
                cart.length > 0 &&
                <>
                    <div className="cart__total">
                        <h2>Total: ${total}</h2>
                        <button className="button__buy"> Continuar Compra </button>
                    </div>
                </>
            }
        </div>
    )
}

export default Cart;