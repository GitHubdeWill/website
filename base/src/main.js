import React from 'react';
import ReactDOM from 'react-dom';

// Container that manages all pages
import RootContainer from './containers/root_container'

// Import stylesheets that will be used
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/main.css';

ReactDOM.render(<RootContainer />, document.getElementById('app'));