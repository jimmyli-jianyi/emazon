import React from 'react';
import './items.css';
import ItemCard from './itemCard';
import uuid from 'uuid/v4';

const ItemPage = props => {
  const items = props.itemList.map(e => (
    <div key={uuid()}>
      <ItemCard itemImg={require(`./Pics/${e}.jpg`)} />
    </div>
  ));
  return <div className="Gallery">{items}</div>;
};

export default ItemPage;
