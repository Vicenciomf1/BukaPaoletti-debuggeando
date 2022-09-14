import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import CartWidget from '../Navbar/CartWidget';

function ItemCount({initial, stock}) {
    const [count, setCount] = useState(initial);

    function handleAdd (){
        if (stock > count){
            setCount(count + 1);
        }
    }

    function handleSubstract(){
        if (count > 1){
            setCount(count - 1);
        }
    }
    
    return (
        <Stack spacing={1} direction="row">
        <Button variant="contained" onClick={handleSubstract} >-</Button>
        <Button variant="contained" onClick={handleAdd}>+</Button>
        <CartWidget content={count}/>
        </Stack>
    )
}

export default ItemCount