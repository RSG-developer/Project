import React from 'react'

import seriesData from '../api/thapa_series.json'
export default function Netflixseries() {
  return (
   <div className='container my-4 ' id="home"> 
    <div className='row'>
      {seriesData.map((series, index) => (
        <div className="col-md-3 mb-4" key={index}>
        <div className="card " style={{ width: "18rem" }}>
          <img src={series.img_url} className="card-img-top" alt={series.name || "Series Image"} />
          <div className="card-body">
            <h5 className="card-title">{series.name || "Title not available"}</h5>
            <h6>Ratings :{series.rating}</h6>
            <p className="card-text text-rose-600">{series.description || "Description not available"}</p>
            <a href={series.watch_url || "#"} className="btn btn-primary">
              Watch Now
            </a>
          </div>
         </div> 
        </div>
      ))}
    </div>
  
  </div>
);
    
}
