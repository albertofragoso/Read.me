import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyProvider from './context'
import 'toastr/build/toastr.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './index.css';

ReactDOM.render(
<MyProvider>
  <App />
</MyProvider>
, document.getElementById('root'));

serviceWorker.register();
