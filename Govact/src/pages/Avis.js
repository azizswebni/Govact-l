
import React from "react";
import Navbar from "../components/Naavbar";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import styled from "styled-components";
import bg from "../assets/bg.png";
import chatbot from "../assets/chatbot.png";
import Footer from '../components/Footer';
import Form from 'react-bootstrap/Form'

export default function Suggest() {
  return (
    <>

<Navbar />
      
     <Header>
          <HeaderContent>
            <Titre>إستطلاعات الرأي </Titre>
          
          </HeaderContent>
          </Header>
<ContentContainer>
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" style ={{ display:"flex",
flexDisplay:"center",
justifyContent :"center"}}>
  <Tab eventKey="home" title="نتائج إستطلاعات">
  <Description>هل انت راض عن مستوى خدمة اصدار التراخيص؟
 </Description>
  <Description>هل تساند حملة مع قنص الكلاب السائبة ؟ </Description>
  <Description>هل انت راض عن مستوى خدمة البلدية  ؟
 </Description>
  </Tab>
  <Tab eventKey="profile" title="إستطلاعات">
 <div>
   <Description>هل انت راض عن مستوى خدمة اصدار التراخيص؟
 </Description>
     <Form style ={{ display:"flex",
flexDisplay:"center",
justifyContent :"center"}}>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="نعم "
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="محايد"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        name="group1"
        label="لا"
        type={type}
        id={`inline-${type}-3`}
      />
    </div>
  ))}
</Form> </div>
<div>
   <Description>هل تساند حملة مع قنص الكلاب السائبة ؟
 </Description>
     <Form style ={{ display:"flex",
flexDisplay:"center",
justifyContent :"center"}}>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="نعم "
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="محايد"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        name="group1"
        label="لا"
        type={type}
        id={`inline-${type}-3`}
      />
    </div>
  ))}
</Form> </div>
<div>
   <Description>هل انت راض عن مستوى خدمة البلدية  ؟
 </Description>
     <Form style ={{ display:"flex",
flexDisplay:"center",
justifyContent :"center"}}>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="نعم "
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="محايد"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        name="group1"
        label="لا"
        type={type}
        id={`inline-${type}-3`}
      />
    </div>
  ))}
</Form> </div>
  </Tab>
  
</Tabs>
</ContentContainer>

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
      color: black;
      font-size:2vw;
      display: flex;
      text-align: left;
      widht:100%
      display:flex;

align-items:center;
justify-content:center;
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
padding:5%;
margin:10%
display:flex;
align-items:center;
justify-content:center;

`
