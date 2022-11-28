import React, {useState} from 'react'

const DateBox = ({dates, boxClose, setBoxClose}) => {

  return (
    <>

        <div className="fixed bottom-4 left-4 text-white">
          <div className="card w-[300px] h-[120px] bg-neutral ">
            <div className="card-body items-center text-center">
              <div onClick={() => setBoxClose(!boxClose)} className="badge badge-error absolute top-2 left-2 gap-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                Close
              </div>
              <h2 className="card-title text-md">{dates(new Date())}</h2>
            </div>
          </div>
        </div>

    </>
  )
}

export default DateBox