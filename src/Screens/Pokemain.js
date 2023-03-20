import React, { useState } from "react"
import { Main } from "../Components"
import { useOmniAural } from "omniaural"

const Pokemain = () => {
  // const [typeData] = useOmniAural("typeData")
  // const [drive, setDrive] = React.useState(null) // the lifted state

  // const getWeakAgainstTypes = (typeData, typeName) => {
  //   return (
  //     <div>
  //       <label>Weak against:</label>
  //       {typeData[typeName].damage_relations.double_damage_from.map(
  //         (typeDoubleDamageFrom, i) => {
  //           let typeName =
  //             typeDoubleDamageFrom.name.charAt(0).toUpperCase() +
  //             typeDoubleDamageFrom.name.slice(1)
  //           return (
  //             /**TODO Start working on styling and adding data to this: */
  //             <div id={typeName} key={i}>
  //               {typeName}
  //             </div>
  //           )
  //         }
  //       )}
  //     </div>
  //   )
  // }
  // const getStrongAgainstTypes = (typeData, typeName) => {
  //   return typeData[typeName].damage_relations.double_damage_to.length > 0 ? (
  //     <div>
  //       <label>Strong against:</label>
  //       {typeData[typeName].damage_relations.double_damage_to.map(
  //         (typeDoubleDamageTo, i) => {
  //           let typeName =
  //             typeDoubleDamageTo.name.charAt(0).toUpperCase() +
  //             typeDoubleDamageTo.name.slice(1)
  //           return (
  //             /**TODO Start working on styling and adding data to this: */
  //             <div id={typeName} key={i}>
  //               {typeName}
  //             </div>
  //           )
  //         }
  //       )}
  //     </div>
  //   ) : null
  // }
  return (
    <div>
      hello
      <hr />
    </div>
    // <Main sendDataToParent={sendDataToParent}>
    //   {console.log(drive)}
    //   {/* {getWeakAgainstTypes(typeData)} */}
    //   <hr />
    // </Main>
  )
}

export default Pokemain
