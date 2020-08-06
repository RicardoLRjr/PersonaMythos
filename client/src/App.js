import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./containers/Main/Main"
import Persona5 from "./containers/Persona5/Persona5"
import Persona4 from "./containers/Persona4/Persona4"
import Personas from "./containers/Personas/Personas"
import Navbar from "./components/Navbar/NavBar"
import Footer from "./components/Footer/Footer"
import NotFound from './containers/NoTfound';

function App() {
  return ( <>
    <Router>
      <main>
    <article>
        <Navbar/>
        <Switch>
        <Route exact path={["/", "/main"]}>
                <Main />
              </Route>
              <Route exact path={["/persona4"]}>
                <Persona4 />
              </Route>
              <Route exact path={["/persona5"]}>
                <Persona5/>
              </Route>
              <Route exact path={["/personas"]}>
                <Personas />
              </Route>
              <Route exact path={["*"]}>
                <NotFound />
              </Route>
        </Switch>
        <Footer/>
    </article>
      </main>
    </Router>
    </>
  );
}

export default App;
