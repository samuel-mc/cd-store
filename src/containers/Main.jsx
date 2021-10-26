import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import AppContext from '../context/AppContex';

import '../style/Main.css'

const Main = () => {
    const { cart, setCart, cds } = React.useContext(AppContext);

    return (
        <>
            <main className="main__container">
                <Hero />
                <Banner cart={cart} setCart={setCart} cds={cds} />
            </main>
        </>
    )
}

export default Main;
