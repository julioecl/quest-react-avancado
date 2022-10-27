import React from "react";
import styled from "styled-components";
import ScrollButton from "../scroll-button";

export const Footer = () => {
    return (
        <Div>
            <div>
                <ScrollButton/>
            </div>           
            <Div>            
                <h3> Powered by PokéApi.co </h3>
                <h3> Created by Julio Lima</h3>
            </Div>
        </Div>
        
    )
}

const Div = styled.div`
    margin: 25px;    
    display: flex;
    flex-direction: column;
    text-align: center;      
`
