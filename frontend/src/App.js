import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

function App(props) {
  const history = useHistory();
  const [token, setToken] = useState("");
  useEffect(() => {
    const accessToken = localStorage.accessToken;
    if (!accessToken) return history.push("/login");
    setToken(accessToken);
  }, [history]);
  console.log(token);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {token && <Home accessToken={token} />}
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
