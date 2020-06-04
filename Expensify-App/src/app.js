import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
import 'normalize.css/normalize.css/'
import "./styles/styles.scss"
import AppRouter from './routers/AppRouter';//getting router file
ReactDOM.render(<AppRouter />, document.getElementById('app'));
