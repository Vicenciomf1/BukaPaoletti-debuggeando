import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import "./CartView.css"


function CartView() {
  const { cart, deleteItem, cartClean, totalPriceItem } = useContext(cartContext);

  function itemDelete(id) {
    Swal.fire({
      title: "Eliminar producto",
      text: "¿Estas seguro que queres eliminar esta birra?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button-count',
        cancelButton: 'button-count'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(id);
        Swal.fire({
          title: "Birra eliminada",
          icon: "success",
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  };

  function cleanCart() {
    Swal.fire({
      title: "Vaciar carro",
      text: "¿Estas seguro que queres vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Vaciar",
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button-count',
        cancelButton: 'button-count'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        cartClean();
        Swal.fire({
          title: "Carrito vacio",
          icon: "success",
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  };

  if (cart.length === 0) {
    return <>
      <h2>Tu carrito esta vacio</h2>
      <Link className="link" to="/"><Button className="button-count">Quiero ver los productos</Button></Link>
    </>
  }
  return (
    <>
      {cart.map((item) => {
        return <Card className="cardView" sx={{ display: "flex" }} key={item.id}>
          <CardMedia component="img"
            sx={{ width: 150 }}
            image={item.img}
            alt={item.title} />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">{item.title}</Typography>
              <Typography component="div" variant="subtitle1" color="text.secondary">{item.subtitle} | {item.alc}</Typography>
              <Typography component="div" vartiant="subtitle2">Precio: ${item.price}</Typography>
              <Typography component="div" vartiant="subtitle2">Cantidad seleccionada: {item.count}</Typography>
              <Typography component="div" vartiant="subtitle2">Precio total: ${item.price * item.count}</Typography>
            </CardContent>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: 'end' }}>
              <IconButton onClick={() => { itemDelete(item.id) }}>
                <DeleteOutlineIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Box>
        </Card>
      })}
      <div className="divButton">
        <Link className="link" to="/"><Button className="button-count">Agregar mas productos</Button></Link>
        <Button className="button-count" onClick={cleanCart}>Vaciar carrito</Button>
      </div>
      <Container fluid>
        <Row className="justify-content-md-end">
          <Col xs="6">
            <h1>Totales</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-end">
          <Col xs="6">
            <h5>Total a pagar: ${totalPriceItem()}</h5>
          </Col>
        </Row>
        <Row className="justify-content-md-end">
          <Col xs="6">
            <Link className="link" to="/FormBuy"><Button className="button-count">Continuar con la compra</Button></Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartView