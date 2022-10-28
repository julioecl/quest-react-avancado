import React, { useEffect, useState } from "react"
import PokemonCard from "../pokemon-card"
import styled from "styled-components";
import { getData, getTypesOfPokemons, getTypesOfPokemonsData } from "../services";
import Select from "react-select"
import { themes } from "../context/theme.context";


const PokemonTypeList = () => { 
  const [ pokemons, setPokemons ] = useState([])  
  const [ types, setTypes ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ type, setType ] = useState(['normal'])  

  
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getTypesOfPokemonsData(type)                         
      const promise = data.pokemon.map(async (pokemon) => {                    
        return await getData(pokemon.pokemon.url)        
      })      
      const results = await Promise.all(promise)       
      setPokemons(results)      
      setLoading(false)                            
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
    if (type === 'shadow'|| type === 'unknown')  {
      alert("There's no Pokémon of this type. Please chooser another type!")
      return 
    } 
    fetchPokemons() 
    fetchTypeOfPokemons()
  }, [type])  

  const changeSelectOptionHandler = (e) => {
    setType(e.value) 
  }  
  
  return (
    <Section>
      <h3> Select a type of Pokémon: </h3>
      <div> 
        <DivSelect>
        <Select placeholder={type} onChange={changeSelectOptionHandler} theme={(theme) => ({
      ...theme,
      borderRadius: 3,
      colors: {
        ...theme.colors,
        primary50: "#b0b0b0",
        primary25: "#b0b0b0",
        primary: "#979797",
        neutral0: "#fef4d1"        
      },
    })}
        options={types.map((type, index) => ({id: index, value: type, label: type}))}></Select> 
        </DivSelect>
      </div>
      <Div>
        {loading ? (<h3> Loading, hold on kid...</h3>) :        
        (pokemons.map((pokemon, index) => {
          return (
            <PokemonCard pokemon={pokemon} key={index}></PokemonCard>
            )
          }))}                   
      </Div>                       
    </Section>    
  )
}

export default PokemonTypeList

const Div = styled.div`
  display: flex;  
  flex-wrap: wrap;
  
  justify-content: center;
  gap: 25px;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;    
  align-items: center;  
`

const DivSelect = styled.div`      
  text-transform: capitalize;
  border-style: none; 
  width: 120px;
  color: #000000;
`

 
