import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShowUser from './ShowUser';
import AddUser from './AddUser';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './common/common.css'
import PhoneDirectory from './PhoneDirectory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <PhoneDirectory />
  // </React.StrictMode>
);

