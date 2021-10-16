import React from "react";
import Navbar from "../components/Naavbar";

import styled from "styled-components";
import bg from "../assets/bg.png";
import chatbot from "../assets/chatbot.png";

import Footer from '../components/Footer';

import Cards from "../components/CardsActualite";

import garden from '../assets/13.png'
import dog from '../assets/11.png'
import maison from '../assets/14.png'
import mai from '../assets/15.png'
import ImageCard from "../components/ImageCard";




export default function Suggest() {
  return (
    <>

<Navbar />
      
     <Header>
          <HeaderContent>
            <Titre>المقترحات  </Titre>
            <Description>
             مقترحات  للبلدية 
            </Description>
          </HeaderContent>
          </Header>
   
   <Content>
          <ContentContainer>
       
              <Cards title='مقترح العناية بالحدائق ' text='45 شخص متفق مع هذا الاقتراح ' img={garden} />
             
             
         
          <ImageCard title='البديل لقتل الكلاب السائبة' text='30شخص مساند
اقرأ  المزيد' time="11min " img={dog } />
     <CardContainer>
 </CardContainer>
          </ContentContainer>


          <ContentContainer>
       

         
          <ImageCard title='مواطنون يقترحون دهان موحد ' text='30شخص مساند
            اقرأ  المزيد' time="11min " img={maison } />

     <CardContainer>
 </CardContainer>
 <Cards title='مقترح ترميم المنازل الأيلة للسقوط ' text='45 شخص متفق مع هذا الاقتراح ' img={mai} />
             
          </ContentContainer>

          </Content>
  

     <Footer />
    </>
     );
    }
    


const Titre = styled.p`
     width:100%;
      color: white;
      font-size:5vw;
      text-align:center;
    `
 const Description = styled.p`
      color: white;
      font-size:2vw;
      display: flex;
      text-align: center;
      widht:100%
    `


const Img = styled.img`
  height: 500px;
  width: 50%;
`;
const CardContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:10px;
`
const ImageContainer = styled.div`
display:flex;
height: '18rem'
flex-direction:column;
justify-content:center;
align-items:center;
margin:10px;
` 
const HeaderContent = styled.div`
width:100%
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;

`
const Header = styled.div`
margin-bottom:30px;
height:600px;
flex:1;
padding:10%;
background:url(${bg}) no-repeat;
background-size: cover;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
`;
const ContentContainer = styled.div`
padding:1%;
display:flex;
flex-direction:row;
justify-content: center;
align-items: center ;
`
const Content = styled.div`
margin: 10%;

`