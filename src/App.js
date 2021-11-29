import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import UserProfilePage from "./Pages/UserProfilePage";
import AuthContext from "./Components/store/auth-context";
// import { useSelector } from "react-redux";
// import submitProfile from "./Components/form/submitProfile";
function App() {
  const authCtx = useContext(AuthContext);
  // const profile = useSelector((state) => state);

  // useEffect(() => {
  //   fetch(
  //     "https://react-project-44b7c-default-rtdb.firebaseio.com/profile.json",
  //     { method: "POST", body: JSON.stringify(profile) }
  //   );
  // }, [profile]);

  return (
    <Layout>
      <Switch>
        {authCtx.isLoggedIn && (
          <Route path="/" exact>
            <HomePage />
          </Route>
        )}
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile">
            <UserProfilePage />
            {!authCtx.isLoggedIn && <Redirect to="/auth" />}
          </Route>
        )}
        <Route path="*">
          <Redirect to="/auth" />
        </Route>
        )}
      </Switch>
    </Layout>
  );
}
export default App;
