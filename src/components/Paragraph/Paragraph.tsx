import React, { FC } from 'react';
import './Paragraph.scss';

type ParagraphProps = {
  description: string
}

const Paragraph:FC<ParagraphProps> = ({ description }) => (
  <p className="paragraph">
    {description}
  </p>
);

export default Paragraph;
