import React from 'react';
import './App.scss';
import Task from './components/Task/Task';
import VegetableListFirst from './components/VegetableListFirst/VegetableListFirst';
import VegetableListSecond from './components/VegetableListSecond/VegetableListSecond';
import VegetableCard from './components/VegetableCard/VegetableCard';

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

const vegetables = [
  {
    id: '1',
    title: 'Cucumber',
    description: 'It is green',
    backgroundColor: 'green',
    available: true,
  },
  {
    id: '2',
    title: 'Carrot',
    description: 'It is orange',
    backgroundColor: 'orange',
    available: false,
  },
  {
    id: '3',
    title: 'Sweet pepper',
    description: 'It is in many colors',
    backgroundColor: 'yellow',
    available: true,
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
          <div className="box">
            <VegetableListFirst>
              {vegetables.map(({
                id, title, description, backgroundColor, available,
              }) => (
                <VegetableCard
                  id={id}
                  title={title}
                  description={description}
                  backgroundColor={backgroundColor}
                  available={available}
                />
              ))}
            </VegetableListFirst>
          </div>
        </div>
      </div>
      {/* VegetableListSecond */}
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <VegetableListSecond>
              {vegetables
                .filter(({ available }) => available)
                .map(({
                  id, title, description, backgroundColor, available,
                }) => (
                  <VegetableCard
                    id={id}
                    title={title}
                    description={description}
                    backgroundColor={backgroundColor}
                    available={available}
                  />
                ))}
            </VegetableListSecond>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
