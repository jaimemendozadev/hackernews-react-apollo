import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'
// 1
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

const apiEndpoint = 'https://api.graph.cool/simple/v1/cj7jq47r605zl019636k5d6zk';

// 2
const networkInterface = createNetworkInterface({
  uri: apiEndpoint
})

// 3
const client = new ApolloClient({
  networkInterface
})

// 4
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
)
registerServiceWorker()