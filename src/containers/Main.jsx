import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

import '../style/Main.css'

const Main = () => {
    return (

        <main className="main__container">
            <Header />
            <Hero />
            <Banner />
        </main>
    )
}

export default Main;
