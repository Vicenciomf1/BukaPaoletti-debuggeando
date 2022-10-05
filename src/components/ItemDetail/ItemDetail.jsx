import Button from '@mui/material/Button';
import React, { useContext, useState } from 'react'
import { Col, Image, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { cartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail({ data }) {
  const [finalizarCompra, setFinalizarCompra] = useState(true)

  const { addItem } = useContext(cartContext)

  function handleAddToCart(count) {
    addItem(data, count)
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
          <h4>{data.subtitle} | Alc. {data.alc}</h4>
          <p>{data.detail}</p>
          <p className="price">${data.price}</p>
          {finalizarCompra ? (<ItemCount initial={0} stock={data.stock} onAddToCart={handleAddToCart}></ItemCount>)
            : (<><Link className="link" to="/cartView"><Button className="button-count">Finalizar compra</Button></Link>
              <Link className="link" to="/"><Button className="button-count">Seguir comprando</Button></Link></>)}
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail