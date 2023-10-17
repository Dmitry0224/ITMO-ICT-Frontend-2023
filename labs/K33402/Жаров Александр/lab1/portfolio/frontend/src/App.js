import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Header from "./components/Header";
import React, { useEffect } from "react";
import { PrivateRoute } from "./components/PrivatRoute";

const USER_ID = "65293a3055b0df2e28a63fde";

function App() {
  let location = useLocation();
  const [isHeaderDisplayNone, setHeaderDisplayNone] = React.useState(false);

  useEffect(() => {
    fetch(`http://localhost:3030/api/get-user/${USER_ID}`)
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    setHeaderDisplayNone(false);
    const regex = /\/registration/;
    if (regex.test(location.pathname)) {
      setHeaderDisplayNone(true);
    }
  }, [location]);

  return (
    <div className="App">
      {!isHeaderDisplayNone && <Header />}
      <Routes>
        <Route path="/">
          <Route path="/registration/:isLogin" element={<Registration />} />

          <Route element={<PrivateRoute />}>
            <Route index element={<Profile />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
