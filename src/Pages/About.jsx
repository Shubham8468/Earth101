import React from 'react';
import countryFacts from "../api/countrayData.json"
import './About.css'
const About = () => {
    return (
        <section className='section-about  '>
            <h2 className='container-title'>
                Here are the Intrestion Facts about some countries
                <br />
                we  are proud of
            </h2>
           
            <div className='gradient-cards'>
                

                {countryFacts.map((country) => {
                    const { id, countryName, capital, population, interestingFact, gdp, languages } = country;
                    return (<div className='card' key={id}>
                        <div className='container-card bg-blue-box'>
                            <p className='card-title'>{countryName}</p>
                            <p className='data-about'>
                                <span className='card-description-about'>Capital: </span>
                                {capital}
                            </p>
                            <p className='data-about'>
                                <span className='card-description-about'>Population: </span>
                                {population}
                            </p>
                            <p className='data-about'>
                                <span className='card-description-about'>GDP: </span>
                                {gdp}
                            </p>
                            <p className='data-about'>
                                <span className='card-description-about'>Languages: </span>
                                {languages}
                            </p>
                        </div>
               

                    </div>
                    )
                })
                }





            </div>
        </section>
    )
}

export default About
