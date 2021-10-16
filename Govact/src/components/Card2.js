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
height:300px;
width:300px;
  border-radius: 70px; 
  padding: 2px 16px;
  background-color : #EBF5FB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center
  text-decoration:none;

`
const Cardsvg=styled.img`
margin:10px;
width:150px;
height:150px;
`
const Cardtitle=styled.h2`
text-align : center;
font-size : 30px;
color:#F9A826;
`


