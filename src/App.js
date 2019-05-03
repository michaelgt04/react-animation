import React from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import Toggle from './Toggle'

const App = props => {
  return (
    <AppWrapper>
      <Toggle />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: #F7F6EE;
`

export default App;
