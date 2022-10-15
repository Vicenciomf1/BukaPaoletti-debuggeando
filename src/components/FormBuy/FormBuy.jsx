import React, { useState, useContext } from 'react'
import { Form, Col, Row, Container } from 'react-bootstrap';
import { cartContext } from '../../context/CartContext';
import { orderBuy } from "../../services/firestore";
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function FormBuy() {

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const { cart, totalPriceItem } = useContext(cartContext);
  const navigate = useNavigate()

  function InputForm(event) {
    let input = event.target.name;
    let value = event.target.value;
    const newForm = { ...dataForm };
    newForm[input] = value;
    setDataForm(newForm);
  }

  function CheckoutForm(event) {
    event.preventDefault();
    const orderData = {
      buyer: dataForm,
      items: cart,
      date: new Date(),
      total: totalPriceItem(),
    };
    orderBuy(orderData).then(navigate(`/`));
  }

  if (cart.length === 0) {
    return <>
      <h2>Ups... No sabemos como llegaste hasta aqui</h2>
      <Link className="link" to="/"><Button className="button-count">Volver a la tienda</Button></Link>
    </>
  }

  return (
    <Container fluid>
      <Form onSubmit={CheckoutForm}>
      <Row className="justify-content-md-center m-3">
          <Col md={3}>
            <h2>Formulario de compra</h2>
          </Col>
        </Row>
        <Form.Group className="m-3" controlId="formGroupName">
          <Row className="justify-content-md-center">
            <Form.Label column md={2}>
              Nombre y apellido
            </Form.Label>
            <Col md={4}>
              <Form.Control
                type="text"
                name="name"
                value={dataForm.name}
                onChange={InputForm}
                required
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="m-3" controlId="formGroupEmail">
          <Row className="justify-content-md-center">
            <Form.Label column md={2}>
              Email
            </Form.Label>
            <Col md={4}>
              <Form.Control
                type="email"
                name="email"
                value={dataForm.email}
                onChange={InputForm}
                required
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="m-3" controlId="formGroupName">
          <Row className="justify-content-md-center">
            <Form.Label column md={2}>
              Telefono
            </Form.Label>
            <Col md={4}>
              <Form.Control
                type="text"
                name="phone"
                value={dataForm.phone}
                onChange={InputForm}
                required
              />
            </Col>
          </Row>
        </Form.Group>
        <Row className="justify-content-md-center">
          <Col md={2}>
            <Button type="submit" className="button-count">Finalizar mi compra</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default FormBuy