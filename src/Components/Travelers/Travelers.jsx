import React from 'react'

import paris from '../../assets/paris.jpg'
import dubai from '../../assets/dubai.jpg'
import NewYork from '../../assets/newyork.jpg'
import London from '../../assets/london.jpg'


import traveler1 from '../../assets/user(1).jpg'



const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'Onur Ç',
    socialLink: '@onurcetineer'
  },
  {
    id: 2,
    destinationImage: dubai,
    travelerImage: traveler1,
    travelerName: 'Onur Ç',
    socialLink: '@onurcetineer'
  },
  {
    id: 3,
    destinationImage: NewYork,
    travelerImage: traveler1,
    travelerName: 'Onur Ç',
    socialLink: '@onurcetineer'
  },
  {
    id: 4,
    destinationImage: London,
    travelerImage: traveler1,
    travelerName: 'Onur Ç',
    socialLink: '@onurcetineer'
  }

]


const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">

           {
            travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=> {
              return(
                <div key={id} className="singleTraveler">

              <img src={destinationImage} className='destinationImage' />

              <div className="travelerDetails">
                <div className="travelerPicture">
                  <img src={travelerImage} className='travelerImage' />
                </div>
                <div className="travelerName">
                  <span>{travelerName}</span>
                  <p>{socialLink}</p>
                </div>
              </div>

            </div>
              )
            })
           }


        </div>
        
      </div>
    </div>
  )
}

export default Travelers