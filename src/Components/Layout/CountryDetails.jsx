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
        <section className='card country-details-card container'>
            <div className='container-card bg-white-box'>
                {
                    Countrie?.map((item, index) => {
                        return (
                            <div className='main-items' key={index}>
                                <div className='Detail-img'>
                                    <img src={item?.flags?.svg} alt={item?.name?.common ?? item?.name?.official ?? 'flag'} className='main-img-item' />
                                </div>
                                <div className='left-items'>
                                    <ul className='left-items-titels'>
                                        <p>
                                            <span className='card-description'> Official Name:</span>
                                            {item?.name?.official ?? 'No name'}
                                        </p>
                                        <p>
                                            <span className='card-description'> Population:</span>
                                            {item?.population ?? 'No name'}
                                        </p>
                                        <p>
                                            <span className='card-description'> Region:</span>
                                            {item?.region?? 'No name'}
                                        </p>
                                        <p>
                                            <span className='card-description'> Capital:</span>
                                            {item?.capital ?? 'No name'}
                                        </p>
                                        <p>
                                            <span className='card-description'> Borders:</span>
                                            {item?.Borders ?? 'No name'}
                                        </p>
                                        <p>
                                            <span className='card-description'> Currencies:</span>
                                            {item?.Currencies?? 'No name'}
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
