import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import counter from './store/counter';

const Counter = observer(() => {
  return (
    <div className='counter'>
      {counter.total}
      <div className='btns'>
        <button className='btn' onClick={() => counter.increment()}>
          +
        </button>
        <button className='btn' onClick={() => counter.decrement()}>
          -
        </button>
        <button className='btn' onClick={() => counter.multiple()}>
          X
        </button>
        <button className='btn' onClick={() => counter.division()}>
          /
        </button>

        <button className='btn' onClick={() => counter.zero()}>
          0
        </button>
      </div>
    </div>
  );
});

export default Counter;
