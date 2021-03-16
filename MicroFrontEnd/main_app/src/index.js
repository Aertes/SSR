import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';

const getActiveRule = hash => location => location.hash.startsWith(hash)


registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:2000',
    container: '#react',
    activeRule: '/react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:3000',
    container: '#vue',
    activeRule: '/vue'
  },
  {
    name: 'angularApp',
    entry: '//localhost:4000',
    container: '#angular',
    activeRule: '/angular'
  }
])

start();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
