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
  let typesArr = []
  let numOfTypes = 18
  /**TODO:
   * Getting specific things that I need from the JSON.
   * Not all the data will be needed
   * {
      type1Name: {
            damage_relations:{},


      },
      type2Name:{
        
      }
    }
   */
  let typeData = {}

  for (let index = 0; index < numOfTypes; index++) {
    const type = await restRequest(
      `${BASE_URL}/type/${index + 1}`,
      createRestOptions({ method: "GET" })
    )
    // //create a object instead and push the keys that I want
    // //ex let typeData = {}
    // // typeData["name"] = type.name
    typesArr.push(type)
  }
  console.log("typesArr ", typesArr)
  return typesArr
}
