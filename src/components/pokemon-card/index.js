import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = (props) => {    

    const { pokemon } = props  

    return (    
        <section>
            <Div>                
                <Link to={`pokemon/${pokemon.id}`}>                     
                    <Img src={(pokemon.sprites.other["official-artwork"].front_default === null) ?  pokemon.sprites.front_default : pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name}></Img>                     
                    <h3> {pokemon.name} </h3>                   
                </Link>                             
            </Div>    
        </section>
    )
}

export default PokemonCard

const Div = styled.div`    
    height: 140px;
    width: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;    
    padding: 10px;
    text-transform: capitalize;    
    border-radius: 25px;
    cursor: pointer; 
    transition: ease-in-out 0.3s;     
    box-shadow: rgba(0, 0, 0, 0.25) 0px 15px 25px, rgba(0, 0, 0, 0.15) 0px 5px 10px; 
    &:hover {        
        transform: translateY(-10px);
    }      
`

const Img = styled.img`
    height: 100px;
    width: 100px;
`