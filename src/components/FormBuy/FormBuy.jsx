import React, { useState, useContext } from 'react'
import { Form, Col, Row, Container } from 'react-bootstrap';
import { cartContext } from '../../context/CartContext';
import { orderBuy } from "../../services/firestore";
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import FormInput from './FormInput';

function FormBuy() {

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const { cart, totalPriceItem } = useContext(cartContext);
  const navigate = useNavigate();

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
    Swal.fire({
      title: "Felicitaciones por tu compra",
      icon: "success",
      showConfirmButton: false,
      timer: 2500
    })
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
        <FormInput
          controlId="formGroupName"
          type="text"
          name="name"
          value={dataForm.name}
          onChange={InputForm}
        >
          Nombre y apellido
        </FormInput>
        <FormInput
          controlId="formGroupEmail"
          type="email"
          name="email"
          value={dataForm.email}
          onChange={InputForm}
        >
          Email
        </FormInput>
        <FormInput
          controlId="formGroupTelefono"
          type="text"
          name="phone"
          value={dataForm.phone}
          onChange={InputForm}
        >
          Telefono
        </FormInput>
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