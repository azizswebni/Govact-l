import React from 'react'
import { Card , Button} from 'react-bootstrap'

export default function Cards( props ) {
    return (
        <Card style={{ width: '60%' }}>
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
     