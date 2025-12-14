import React from 'react'
import './Footers.css'
import footerData from '../../../api/footerApi.json'
import { MdPlace } from 'react-icons/md'; 
import {IoCallSharp} from 'react-icons/io5';
import {TbMailPlus} from 'react-icons/tb';
const Footers = () => {
  const footerIcon={
    MdPlace:<MdPlace/>,
    IoCallSharp:<IoCallSharp/>,
    TbMailPlus:<TbMailPlus  />
  }
  return (
    <footer className='footer-section'>

      <div className='container grid grid-three-cols'>
        {
          footerData.map((curData, index) => {
            const { icon,title, info } = curData;
            return(
              <div className='footer-co' key={index}>
               <div className='icon'>{footerIcon[icon]}</div>
               <div className="footer-contact-text">
                <p className='title'>{title}</p>
                <p className='info'>{info}</p>
               </div>






                </div>

            )

          })
          
        }
      </div>
      <div>
        <hr />
        <div className="right">
          <p className='great'> Stop scrolling… you look great today 😎 </p>
          <p className='all'>© 2024 Shubham | Creafted with passion & code. <br />All Rights Reserved </p>
        </div>
      </div>
    </footer>
  )
}

export default Footers
