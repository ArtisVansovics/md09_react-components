import React, { FC } from 'react';
import './VegetableCard.scss';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import IdBox from '../IdBox/IdBox';

type VegetableCardProps = {
  id: string
  title: string
  description: string
  backgroundColor: string
  available: boolean
}

const VegetableCard:FC<VegetableCardProps> = ({
  id, title, description, backgroundColor, available,
}) => (
  <div
    className="vegetable-card"
    id={id}
  >
    {available
      ? (
        <div
          className="vegetable-card__info"
          style={{ backgroundColor }}
        >
          <Heading title={title} />
          <Paragraph description={description} />
          <IdBox id={id} />
        </div>
      )
      : 'Not available'}
  </div>
);

export default VegetableCard;
