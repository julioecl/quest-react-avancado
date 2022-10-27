import React, { useState } from "react";
import styled from "styled-components";
import { ButtonDefault } from "../button";

const Searchbar = (props) => {  

    const [search, setSearch ] = useState([0])
    const {onSearch} = props    
    const onChangeHandler = (e) => {        
        setSearch(e.target.value)        
        if(e.target.value.length === 0 ) {
            onSearch(undefined)
        }
    }   

    const onButtonClickHandler = () => {
        onSearch(search.toLowerCase())               
    } 
    
    const onKeyDownHandler = (e) => {
        const key = e.which
        if (key === 13) {
            onButtonClickHandler()
        }
    }    
    
    return (
        <Div>       
            <Input placeholder="Buscar pokemón" onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
            <ButtonDefault onClick={onButtonClickHandler}> Buscar </ButtonDefault>            
        </Div>
        
    )
}

export default Searchbar

const Div = styled.div`
    display: flex;    
    gap: 15px;
    justify-content: center;
    padding: 10px; 
    align-itens: center;    
`

const Input = styled.input`
    padding: 10px 10px;    
    background-color: #E6F0F5;
    border-radius: 4px     
`