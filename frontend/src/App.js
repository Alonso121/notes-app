import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { verifyToken } from "./redux/users";

function App(props) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log(isLoggedIn);
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
  console.log(accessToken);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {accessToken && isLoggedIn && <Home accessToken={accessToken} />}
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
