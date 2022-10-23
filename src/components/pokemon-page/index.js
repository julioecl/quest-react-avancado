import React, { useContext } from "react"
import PokemonList from "../pokemon-list"
import { logoImg } from "../../variables";
import styled from "styled-components";
import { ThemeContext } from "../context/theme.context";
import { ThemeTogglerButton } from "../theme-toggler-button";
import PokemonTypeList from "../pokemon-type-list";
import { Footer } from "../footer/footer";

const PokemonPage = () => {
  
  const { theme } = useContext(ThemeContext)   
  
  return (         
    <Section style={{ color: theme.color, backgroundColor: theme.background }}>
        <Img src={logoImg} alt={'logo'}></Img>
        <ThemeTogglerButton/>  
        <Div>                      
          <PokemonList />                
          <PokemonTypeList/>         
        </Div> 
        <Div>
          <Footer/>
        </Div>    
    </Section>        
  )
}

export default PokemonPage

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;    
  align-items: center;     
`
const Div = styled.div`
  display: flex; 
  flex-direction: column; 
  align-itens: center;  
  gap: 25px;
  text-align: center;
`

const Img = styled.img`
  margin: 20px;
  width: 250px;
`

