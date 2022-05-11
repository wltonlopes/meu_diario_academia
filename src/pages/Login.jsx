import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import{ Container, Row, Col } from 'react-bootstrap';


export default function Login() {

  return (
        <Container>
            <Row>
              <Col></Col>
              <Col>
                <Form>
                  <br/>
                  <br/>
                  <br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="email" placeholder="Digite seu nome de usuario" />
                  <Form.Text className="text-muted">
                  Coloque seu nome aqui para 
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Salvar senha" />
                </Form.Group>
                <Link to="/home">
                <Button variant="success">Success</Button>{' '}
                </Link>
              </Form>
              </Col>
              <Col></Col>
            </Row>
          </Container>
          
  )
}
