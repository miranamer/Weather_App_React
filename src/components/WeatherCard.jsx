import React from 'react'

const WeatherCard = ({imageURL, weather}) => {



  return (
    <>

        <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={`${imageURL}`} alt="WeatherImg" className='min-h-[250px]' /></figure>
        <div className="card-body flex items-center justify-center">
            <h2 className="card-title text-5xl">{Math.round(weather.main.temp)}°C</h2>
        </div>
        </div>

    </>
  )
}

export default WeatherCard