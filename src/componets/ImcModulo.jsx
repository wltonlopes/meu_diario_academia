import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import{ Container, Row, Col } from 'react-bootstrap';

export default function ImcModulo() {

  const [ peso, setPeso ]= useState(0);
  const [ altura, setAltura ] = useState(0);
  const [ imc, setImc ] = useState(0);
  const [ imcTabel, setImcTabel ] = useState('')

  const calculeImc = ( p , a ) => {
    const result = p / ( a*a ) 
      setImc( result );
      if (imc < 18.5){ setImcTabel('Seu peso é ') }
      if (imc >= 18.5 || imc <=  24.9){
        setImcTabel('Seu peso é ');
      } if ( imc >= 25 || imc <= 29.9 ){
        setImcTabel('Você está em sobrepeso');
      } if ( imc >= 30 || imc <= 34.9 ){
        setImcTabel('Você está em obesidade 1');
      } if ( imc >= 35 || imc <= 39.9 ){
        setImcTabel('Você está em obesidade 2');
      } if ( imc >= 40 ){
        setImcTabel('Você está em obesidade 3');
      }

    };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="text-center">
          <Card.Header>IMC</Card.Header>
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
                <button type="button" onClick={ () => calculeImc( peso, altura )}> Calcular meu IMC </button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
      <Card className="text-center">
        <Card.Header>Meu IMC</Card.Header>
          <Card.Body>
            <Card.Title> Valor calculado foi de :</Card.Title>
            <Card.Text>
              Imc:{ imc.toFixed(2) }
            </Card.Text>
            <Card.Text>
              { imcTabel }
            </Card.Text>
          </Card.Body>
        </Card>
      
      </Col>
    </Row>
  </Container>
  )
}
