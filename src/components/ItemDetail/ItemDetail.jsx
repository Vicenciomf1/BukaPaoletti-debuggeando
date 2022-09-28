import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { Col, Image, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail({ data }) {
  const [finalizarCompra, setFinalizarCompra] = useState(true)

  function handleAddToCart(count) {
    alert(`Agregaste ${count} al carrito`)
    setFinalizarCompra(false);
  }

  return (
    <Container fluid className="detailContainer">
      <Row>
        <Col md={4}>
          <Image src={data.img} alt={data.title} fluid={true}></Image>
        </Col>
        <Col md={7}>
          <h1>{data.title}</h1>
          <h4>{data.subtitle}</h4>
          <p>{data.detail}</p>
          <p className="price">${data.price}</p>
          {finalizarCompra === true ? (<ItemCount initial={0} stock={data.stock} onAddToCart={handleAddToCart}></ItemCount>) : (<NavLink className="link" to="/cart"><Button className="button-count">Finalizar compra</Button></NavLink>)}
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail