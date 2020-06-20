
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from '../components/LoginPage'
import Header from '../components/Header';
import ExpenseDashboard from '../components/ExpenseDashboardPage'
import ExpenseDashboradPage from '../components/ExpenseDashboardPage';
export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <ExpenseDashboradPage />
      ) : (
        <Component {...props} />
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
