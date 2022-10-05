import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


function CartView() {
  const { cart, deleteItem, cartClean } = useContext(cartContext);

  function itemDelete(id) {
    deleteItem(id);
  };

  function cleanCart() {
    cartClean()
  }

  if (cart.length === 0) {
    return <>
      <h2>Tu carrito esta vacio</h2>
      <Link className="link" to="/"><Button className="button-count">Quiero ver los productos</Button></Link>
    </>
  }
  return (
    <>
      <Button className="button-count" onClick={cleanCart}>Vaciar carrito</Button>
      {cart.map((item) => {
        return <Card sx={{ display: "flex" }} key={item.id}>
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
              <IconButton>
                <DeleteOutlineIcon onClick={() => { itemDelete(item.id) }} fontSize="medium" />
              </IconButton>
            </Box>
          </Box>
        </Card>
      })}
    </>
  )
}

export default CartView