import React, { useEffect, useTransition } from 'react'
import { useState } from 'react';
import {getCountryData} from '../api/postApi';
import CountryCard from '../Components/Layout/CountryCard';
const Country = () => {
 const [isPending,startTransition]=useTransition();
 const [Countries, setCountries]=useState([]);  




useEffect(()=>{
  startTransition(async ()=>{
    const res= await getCountryData();
    setCountries(res.data)
  })

},[])





if(isPending){
  return <h1> Loading ....</h1>
}

  return (
   <setion className="count-item-list" >
    <ul className='count-list'>
      {
      Countries.map((currCountry,index)=>{
      return(
        <CountryCard Country={currCountry} key={index}  >

        </CountryCard>

      )})
      }
    </ul>
   </setion>
  )
}

export default Country
