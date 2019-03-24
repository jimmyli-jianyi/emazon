import React, { Component } from 'react';
import ItemPage from './itemPage';
import NavBar from './navBar';

const itemList = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23
];

const MainPage = props => {
  var gatherInput = evt => {};

  return (
    <div>
      <NavBar searchResult={() => gatherInput} />
      <ItemPage itemList={itemList} />
    </div>
  );
};

export default MainPage;
