import { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebaseConfig';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLogged(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <h1>Wait please...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            isAuthenticated={isLogged}
            component={JournalScreen}
          />
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLogged}
          />
          {/* <Route path="/auth" component={AuthRouter} /> */}
          {/* <Route exact path="/" component={JournalScreen} /> */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
