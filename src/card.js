import React from 'react'

const card = ({year,message}) => {
    return (
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
           <h3>{year}</h3>
          </div>
          <div className="flip-card-back">
            <a className="links"href="">{message}</a>
          </div>
        </div>
      </div>
    )
}

export default card
