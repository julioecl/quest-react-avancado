import React, { useEffect, useState } from "react"
import Select from "react-select"
import PokemonCard from "../pokemon-card"
import styled from "styled-components";
import { ButtonDefault } from "../button";

const getPokemons = async (limit=10) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0/`
    const response = fetch(url)
    return await (await response).json()
  } catch (error) {
    console.log('Fetch getPokemons', error)
  }
}

const getPokemonData = async (url) => {
  try {
    const response = fetch(url)    
    return await (await response).json()    
  } catch (error) {
    console.log('Fetch getPokemonData', error)
  }
}

const getTypesOfPokemons = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/type/')
    return await response.json()    
  } catch (error) {
    console.log('Fetch getTypeOfPokemons', error)
  }
}

const PokemonList = () => {   
  const [ types, setTypes ] = useState([])
  const [ pokemons, setPokemons ] = useState([])  
  const [ limit, setLimit ] = useState(10) 
  
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(limit)                      
      const promise = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)        
      })                   
      const results = await Promise.all(promise)  
      setPokemons(results)
                         
    } catch (error) {
      console.log('Fetch Pokemons error: ', error)
    }
  } 

  const fetchTypeOfPokemons = async () => {
    try {
      const data = await getTypesOfPokemons() 
      const promise = data.results.map(async (type) => { 
        return type.name
      })                 
      const response = await Promise.all(promise)
      setTypes(response)                                                
    } catch (error) {
      console.log('Fetch Pokemons error: ', error)
    }
  } 

  const onClickHandler = () => {
    setLimit(limit+10)      
    getPokemons()    
  } 

  const handleInputChange = () => {
    console.log()
  }
  
  useEffect(() => {    
    fetchPokemons()
    fetchTypeOfPokemons()
         
  }, [limit])  
  
  return (
    <Section>
      <Div>
        {pokemons.map((pokemon, index) => {
          return (
            <PokemonCard pokemon={pokemon} key={index}></PokemonCard>
            )
          })}                   
      </Div>
      <div>
        <ButtonDefault onClick={onClickHandler}> Carregar mais </ButtonDefault>    
      </div> 
      <h3> Selecione o tipo do Pokémon! </h3>
      <Select onInputChange={handleInputChange} placeholder={'Tipos'}         
        options={types.map((type, index) => ({
          id: index,
          label: type          
        }))} getOptionValue={(option) => `${option['id']}`}>          
          </Select>       
    </Section>    
  )
}

export default PokemonList

const Div = styled.div`
  display: flex;  
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  gap: 25px;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;    
  align-items: center; 

`
// onChange={(event) => changeType(event.target.value)}

// const PokemonDetailsList = () => {

//   PokemonList()

//   return (    
//     {pokemons.map((pokemon, index) => {
//             return (
//               <PokemonDetails pokemon={pokemon} key={index}></PokemonDetails>
//               )
//             })} 
//     ) 
// }
