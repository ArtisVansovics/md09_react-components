import React from 'react';
import './App.scss';
import Task from './components/Task/Task';

const tasks = [
  {
    id: '1',
    text: 'Do laundry',
    done: true,
  },
  {
    id: '2',
    text: 'Clean house',
    done: false,
  },
  {
    id: '3',
    text: 'Make pica and deliver to Ketijas house',
    done: true,
  },
];

const App = () => (
  <div className="App">
    <div className="container">
      {/* Tasks */}
      <div className="row start-xs">
        <div className="col-xs-12">
          <div className="box">
            {tasks.map(({
              id, text, done,
            }) => (
              <Task
                id={id}
                text={text}
                done={done}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Tasks filtered */}
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            {tasks
              .filter(({ done }) => !done)
              .map(({
                id, text, done,
              }) => (
                <Task
                  id={id}
                  text={text}
                  done={done}
                />
              ))}
          </div>
        </div>
      </div>
      {/* VegetableListFirst */}
      <div className="row">
        <div className="col-xs-12">
          <div className="box" />
        </div>
      </div>
      {/* VegetableListSecond */}
      <div className="row">
        <div className="col-xs-12">
          <div className="box" />
        </div>
      </div>
    </div>
  </div>
);

export default App;
