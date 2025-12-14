import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import { getCountryInvData } from '../../api/postApi';
import './CountryDetails.css'
const CountryDetails = () => {
    const params = useParams(); // get route params
    console.log(params)
    const [isPending, startTransition] = useTransition();
    const [Countrie, setCountrie] = useState([]);




    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryInvData(params.id);
            console.log(res);
            if (res && res.status === 200) {
                setCountrie(res.data);
            }
        })
    }, [params.id])
    if (isPending) {
        return <h1> Loading ....</h1>
    }

    return (
        <section className='one-item-main'>
            <div className='one-item-div'>
                {
                    Countrie?.map((item, index) => {
                        return (
                            <div className='one-item' key={index}>
                                <div className='one-img'>
                                    <img src={item?.flags?.svg} alt={item?.name?.common ?? item?.name?.official ?? 'flag'} className='main-img-item' />
                                </div>
                                <div className='left-items'>
                                    <ul className='left-items-titels'>
                                        <p className='all-info'>
                                            <span className='one-details'> Official Name: </span>
                                            {item?.name?.official ?? 'No name'}
                                        </p>
                                        <p className='all-info'>
                                            <span className='one-details'> Population: </span>
                                            {item?.population ?? 'No name'}
                                        </p>
                                        <p className='all-info'>
                                            <span className='one-details'> Region:  </span>
                                            {item?.region?? 'No name'}
                                        </p>
                                        <p className='all-info'>
                                            <span className='one-details'> Capital: </span>
                                            {item?.capital ?? 'No name'}
                                        </p>
                                        <p className='all-info'>
                                            <span className='one-details'> Borders: </span>
                                            {item?.borders ?? 'No name'}
                                        </p>
                                        
                                        <p className='all-info'>
                                            <span className='one-details'> Top-Level Domain: </span>
                                            {item?.tld ?? 'No name'}
                                        </p>
                                      
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default CountryDetails
