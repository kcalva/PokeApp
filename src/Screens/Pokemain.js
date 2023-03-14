import React from "react"
import { Types } from "../Components"

const Pokemain = ({ typeData }) => {
  const getWeakAgainstTypes = (typeData, typeName) => {
    return (
      <div>
        <label>Weak against:</label>
        {typeData[typeName].damage_relations.double_damage_from.map(
          (typeDoubleDamageFrom, i) => {
            let typeName =
              typeDoubleDamageFrom.name.charAt(0).toUpperCase() +
              typeDoubleDamageFrom.name.slice(1)
            return (
              /**TODO Start working on styling and adding data to this: */
              <div id={typeName} key={i}>
                {typeName}
              </div>
            )
          }
        )}
      </div>
    )
  }
  const getStrongAgainstTypes = (typeData, typeName) => {
    return typeData[typeName].damage_relations.double_damage_to.length > 0 ? (
      <div>
        <label>Strong against:</label>
        {typeData[typeName].damage_relations.double_damage_to.map(
          (typeDoubleDamageTo, i) => {
            let typeName =
              typeDoubleDamageTo.name.charAt(0).toUpperCase() +
              typeDoubleDamageTo.name.slice(1)
            return (
              /**TODO Start working on styling and adding data to this: */
              <div id={typeName} key={i}>
                {typeName}
              </div>
            )
          }
        )}
      </div>
    ) : null
  }
  return (
    <div className="Main-container">
      {typeData
        ? Object.keys(typeData).map((typeName, index) => {
            return (
              <div className="Type-container" key={index}>
                <Types typeName={typeName} />
                {getWeakAgainstTypes(typeData, typeName)}
                {getStrongAgainstTypes(typeData, typeName)}
                <hr />
              </div>
            )
          })
        : null}
    </div>
  )
}

export default Pokemain
