import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route exact path={props.path}>
      {props.loggedIn ? props.children : <Redirect to='/signin' />}
    </Route>
  );
};

export default ProtectedRoute;
