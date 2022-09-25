import React, { useEffect, useState } from 'react';
import getBeer, { BeerCategory } from '../../services/mockAPI';
import ItemList from '../ItemList/ItemList';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import ButtonCategory from '../ButtonCategory/ButtonCategory';

function ItemListContainer() {
  let [data, setData] = useState([]);

  const { cat } = useParams();


  useEffect(() => {
    if (cat === undefined){
      getBeer().then(response => setData(response));
    }else{
      BeerCategory(cat).then(response => setData(response))
    }
  }, [cat])

  return (
    <Container fluid>
    <Row xl="auto" className="justify-content-center">
    <ButtonCategory />
    </Row>
      <Row xl="auto" className="justify-content-center">
        <ItemList data={data} />
      </Row>
    </Container>
  )
}


export default ItemListContainer