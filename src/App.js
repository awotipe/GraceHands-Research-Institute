import React from "react";
import {Switch, Route, BrowserRouter, useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react';
import Home from "./pages/Home/Home";
import EduHome from "./pages/EduHome/EduHome";
import About from "./pages/About/About";
import SPSS from "./components/SPSS/SPSS";
import Research from "./components/Research/Research";
import Excel from "./components/Excel/Excel";
import Form from "./components/ContactForm/ContactForm";
import Trainings from "./pages/Training/Training";
import Contact from "./pages/Contact/Contact";
import Tech from "./pages/TechHome/TechHome";
import Whatsappchat from "./components/Whatsappchat/Whatsappchat";
import Footer from "./components/Footer/Footer";
import EduAbout from "./components/EduAbout/EduAbout";

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
      {/* <Navbar /> */}
      <main>
        <Switch>
          <Route path="/" exact component={EduHome} />
          <Route path="/education" exact component={Home} />
          <Route path="/aboutedu" exact component={About} />
          <Route path="/about" exact component={EduAbout} />
          <Route path="/trainings" exact component={Trainings} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/SPSS" exact component={SPSS} />
          <Route path="/research"npm  exact component={Research} />
          <Route path="/excel" exact component={Excel} />
          <Route path="/technology" exact component={Tech} />
          <Route path="/form" exact component={Form} />
          {/* <Route path="/form" exact component={Form} /> */}
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
