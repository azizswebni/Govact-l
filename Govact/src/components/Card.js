import React from 'react'
import styled from "styled-components";

export default function Card({titre,svg}) {
    return (
        <Caard>
          <Cardsvg src={svg}/>
          <Cardtitle>{titre}</Cardtitle>
        </Caard>
    )
}
const Caard=styled.div`
height:180px;
width:180px;
  border-radius: 20px; 
  padding: 2px 16px;
  background-color : #EBF5FB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center
  
`
const Cardsvg=styled.img`
margin:10px;
width:100px;
height:100px;
`
const Cardtitle=styled.h2`
text-align : center;
font-size : 20px;
color:#000
`


