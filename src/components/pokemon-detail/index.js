import React from "react";
import { ButtonDefault } from "../button";
import styled from "styled-components";

const PokemonDetail = () => {     
    
    const onClickHandler = () => {
        console.log('voltar')
    }

    return(
        <Section>
            <ButtonDefault onClick={onClickHandler}> Voltar </ButtonDefault> 
            {/* <div>                 
                <h2> {data.name} </h2>
            </div>
            <div>
                <h3> Moves </h3>
                <Ul>
                {data.moves.map((move, index) => {
                    return (
                        <li key={index}>
                            {move.move.name}
                        </li>
                    )
                })}
                </Ul>
            </div>
            <div>
                <h3> Abilities </h3>
                <Ul>
                {data.abilities.map((ability, index) => {
                    return (
                        <li key={index}>
                            {ability.ability.name}
                        </li>
                    )
                })}
                </Ul>
            </div>
            <div>
                <h3> Types </h3>
                <Ul>
                {data.types.map((type, index) => {
                    return (
                        <li key={index}> {type.type.name} </li>
                    )
                })}
                </Ul>
            </div> */}
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
const Ul = styled.ul`
  list-style: none;
  text-transform: capitalize;
`