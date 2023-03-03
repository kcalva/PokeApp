import React from "react"

const Types = ({ typeName, typeData }) => {
  const getTypeName = (typeName) => {
    return (
      <div
        id={typeName.charAt(0).toUpperCase() + typeName.slice(1)}
        className="Type-name"
      >
        {typeName.toUpperCase()}
      </div>
    )
  }

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
      <>
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
      </>
    ) : null
  }
  return (
    <div className="Type-container">
      {getTypeName(typeName)}
      {getWeakAgainstTypes(typeData, typeName)}
      {getStrongAgainstTypes(typeData, typeName)}
      <hr />
    </div>
  )
}

export default Types
