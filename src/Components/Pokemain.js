import React from "react"

const Pokemain = ({ typeData }) => {
  return (
    <div className="Main-container">
      {typeData
        ? Object.keys(typeData).map((typeName, index) => {
            return (
              <div key={index} className="Type-container">
                <div
                  id={typeName.charAt(0).toUpperCase() + typeName.slice(1)}
                  className="Type-name"
                >
                  {typeName.toUpperCase()}
                </div>
                {typeData[typeName].damage_relations.double_damage_from.map(
                  (typeDoubleDamage, index) => {
                    let typeName =
                      typeDoubleDamage.name.charAt(0).toUpperCase() +
                      typeDoubleDamage.name.slice(1)
                    return (
                      <div id={typeName} key={index}>
                        {typeName}
                      </div>
                    )
                  }
                )}
                <hr />
              </div>
            )
          })
        : null}
    </div>
  )
}

export default Pokemain
