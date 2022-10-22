import React, { useEffect, useState } from "react"
import PokemonCard from "../pokemon-card"
import styled from "styled-components";
import { getPokemonData, getTypesOfPokemons, getTypesOfPokemonsData } from "../services";
import Select from "react-select"


const PokemonTypeList = () => { 
  const [ pokemons, setPokemons ] = useState([])  
  const [ types, setTypes ] = useState([])
  const [ type, setType ] = useState(['normal'])  

  
  const fetchPokemons = async () => {
    try {
      const data = await getTypesOfPokemonsData(type)                         
      const promise = data.pokemon.map(async (pokemon) => {                    
        return await getPokemonData(pokemon.pokemon.url)        
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

  useEffect(() => {    
    fetchPokemons() 
    fetchTypeOfPokemons()           
  }, [type])

  const changeSelectOptionHandler = (e) => {
    setType(e.value)      
  }
  
  return (
    <Section>
      <div>     
        <h3> Selecione o tipo de pokémon:</h3>
        <DivSelect>
        <Select placeholder={type} onChange={changeSelectOptionHandler} options={types.map((type, index) => ({id: index, value: type, label: type}))}></Select> 
        </DivSelect>
      </div>
      <Div>        
        {pokemons.map((pokemon, index) => {
          return (
            <PokemonCard pokemon={pokemon} key={index}></PokemonCard>
            )
          })}                   
      </Div>                       
    </Section>    
  )
}

export default PokemonTypeList

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
  align-items: center; `

const DivSelect = styled.div`
  color: #000000; 
  margin-top: 5px;
  text-transform: capitalize;   
`