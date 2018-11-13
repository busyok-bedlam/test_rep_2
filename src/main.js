import ReactDOM from 'react-dom';
import React from 'react';

import Root from './components/root';
import store from './store';
const root = document.getElementById('root');
ReactDOM.render(<Root store={store} />,root)
