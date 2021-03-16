import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './public-path';

function render(props) {
  const { container } = props;
  ReactDOM.render(<App/>, container? container.querySelector('#root') : document.querySelector('#root'));
}

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap(params) {
  console.log(params, '[react17] react app boostrap');
}

export async function mount(props) {
  console.log('[react17react17] props from main framework', props);
  render(props);
}

export async function ummount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container? container.querySelector('#root') : document.querySelector('#root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
