import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import registerServiceWorker from './registerServiceWorker';
import App from './pages/Layout/index';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
