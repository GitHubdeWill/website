import React from 'react';
import { createRoot } from 'react-dom/client';

// Container that manages all pages
import RootContainer from './containers/root_container'

// Import stylesheets that will be used
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/main.css';

const root = createRoot(document.getElementById('app'));
root.render(<RootContainer />);
