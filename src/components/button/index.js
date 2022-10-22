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
  background-color: #717171;
  border: none;    
  padding: 10px 20px;
  text-align: center;
  border-radius: 25px;
  cursor: pointer;
  height: 50px; 
  width: 150px;
  font-size: 0.9em;
  font-weight: bold;
`

