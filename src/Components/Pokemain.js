import React from "react"
import Types from "./Types"

const Pokemain = ({ typeData }) => {
  return (
    <div className="Main-container">
      {typeData
        ? Object.keys(typeData).map((typeName, index) => {
            return <Types key={index} typeName={typeName} typeData={typeData} />
          })
        : null}
    </div>
  )
}

export default Pokemain
