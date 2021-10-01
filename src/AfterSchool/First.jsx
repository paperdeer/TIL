import React from 'react';
import styled from 'styled-components';
function First(props){
  const {myObj} = props;
  const Circle = styled.div`
    border : 1px dashed blue;
    padding : 24px;
    margin : 12px
  `;
  return(
      <Circle>
        <p><b>My Name</b> : {myObj.name}</p>
        <p><b>My Age</b> : {myObj.age}</p>
        <p><b>My Major</b> : {myObj.major}</p>
      </Circle>
  );
}
export default First;