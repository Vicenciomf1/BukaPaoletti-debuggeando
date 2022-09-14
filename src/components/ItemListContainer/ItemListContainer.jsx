import React from 'react';
import './ItemListContainer.css';
import Card from '../Card/Card';

function ItemListContainer() {
  return (
        <div className="itemList">
        <Card title="Montando el mono" price="200" initial={1} stock={10}/>
        <Card title="islas flotantes" price="500" initial={1} stock={20}/>
        </div>
  )
}

export default ItemListContainer