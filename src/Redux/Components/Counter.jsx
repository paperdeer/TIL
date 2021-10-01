import React from 'react';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff}){
    const onChange = e => {
        onSetDiff(parseInt(e.target.value,10));
    };
  return(
      <div>
          <h1>{number}</h1>
          <input type="text" value={diff}  onChange={onChange} name="" id="" />
          <button onClick={onIncrease}>+</button>
          <button onClick={onDecrease}>-</button>
      </div>
  );
}
export default Counter;