import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import '../style/Header.css';

const Header = ({ cart, genres }) => {
    const [ show, setShow ] = React.useState(true);

    const categories = genres.slice(0, 3)

    React.useEffect(() => {
        const handleScroll = () => {
            window.scrollY === 0 && setShow(true);
            window.scrollY > 90 && setShow(false);
        }

        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    })


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
            { genres &&
                <ul className="header__categories">
                     <li className="header__category">
                        <Link to='/catalog'>
                            Todos
                        </Link>
                     </li>
                    {
                        categories.map( category =>
                            <li className="header__category" key={category.id_genre}>
                                <Link to={`/catalog/${category.id_genre}`}>
                                    {category.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            }
            </div>
        </header>
    );
}

export default Header;
