import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';
import registerServiceWorker from './registerServiceWorker';


window.baseURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
