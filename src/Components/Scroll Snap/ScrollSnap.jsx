import React from 'react';
import styled from 'styled-components';

function ScrollSnap(){
    const DIV = styled.div`
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.color || 'black'};
        scroll-snap-align: start;
        font-size: 64px;
    `
    const Container = styled.div`
        height: 100vh;
        overflow-y: auto;
        scroll-snap-type: y mandatory;
    `
  return(
      <Container>
          <DIV color="red">1</DIV>
          <DIV color="orange">2</DIV>
          <DIV color="yellow">3</DIV>
          <DIV color="green">4</DIV>
          <DIV color="blue">5</DIV>
      </Container>
  );
}
export default ScrollSnap;