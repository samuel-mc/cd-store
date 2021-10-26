import React from 'react';
import '../style/Header.css'

const categories = [
    {
        id: 1,
        name: "Todos"
    },
    {
        id: 2,
        name: "Disney"
    },
    {
        id: 3,
        name: "Star Wars"
    },
    {
        id: 4,
        name: "Marvel"
    },
]

const Header = () => {

    const [ productsQuantity, setProductsQuantity ] = React.useState(10)

    return (
        <header className="header">
            <div className="header__top">
                <h1 className="header__title">funkoshop</h1>
                <div className="header__cart">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" class="svg-inline--fa fa-cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M463.1 416c-26.51 0-47.1 21.49-47.1 48s21.49 48 47.1 48s47.1-21.49 47.1-48S490.5 416 463.1 416zM175.1 416c-26.51 0-47.1 21.49-47.1 48S149.5 512 175.1 512s47.1-21.49 47.1-48S202.5 416 175.1 416zM569.5 44.73c-6.109-8.094-15.42-12.73-25.56-12.73H121.1L119.6 19.51C117.4 8.19 107.5 0 96 0H23.1C10.75 0 0 10.75 0 23.1S10.75 48 23.1 48h52.14l60.28 316.5C138.6 375.8 148.5 384 160 384H488c13.25 0 24-10.75 24-23.1C512 346.7 501.3 336 488 336H179.9L170.7 288h318.4c14.29 0 26.84-9.47 30.77-23.21l54.86-191.1C577.5 63.05 575.6 52.83 569.5 44.73z"></path></svg>
                    <span className="cart__quantity">{productsQuantity}</span>
                </div>
            </div>

            <div className="header__bottom">
                <ul className="header__categories">
                    {
                        categories.map( category =>
                            <li className="header__category" key={category.id}>{category.name}</li>
                        )
                    }
                </ul>
            </div>
        </header>
    );
}

export default Header;