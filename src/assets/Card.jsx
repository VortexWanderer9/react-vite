import React from 'react'



const Card = () => {
  return (
    <div className="card-grid">
        <div className="card">
            <div className="image">
            <img src="./defult.jpeg" alt="" />
        </div>
        <div className="extra-information">
            <h2>Peaky Blinders</h2>
            <p className='overview'>A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.</p>
           <div className="extra">
             <p className='popularity'><span>★</span> 12.2</p>
            <p className='release_date'>2024</p>
            <p className="language">eng</p>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Card