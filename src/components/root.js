import React from 'react';
import { Provider } from 'react-redux';
import {  BrowserRouter,Route,Redirect,Switch,Link } from 'react-router-dom';


const Root = ({ store }) => (
  <Provider store={store}>
    <Routes/>
  </Provider>
)

export default Root;
