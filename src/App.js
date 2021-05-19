import React, {
  Fragment
} from 'react';

import Routes from './Routes';
import GlobalStyle from './assets/Global/styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes/>
  </Fragment>
  );
}

export default App;
