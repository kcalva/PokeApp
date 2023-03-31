import { useOmniAural } from "omniaural"

const Pokemon = ({ typeName }) => {
  const [typeData] = useOmniAural("typeData")

  const getPokemon = (typeData, typeName) => {
    return (
      <div>
        <label>Pokemon:</label>
        {typeData[typeName].pokemon.map((p, i) => {
          return <div key={i}>{p.pokemon.name}</div>
        })}
      </div>
    )
  }
  return <>{getPokemon(typeData, typeName)}</>
}

export default Pokemon
