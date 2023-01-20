import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import rootReducer from './reducers/'

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden
  };
  button {
    border-radius: .25rem;
  };
  input {
    border-radius: .25rem;
  };
  * {
    font-family: Avenir;
  }
`

const store = createStore(rootReducer)

ReactDom.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter basename="/project1">
        <App /> 
      </BrowserRouter>
    </Provider>
  </>, document.getElementById('root'))