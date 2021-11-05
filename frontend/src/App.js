import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { verifyToken } from "./redux/users";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const history = useHistory();
  const dispatch = useDispatch();
  const accessToken = localStorage.accessToken;

  useEffect(() => {
    const checkLogin = async () => {
      if (accessToken) {
        const verified = await dispatch(verifyToken(accessToken)).unwrap();
        if (!verified.loggedIn) {
          localStorage.removeItem(accessToken);
          history.push("/login");
          return;
        }
      } else {
        history.push("/login");
      }
    };
    checkLogin();
  }, [history, dispatch, accessToken]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          {isLoggedIn && <Home />}
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
