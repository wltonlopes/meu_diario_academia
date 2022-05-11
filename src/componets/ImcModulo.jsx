import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


export default function ImcModulo() {

  const [ peso, setPeso ]= useState(0);
  const [ altura, setAltura ] = useState(0);

  return (
    <div>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Calcule aqui o seu indice de IMC:</Card.Title>
          <Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Peso</Form.Label>
                <Form.Control type="number" placeholder="Coloque aqui o seu peso atual ex: 23.44" onChange={ 
                  (e) => setPeso( e.target.value ) } />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Altura</Form.Label>
                <Form.Control type="number" placeholder="Coloque aqui a sua altura atual ex: 1.77" onChange={
                  (e) => setAltura( e.target.value )
                }/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Disabled select menu</Form.Label>
                <Form.Select>
                  <option>Homem</option>
                  <option>Mulher</option>
                </Form.Select>
              </Form.Group>
              <button type="button" onClick={ console.log( peso, altura )}> oi </button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>


    </div>
  )
}
