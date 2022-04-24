import React, { FC } from 'react';
import './VegetableListSecond.scss';
import VegetableListFirst from '../VegetableListFirst/VegetableListFirst';

const VegetableListSecond:FC = ({ children }) => (
  <VegetableListFirst>
    {children}
  </VegetableListFirst>
);

export default VegetableListSecond;
