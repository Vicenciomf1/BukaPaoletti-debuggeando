import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Col } from 'react-bootstrap';
import './ItemCount.css';

function ItemCount({ initial, stock, onAddToCart }) {
    const [count, setCount] = useState(initial);

    function handleAdd() {
        if (stock > count) {
            setCount(count + 1);
        }
    }

    function handleSubstract() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <Stack spacing={1} direction="row">
                <Button className="button-count" variant="contained" onClick={handleSubstract} >-</Button>
                <Button className="button-count" variant="contained" onClick={handleAdd}>+</Button>
                <Button disabled={true} className="button-count">{count}</Button>
            </Stack>
            <Col md={12}>
                <Button className="button-count" onClick={() => { onAddToCart(count) }}>Agregar al carrito</Button>
            </Col>
        </>
    )
}

export default ItemCount