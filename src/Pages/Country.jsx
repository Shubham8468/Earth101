import React, { useEffect, useTransition } from 'react'
import { useState } from 'react';
import {getCountryData} from '../api/postApi';
import CountryCard from '../Components/Layout/CountryCard';
import SerachFilter from '../Components/Layout/UI/SerachFilter';
const Country = () => {
 const [isPending,startTransition]=useTransition();
 const [Countries, setCountries]=useState([]);  


 const[search, setSearch]=useState('');
 const[filter, setFilter]=useState('all');



useEffect(()=>{
  startTransition(async ()=>{
    const res= await getCountryData();
    setCountries(res.data)
  })

},[])





if(isPending){
  return <h1> Loading ....</h1>
}
 const filterCountries=Countries.filter((country)=>{
  // Search filter
  const matchesSearch = search 
    ? country.name.common.toLowerCase().includes(search.toLowerCase())
    : true;
  
  // Region filter
  const matchesFilter = filter === 'all' 
    ? true 
    : country.region.toLowerCase() === filter.toLowerCase();
  
  return matchesSearch && matchesFilter;
 })
  return (
   <section className="count-item-list" >
     <SerachFilter
      search={search}
      setSearch={setSearch}
      filter={filter}
      setFilter={setFilter}
     />


    <ul className='count-list'>
      {
      filterCountries.map((currCountry,index)=>{
      return(
        <CountryCard Country={currCountry} key={index}  >

        </CountryCard>

      )})
      }
    </ul>
   </section>
  )
}

export default Country
