import React from 'react';
import styled from 'styled-components';
import './items.css';
import itemCard from './itemCard';

const item = props => {
  const Pic = styled.img`
    width: 500px;
    height: 500px;
    margin: 15px;
  `;

  return (
    <div className="Gallery">
      <itemCard itemImg={require('./Pics/2.jpg')} />
    </div>
  );
};

export default item;
