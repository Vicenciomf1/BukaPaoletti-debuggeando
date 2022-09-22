import React, {useEffect, useState} from 'react'
import { BeerDetail } from '../../services/mockAPI'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
  let [data, setData] = useState({});

  useEffect(()=>{
    BeerDetail().then(response =>{
      setData(response);
    });
  }, [])

  return (
    <Container fluid>
      <Row>
        <ItemDetail data={data} />
      </Row>
    </Container>
  )
}

export default ItemDetailContainer