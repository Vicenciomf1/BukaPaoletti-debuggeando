import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CartWidget from '../Navbar/CartWidget';
import './ItemCount.css';

function ItemCount({initial, stock}) {
    const [count, setCount] = useState(initial);

    function handleAdd (){
        if (stock > count){
            setCount(count + 1);
        }
    }

    function handleSubstract(){
        if (count > 0){
            setCount(count - 1);
        }
    }
    
    return (
        <Stack spacing={1} direction="row">
        <Button className="button-count" variant="contained" onClick={handleSubstract} >-</Button>
        <Button className="button-count" variant="contained" onClick={handleAdd}>+</Button>
        <CartWidget content={count}/>
        </Stack>
    )
}

export default ItemCount