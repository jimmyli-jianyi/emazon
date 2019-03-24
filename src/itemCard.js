import React from 'react';
import styled from 'styled-components';

const itemCard = props => {
  const Pic = styled.img`
    width: 500px;
    height: 500px;
    margin: 15px;
  `;

  return (
    <div>
      <Pic src={require('./Pics/2.jpg')} />
      <button>Add to Wishlist</button>
      <button>Add to Cart</button>
    </div>
  );
};

export default itemCard;
