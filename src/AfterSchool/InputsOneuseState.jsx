import React, { useState } from 'react';

function InputsOneuseState(){
    const [inputs,setInputs] = useState({
        first : '',
        second : ''
    })
    const {first,second} = inputs;
    const onChangeInputs = e => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }
    const onClickResetBtn = () => {
        setInputs({
            first : '',
            second : ''
        })
    }
  return(
      <div>
          <input type="text" onChange={onChangeInputs} name="first" value={first} />
          <input type="text" onChange={onChangeInputs} name="second" value={second} />
          <h1>첫 번째 인풋 : {first}</h1>
          <h1>두 번째 인풋 : {second}</h1>
          <button onClick={onClickResetBtn}>reset</button>
      </div>
  );
}
export default InputsOneuseState;