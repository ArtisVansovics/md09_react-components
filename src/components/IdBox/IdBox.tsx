import React, { FC } from 'react';
import './IdBox.scss';

type IdBoxProps = {
  id: string
}

const IdBox:FC<IdBoxProps> = ({ id }) => (
  <div className="id-box">
    {id}
  </div>
);

export default IdBox;
