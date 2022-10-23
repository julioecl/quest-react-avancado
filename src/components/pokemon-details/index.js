import React, { useContext, useEffect, useState } from "react";
import { ButtonDefault } from "../button";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/theme.context";
import { Footer } from "../footer/footer";
import { getPokemon } from "../services";
import { logoImg } from "../../variables";

const PokemonDetail = () => {

    const { theme } = useContext(ThemeContext)
    const { id } = useParams();
    const [ pokemon, setPokemon ] = useState([])
      
    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const pokemon = await getPokemon(id)
                setPokemon(pokemon) 
                return                               
            } catch (error) {
                console.log('Fetch Pokemons error: ', error)
            }
        }     
    fetchPokemon()              
    }, []) 

    return(
        <Section style={{ color: theme.color, backgroundColor: theme.background }}>
            <LogoImg src={logoImg} alt={'logo'}></LogoImg>            
            <Link to="/"> 
                <ButtonDefault > Voltar </ButtonDefault>
            </Link>
            <H2> {pokemon.name} </H2>
            <Img src={(pokemon.sprites.other["official-artwork"].front_default === null) ?  pokemon.sprites.front_default : pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}></Img>
            
            <Div>                  
                <H3> Moves  </H3>
                <span>                  
                {pokemon.moves.map((move, index) => {
                    return (
                        <span key={index}> {move.move.name}, </span>                          
                    )
                })} </span> 
            </Div>
            <Div>       
                <H3> Abilities  </H3> 
                {pokemon.abilities.map((ability, index) => {
                    return (
                        <Ul key={index}>
                            {ability.ability.name}: <span> description </span> 
                        </Ul>
                    )
                })}             
            </Div>
            <Div>                        
                <H3> Type(s): </H3>
                <Ul>
                {pokemon.types.map((type, index) => {
                    return (
                        <li key={index}> {type.type.name} </li>
                    )
                })}
                </Ul> 
            </Div>
            <Footer/>
        </Section>
    )
}

export default PokemonDetail

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;    
  align-items: center;  
`
const H2 = styled.h2`
    text-transform: capitalize;
    font-size: 3rem;
    margin-bottom: 15px;
`

const H3 = styled.h3`    
    margin-bottom: 15px;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;  
  margin: 15px 40px;    
  align-items: center;
  font-size: 1.1rem;   
`

const Ul = styled.ul`
  list-style: none;  
`

const Img = styled.img`
    margin: 15px;
    height: 475px;
    width: 475px;
`

const LogoImg = styled.img`
  margin: 20px;
  width: 250px;
`