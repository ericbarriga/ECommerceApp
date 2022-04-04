import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
  Blog,
  Checkout,
  LoginSide,
  SignUp
} from './pages';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route
                path='/login'
                element={<LoginSide/>}
              />
              <Route
                path='/signup'
                element={<SignUp/>}
              />
              <Route
                path='/home'
                element={<Blog/>}
              />
              <Route
                path='/checkout'
                element={<Checkout/>}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
