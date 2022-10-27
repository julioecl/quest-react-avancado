export const getPokemons = async (limit=10) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0/`)
      return await response.json()
    } catch (error) {
      console.log('Fetch getPokemons', error)
    }
}

export const getPokemon = async (id) => {
  try { 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await response.json() 
    } catch (error) {
      console.log('Fetch getPokemonData', error)
    }
}

export const getAbilityDescription = async (ability) => {
  try { 
    const response = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`)        
    return await response.json() 
    } catch (error) {
      console.log('Fetch getPokemonData', error)
    }
}

export const getData = async (url) => {
    try {
      const response = await fetch(url)                 
      return await response.json()    
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
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)    
    return await response.json()       
  } catch (error) {
    console.log('Fetch getPokemonData', error)
  }
}