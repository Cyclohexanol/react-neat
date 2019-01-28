import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const token = localStorage.getItem('token');

const headers = token ? { "Authorization": token } : {}

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  headers: headers,
  cache: new InMemoryCache()
});

const setToken = token => new Promise((resolve, reject) => {
  if (token) {
    localStorage.setItem('token', token);
    client.headers = {
      ...client.headers,
      "Authorization": token || ""
    };
    resolve();
  } else {
    localStorage.removeItem('token');
    client.headers = {
      ...client.headers,
      "Authorization": undefined
    }
    resolve();
  }
})

ReactDOM.render(<ApolloProvider client={client}><App setToken={setToken} /></ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
