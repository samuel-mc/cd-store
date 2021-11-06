import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import '../style/Header.css';

const categories = [
    {
        id: 1,
        name: "Todos"
    },
    {
        id: 2,
        name: "Pop"
    },
    {
        id: 3,
        name: "Rock"
    },
    {
        id: 4,
        name: "Rap"
    },
]


const Header = ({ cart }) => {

    const [ show, setShow ] = React.useState(true);

    const handleScroll = () => {
        window.scrollY === 0 && setShow(true);
        window.scrollY > 90 && setShow(false);
    }

    window.addEventListener("scroll", handleScroll);
    
    return (
        <header className="header">
            <div className={ show ? "header__top" : "header__top active"}>
                <Link to="/">
                    <h1 className="header__title">quelocura</h1>
                </Link>

                <Link to="/cart">
                    <div className="header__cart">
                        <FaShoppingCart size={'2rem'}/>
                        {
                            cart.length > 0 && <span className="cart__quantity">{cart.length}</span>
                        }
                    </div>
                </Link>

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