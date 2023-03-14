import { Types } from "../Components"

const Pokemon = ({ typeData }) => {
  const getPokemon = (typeData, typeName) => {
    return (
      <div>
        <label>Pokemon:</label>
        {console.log(typeData[typeName].pokemon)}
        {typeData[typeName].pokemon.map((p, i) => {
          return <div key={i}>{p.pokemon.name}</div>
        })}
      </div>
    )
  }
  return (
    <div className="Main-container">
      {typeData
        ? Object.keys(typeData).map((typeName, index) => {
            return (
              <div className="Type-container" key={index}>
                <Types typeName={typeName} />
                {getPokemon(typeData, typeName)}
              </div>
            )
          })
        : null}
    </div>
  )
}

export default Pokemon
