import React from "react";
import styled from "styled-components";
import { logoImg } from "../../variables";
import { ThemeTogglerButton } from "../theme-toggler-button";

export const Header = () => {
    return (
        <Div>            
            <img src={logoImg} alt={'logo'}></img>
            <ThemeTogglerButton/> 
        </Div>
    )
}

const Div = styled.div`
    margin: 50px;
    gap: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;   
`