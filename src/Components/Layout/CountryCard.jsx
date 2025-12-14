import React from 'react'
import './CountryCard.css'
import { NavLink } from 'react-router-dom';
const CountryCard = ({ Country, index }) => {
    const { flags, name, population, region, capital } = Country;
    return (
        <div className='main-card'>
            <li key={index} className='counrty-card container-card'>
                <div className=' flag-img '>
                    <img src={flags.svg} alt={flags.alt} className=''/>
                </div>
                <div className='cord-descriptions'>
                <p>
                    <span className='card-description'>
                        Name:
                    </span>
                    {name.common.lenght>10 ? name.common.slice(0,10)+"...":name.common}
                </p>
  
                <p>
                    <span className='card-description'> Capital:</span>
                    {capital}
                </p>
                <p>
                    <span className='card-description'>  Region:</span>
                    {region}
                </p>
                </div>
                <NavLink to={`/country/${name.common}`}>
                <button className='btn'>
                    Read More
                </button>
                </NavLink>
            </li>
        </div>
    )
}

export default CountryCard
