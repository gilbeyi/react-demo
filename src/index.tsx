import React from 'react'
import ReactDOM from 'react-dom';
import 'assets/style/theme.css';
import 'assets/style/style.scss';
import DefaultLayout from 'layout/default';
import IndexPage from 'pages/index'
import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DefaultLayout>
      <IndexPage />
    </DefaultLayout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
