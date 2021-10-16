import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin/Admin";
import Baladiya from "./pages/Baladiya";
import Khadamet from "./pages/Khadamet";
import service1 from "./pages/Service1";
import service2 from "./pages/Service2";
import service3 from "./pages/Service3";
import service4 from "./pages/Service4";
import service5 from "./pages/Service5";
import S5Service1 from "./pages/S5Service1";
import S5Service2 from "./pages/S5Service2";
import S5Service3 from "./pages/S5Service3";
import Contact from "./pages/Contact";
import Actualite from "./pages/Actualite";
import Suggest from "./pages/Suggest";
import Avis from "./pages/Avis";
import S5Serv2 from "./pages/S5Serv2";
import Reclamation from "./pages/Reclamation";
import { useEffect, useState } from "react";
function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    {
      localStorage.getItem("Token") ? setAuth(true) : setAuth(false);
    }
  }, [auth]);
  return (
    <BrowserRouter>
      <Switch>
        {auth ? (
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/Baladiya" component={Baladiya} />
            <Route exact path="/Actualite" component={Actualite} />
            <Route exact path="/Khadamet" component={Khadamet} />
            <Route exact path="/Service1" component={service1} />
            <Route exact path="/Service2" component={service2} />
            <Route exact path="/Service3" component={service3} />
            <Route exact path="/Service4" component={service4} />
            <Route exact path="/Service5" component={service5} />
            <Route exact path="/S5Service2" component={S5Service2} />
            <Route exact path="/S5Service3" component={S5Service3} />
            <Route exact path="/S5Service1" component={S5Service1} />
            <Route exact path="/S5Serv2" component={S5Serv2} />
            <Route exact path="/Reclamation" component={Reclamation} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Suggest" component={Suggest} />
            <Route exact path="/Avis" component={Avis} />
          </>
        ) : (
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/Admin" component={Admin} />
            <Route exact path="/Baladiya" component={Baladiya} />
            <Route exact path="/Actualite" component={Actualite} />
            <Route exact path="/Khadamet" component={Khadamet} />
            <Route exact path="/Service1" component={service1} />
            <Route exact path="/Service2" component={service2} />
            <Route exact path="/Service3" component={service3} />
            <Route exact path="/Service4" component={service4} />
            <Route exact path="/Service5" component={service5} />
            <Route exact path="/S5Service2" component={S5Service2} />
            <Route exact path="/S5Service3" component={S5Service3} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Suggest" component={Suggest} />
            <Route exact path="/Avis" component={Avis} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
