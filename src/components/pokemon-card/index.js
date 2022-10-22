import React, { useEffect, useState } from "react"
import styled from "styled-components";
import { getPokemon, getPokemonData } from "../services";

const PokemonCard = (props) => {    

    const { pokemon } = props 

    const onClickHandler = () => {         
        getPokemon(pokemon.id)                                    
        return
    }       

    return (    
        <section>                
                <A onClick={onClickHandler}>                     
                    <Img src={(pokemon.sprites.other["official-artwork"].front_default === null) ?  pokemon.sprites.front_default : pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}></Img>                     
                    <h3> {pokemon.name} </h3>                   
                </A>                             
        </section>
    )
}

export default PokemonCard

const A = styled.a`
    height: 190px;
    width: 190px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;    
    padding: 10px;
    text-transform: capitalize;    
    border-radius: 25px;
    cursor: pointer; 
    box-shadow: rgba(0, 0, 0, 0.25) 0px 15px 25px, rgba(0, 0, 0, 0.15) 0px 5px 10px;       
`
const Img = styled.img`
    height: 125px;
    width: 125px;
`