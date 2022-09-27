import React from "react";
import {Switch, Route, BrowserRouter, useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SPSS from "./components/SPSS/SPSS";
import Research from "./components/Research/Research";
import Excel from "./components/Excel/Excel";
import Trainings from "./pages/Training/Training";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Whatsappchat from "./components/Whatsappchat/Whatsappchat";

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Wrapper>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/trainings" exact component={Trainings} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/SPSS" exact component={SPSS} />
          <Route path="/research" exact component={Research} />
          <Route path="/excel" exact component={Excel} />
        </Switch>
      </main>
      <Footer />
      <Whatsappchat />
      </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
