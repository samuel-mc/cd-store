import React from 'react';
import heroImage from '../static/heroImage.jpg'
import '../style/Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <img src={heroImage} alt="imagen de funkos" className="hero__image" />
            <div className="hero__text">
                <h1>Todos los CD's</h1> <br />
                <h2> 🐱‍👤3 x 2 🐱‍👤</h2>
            </div>
            <svg className="wave"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1AA6B7" fill-opacity="0.5" d="M0,32L48,32C96,32,192,32,288,64C384,96,480,160,576,181.3C672,203,768,181,864,181.3C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </section>
    )
}

export default Hero;
