import React, { useEffect, useState } from 'react'
import { BeerDetail } from '../../services/mockAPI'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  let [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    BeerDetail(id).then(response => setData(response));
  }, [id])

  return (
        <ItemDetail data={data} />
  )
}

export default ItemDetailContainer