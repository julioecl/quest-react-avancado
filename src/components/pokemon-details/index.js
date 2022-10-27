import React, { useContext, useEffect, useState } from "react";
import { ButtonDefault } from "../button";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/theme.context";
import { Footer } from "../footer";
import { getPokemon, getData } from "../services";
import ScrollToTop from "../services/scroll-to-top";
import { Header } from "../header";

const PokemonDetails = () => {

    const { theme } = useContext(ThemeContext)
    const { id } = useParams();
    const [ ability, setAbility] = useState({})    
    const [ pokemon, setPokemon ] = useState({}) 

    useEffect(() => { 
        const fetchPokemon = async () => {            
            try {   
                const pokemon = await getPokemon(id)                
                const promise = pokemon.abilities.map( (ability) => {
                    return getData(ability.ability.url)
                  })                   
                  const results = await Promise.all(promise)
                setPokemon(pokemon)
                setAbility(results)                
            } catch (error) {
                console.log('Fetch Pokemons error: ', error)
            }
        }
        fetchPokemon()         
    }, [id])  
    

    return (
        <Section style={{ color: theme.color, backgroundColor: theme.background }}>
            <Header/>           
            <Link to="/"> 
                <ButtonDefault > Voltar </ButtonDefault>
            <ScrollToTop/>    
            </Link>
            <DivInfos>
                <DivInfo>                
                    <H2> {pokemon.name} </H2>
                    <H3> Number: #{pokemon.id} </H3>
                    <H3> Weight: {pokemon.weight/10} kg</H3>
                    <H3> Height: {pokemon.height/10} m </H3>
                    <H3> Type(s): </H3> 
                    <Span>              
                        {pokemon.types?.map((type, index) => {
                        if (pokemon.types.length - 1 === index ) {
                            return (
                                <Span key={index}> {type.type.name} </Span>
                            )    
                        } else {
                            return (
                                <Span key={index}> {type.type.name} and </Span>
                            )
                        } 
                    })}
                    </Span>
                </DivInfo>
                <DivInfo>
                    <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name}></Img>
                </DivInfo>                
            </DivInfos>
            <Div>                  
                <H3> Moves  </H3>
                <Span>                  
                {pokemon.moves?.map((move, index) => {
                    if (pokemon.moves.length === 1) {
                        return (
                            <Span key={index}> {move.move.name} </Span>
                    )} if (pokemon.moves.length - 1 === index) {                        
                        return (
                        <Span key={index}> {move.move.name}. </Span>
                    )}  else {
                        return (
                            <Span key={index}> {move.move.name}, </Span>                          
                        )
                    }
                    
                })} </Span> 
            </Div>
            <Div>       
                <H3> Abilities </H3>                
                {/* {ability ? (ability?.map((stat, index) => {                    
                    return (
                        <P key={index}>
                            {stat.name}: <Span> {stat.effect_entries[1].effect}  </Span> 
                        </P>
                    )
                })): ('')}            */}
            </Div>
            <Footer/>
        </Section>
    )
}

export default PokemonDetails

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 25px;    
  align-items: center; 
   
`
const H2 = styled.h2`
    text-transform: capitalize;
    font-size: 2.5em;
    margin-bottom: 15px;
`

const H3 = styled.h3`    
    margin-bottom: 15px;
    &&::first-letter {
        text-transform: uppercase;
    }    
`
const P = styled.p`    
    margin-bottom: 15px;
    &&::first-letter {
        text-transform: uppercase;
    }    
`
const Span = styled.span`    
    margin-bottom: 15px;
    &&::first-letter {
        text-transform: uppercase;
    }    
`

const DivInfos = styled.div`
    display: flex;
    align-itens: center;
    margin: auto 15px;
    flex-wrap: wrap;
                 
`
const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    margin: auto;
    text-align: center;
                    
`

const Div = styled.div`
  display: flex;
  flex-direction: column; 
  margin: auto 15px;;   
  align-items: center;
  font-size: 1.1em;
  text-align: justify;
      
`

const Img = styled.img`
    margin: 15px;
    height: 375px;
    width: 375px;
`
