import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';

const infosData = [
     { 
          title: 'Opening Hours',
          description: 'We are open 7 days',
          icon: {faClock},
          background: 'primary'
     },
     { 
          title: 'Visite Our Locations ',
          description: 'brooklyn, NY 10003 USA',
          icon: {faMapMarked},
          background: 'dark'
     },
     { 
          title: 'Call us now',
          description: '+1569854124',
          icon: {faPhone},
          background: 'primary'
     }
]

const BusinessInfo = () => {
     return (
          <section className='d-flex justify-content-center'>
               <div className='w-75 row '>
                    {
                         infosData.map( info => <InfoCard info={info}></InfoCard>)
                    }
               </div>
          </section>
     );
};

export default BusinessInfo;