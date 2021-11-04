import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import AppContext from '../context/AppContex';


const Main = () => {
    const { cart, setCart, albums } = React.useContext(AppContext);

    React.useEffect(() => {
        document.title = 'Discos Chidos'
    })

    return (
        <>
            <main className="main__container">
                <Hero />
                <Banner cart={cart} setCart={setCart} albums={albums} />
            </main>
        </>
    )
}

export default Main;
