import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import DemoContainer from './containers/DemoContainer/DemoContainer';

ReactDOM.render(<DemoContainer />, document.getElementById('root'));
registerServiceWorker();
