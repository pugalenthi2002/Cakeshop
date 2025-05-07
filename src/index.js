import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

// const data1 = "  Hey im here"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider value={Store}> */}

        {/* <CreateContext1.Provider value={data}> */}
        <App />
        {/* </CreateContext1.Provider> */}
        {/* <CreateTaskCon1.Provider value={data1}>
      <App/>
      </CreateTaskCon1.Provider> */}
      {/* </Provider> */}

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
