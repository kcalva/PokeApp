import { BASE_URL } from "./constants"

const restRequest = async (url, options) => {
  //   console.log("CALLING API: " + url, options)
  let res = await fetch(url, options)
  let json = await res.json()
  return json
}

const createRestOptions = (options) => {
  let rval = {
    method: options.method,
    body: JSON.stringify(options.body),
  }

  return rval
}

export const getPokeTypes = async () => {
  let numOfTypes = 18
  let typeData = {}

  for (let index = 0; index < numOfTypes; index++) {
    const type = await restRequest(
      `${BASE_URL}/type/${index + 1}`,
      createRestOptions({ method: "GET" })
    )
    typeData[type.name] = {
      damage_relations: type.damage_relations,
      pokemon: type.pokemon,
      moves: type.moves,
      past_damage_relations: type.past_damage_relations,
      id: type.id,
    }
  }
  console.log(typeData)
  return typeData
}
