import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
// import Partnership from "./pages/Ourservices/Ourservices";
import Training from "./pages/Training/Training";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Certificate from "./components/Certificate/Certificate";
import Testimony from "./components/Testimony/Testimony";
import Whatsappchat from "./components/Whatsappchat/Whatsappchat";
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          {/* <Route path="/" exact component={Partnership} /> */}
          <Route path="/training" exact component={Training} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </main>
      <Certificate />
      <Testimony/>
      <Footer />
      <Whatsappchat />
    </div>
  );
}

export default App;
