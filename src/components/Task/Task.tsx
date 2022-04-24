import React, { FC } from 'react';
import './Task.scss';

type TaskProps= {
  id: string
  text: string
  done: boolean
}

const Task:FC<TaskProps> = ({ id, text, done }) => (
  <div
    className="task"
    id={id}
    style={{ textDecoration: `${done ? 'line-through' : ''}` }}
  >
    {text}
  </div>
);

export default Task;
