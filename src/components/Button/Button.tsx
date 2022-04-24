import React, { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  clickHandler: () => void
}

const Button:FC<ButtonProps> = ({ clickHandler }) => (
  <button
    className="button"
    onClick={clickHandler}
  >
    Read More
  </button>
);

export default Button;
