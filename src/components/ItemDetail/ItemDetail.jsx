import React from 'react'
import { Col, Image, Container, Row } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail({ data }) {
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
          <ItemCount initial={0} stock={data.stock}></ItemCount>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail