export const getPokemons = async (limit=10) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0/`
      const response = fetch(url)
      return await (await response).json()
    } catch (error) {
      console.log('Fetch getPokemons', error)
    }
}

export const getPokemon = async (id) => {
  try {    
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`    
    const response = fetch(url)
    return await (await response).json()    
    } catch (error) {
      console.log('Fetch getPokemonData', error)
    }
}

export const getPokemonData = async (url) => {
    try {
      const response = fetch(url)
      return await (await response).json()    
    } catch (error) {
      console.log('Fetch getPokemonData', error)
    }
}

export const getTypesOfPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/type/')
      return await response.json()    
    } catch (error) {
      console.log('Fetch getTypeOfPokemons', error)
    }
}

export const getTypesOfPokemonsData = async (type) => {
  try {
    const response = fetch(`https://pokeapi.co/api/v2/type/${type}`)    
    return await (await response).json()       
  } catch (error) {
    console.log('Fetch getPokemonData', error)
  }
}
