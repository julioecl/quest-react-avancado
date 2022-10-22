import React, { useEffect, useState } from "react"
import PokemonCard from "../pokemon-card"
import styled from "styled-components";
import { ButtonDefault } from "../button";
import { getPokemonData, getPokemons } from "../services";

const PokemonList = () => {    
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

  const onClickHandler = () => {
    setLimit(limit+10)      
    getPokemons()        
  }   
  
  useEffect(() => {    
    fetchPokemons()              
  }, [limit])  
  
  return (
    <Section>
      <Div>
        {pokemons.map((pokemon, index) => {
          return (
            <div key={index}>
              <PokemonCard pokemon={pokemon}></PokemonCard>                   
            </div>
            )
          })}                   
      </Div>
      <div>
        <ButtonDefault onClick={onClickHandler}> Carregar mais </ButtonDefault>    
      </div>                    
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
const Ul = styled.ul`
  list-style: none;
  text-transform: capitalize;
`