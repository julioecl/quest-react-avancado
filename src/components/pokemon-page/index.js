import React, { useContext } from "react"
import PokemonList from "../pokemon-list"
import { logoImg } from "../../variables";
import styled from "styled-components";
import { ThemeContext } from "../context/theme.context";
import { ThemeTogglerButton } from "../theme-toggler-button";



const PokemonPage = () => {

  const { theme } = useContext(ThemeContext) 

  // const storageTheme = (JSON.stringify(theme))
  // localStorage.setItem('storageTheme', storageTheme)
  
  return (         
    <Section style={{ color: theme.color, backgroundColor: theme.background }}>
        <Img src={logoImg} alt={'logo'}></Img>
        <ThemeTogglerButton/>  
        <Div>                      
          <PokemonList />          
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
  
`

const Img = styled.img`
  margin: 20px;
  width: 250px;
`

