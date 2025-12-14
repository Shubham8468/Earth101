import React from 'react'
import './CountryCard.css'
import { NavLink } from 'react-router-dom';
const CountryCard = ({ Country, index }) => {
    const { flags, name, population, region, capital } = Country;
    return (
        <div className='count' key={index}>
            <li key={index} className='count-card'>
                <div className=' flag-img '>
                    <img src={flags.svg} alt={flags.alt} className=''/>
                </div>
                <div className='data-count'>
                <p>
                    <span className='data'>
                        Name: </span>
                    {name.common.length > 10 ? name.common.slice(0,10) + "..." : name.common}
                </p>
  
                <p>
                    <span className='data'> Capital: </span>
                    {capital}
                </p>
                <p>
                    <span className='data'>  Region: </span>
                    {region}
                </p>
                </div>
                <NavLink to={`/country/${name.common}`}>
                <button className='read-btn'>
                    Read More
                </button>
                </NavLink>
            </li>
        </div>
    )
}

export default CountryCard
