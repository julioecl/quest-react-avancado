import React from "react"
import styled from "styled-components";

const PokemonCard = (props) => {
    const { pokemon } = props   

    return (
        <>
            <section>
                <A> 
                    <Img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}></Img>
                    <h3> #{pokemon.id} - {pokemon.name}</h3>                   
                </A>                
            </section>
        </>
    )
}

export default PokemonCard

const A = styled.a`
    height: 175px;
    width: 215px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;    
    padding: 10px;
    text-transform: capitalize;    
    border: solid 0.8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.3em;       
`
const Img = styled.img`
    height: 100px;
    width: 100px;
`