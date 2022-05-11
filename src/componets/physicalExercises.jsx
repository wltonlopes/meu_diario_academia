import React from 'react';
import Table from 'react-bootstrap/Table';
import{ Container } from 'react-bootstrap';
import ExercicesTable from './exercicesTable'

export default function PhysicalExercises() {

  const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta","Sabado", "Domingo"];

  return (
      <Container>
        <h1>Minha rotina de exercicios:</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              {Array.from({ length: 7 }).map((_, index) => (
                <th key={index}>{days[index]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>
                  <ExercicesTable/>
                </td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>
                  <ExercicesTable/>
                </td>
              ))}
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>
                  <ExercicesTable/>
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Container>
  )
}
