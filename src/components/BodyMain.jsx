import React from 'react'


export default function BodyMain({imageData}) {
  return (
    <div>
    {
      imageData.map(image=>{
        return(
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        )
      })
    }
  </div>
  )
}
