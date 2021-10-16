import React from 'react'
import { Card , Button} from 'react-bootstrap'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import styled from "styled-components";
export default function Cards( props ) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title }</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Button variant="primary">اقرا المزيد </Button>
        </Card.Body>
      </Card>
       
       
        );
    }
     