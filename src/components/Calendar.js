import React, { useState, useEffect } from 'react';
import { Container, Card, Col, Row, Button, CardGroup } from 'react-bootstrap';

const Calendar = () => {
  let [año, setAño] = useState(2022);
  let [mes, setMes] = useState(3);
  let [dia_a, setDia] = useState([]);
  let mes_arr = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  let diasMes = new Date(año, mes, 0).getDate();
  let dias_arr = [];
  let diasSemana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  useEffect(() => {
    for (let dia = 1; dia <= diasMes; dia++) {
      dias_arr.push(dia);
    }
    setDia(dias_arr);
  }, [dias_arr, diasMes]);

  const diasSemanaR = (dia) => {
    // Ojo, hay que restarle 1 para obtener el mes correcto
    let indice = new Date(año, mes - 1, dia).getDay();
    return diasSemana[indice];
  };

  const aumento_mes = () => {
    if (mes === 12) {
      setAño(año + 1);
      setMes(1);
    } else {
      setMes(mes + 1);
    }
  };
  const disminuir_mes = () => {
    if (mes === 1) {
      setAño(año - 1);
      setMes(12);
    } else {
      setMes(mes - 1);
    }
  };
  return (
    <>
      <Container>
        <h1 style={{ justifyItems: 'center', textAlign: 'center' }}>
          Schedule Timeslots
        </h1>

        <Row className="text-center">
          <Col>
            <Button className="btn-primary">Agregar</Button>
          </Col>
        </Row>
        <Row
          className="my-3"
          style={{ justifyItems: 'center', alignItems: 'center' }}
        >
          <Col>
            <Button className="btn-info" onClick={disminuir_mes}>
              Atras
            </Button>
          </Col>
          <Col>
            <h1>
              {mes_arr[mes - 1]} {año}
            </h1>
          </Col>
          <Col>
            <Button className="btn-success" onClick={aumento_mes}>
              Siguiente
            </Button>
          </Col>
        </Row>

        <Row className="my-4">
          <CardGroup>
            {dia_a.map((dia, index) => (
              <Col>
                <Card style={{ width: '18rem', margin: 0 }}>
                  <Card.Body>
                    <Card.Title>
                      Dia {dia}-{diasSemanaR(dia)}
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </CardGroup>
        </Row>
      </Container>
    </>
  );
};

export default Calendar;
