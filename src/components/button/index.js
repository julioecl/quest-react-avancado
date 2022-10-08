import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/theme.context";


export const ButtonDefault = (props) => {    

    const { theme } = useContext(ThemeContext)

    return ( 
        <Button {...props} style={{ color: theme.color }}
        ></Button>
    )
}

const Button = styled.button`
  background-color: #6B94A8;
  border: none;    
  padding: 10px 20px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  height: 40px;          
`

