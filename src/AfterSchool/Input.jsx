import React, { useState } from 'react';

function Input(){
    const [input,setInput] = useState('');
    const onChangeInput = (e) => {
        setInput(e.target.value);
    }
    const onClickReset = () => {
        setInput('')
    }
  return(
      <div>
          <input type="text" value={input} onChange={onChangeInput} />
          <h1>{input}</h1>
          <button onClick={onClickReset}>reset</button>
      </div>
  );
}
export default Input;