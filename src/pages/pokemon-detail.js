import React from "react"
import styled from "styled-components"


const PokemonDetail = (props) => {
  const {pokemon} = props
    return (
        <Section>  
          <Div>
            <Ul>
              <h3> Abilities </h3>
              {
                  pokemon.abilities.map((ability, index) =>{
                      return (
                          <li key={index}>                            
                              <h4> {ability.ability.name} </h4>
                          </li>
                      )
                  })
              }
            </Ul>
            <Ul>
              <h3> Moves </h3>
              {
                  pokemon.moves.map((move, index) =>{
                      return (
                          <li key={index}>                            
                              <h4> {move.move.name} </h4>
                          </li>
                      )
                  })
              }
            </Ul>
            <Ul>
              <h3> Types </h3>
              {
                  pokemon.types.map((type, index) =>{
                      return (
                          <li key={index}>                            
                              <h4> {type.type.name} </h4>
                          </li>
                      )
                  })
              }
            </Ul>
          </Div>
        </Section>
    )
}

export default PokemonDetail

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100px;
  align-items: center;
  margin: 50px;  
`

const Div = styled.div`
  display: flex;
  gap: 25px  
`

const Ul = styled.ul`
  list-style: none;
  text-transform: capitalize;
`