import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.provider value={{ name: 'Chris' }}>
      <SignIn/>
    </AuthContext.provider>

    <GlobalStyle />
  </>
)

export default App;
