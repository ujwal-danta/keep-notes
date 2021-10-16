import React from "react";
import Navbar from "./Navbar";
import "./app.css";
import Card from "./card";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstYear from "./FirstYear";
import SecondYear from "./SecondYear";
import ThirdYear from "./ThirdYear";
import FourthYear from "./FourthYear";

// for first years
import Chem from "./Chem";
import Pps from "./Pps";
import Phy from "./Phy";
import Bee from "./Bee";
import Be from "./Be";
import Egd from "./Egd";
import Bmp from "./Bmp";
import MathsI from "./MathsI";
import MathsII from "./MathsII";

function App() {
  return (
    <section>
      {/* NAVBAR */}
      <Navbar></Navbar>

      {/* IMAGE WITH TEXT AND CARDS */}
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="center">
              {/* CARDS */}
              <div className="card-container">
                <Card
                  year="1st Year Notes"
                  message="CLICK ME!!!"
                  href="/1st-year"
                />
                <Card
                  year="2nd Year Notes"
                  message="TO BE ADDED SOON"
                  href="/2nd-year"
                />
                <Card
                  year="3rd Year Notes"
                  message="TO BE ADDED SOON"
                  href="/3rd-year"
                />
                <Card
                  year="4th Year Notes"
                  message="TO BE ADDED SOON"
                  href="/4th-year"
                />
              </div>
            </div>
          </Route>
          <Route exact path="/1st-year">
            <FirstYear />
          </Route>
          <Route exact path="/2nd-year">
            <SecondYear />
          </Route>
          <Route exact path="/3rd-year">
            <ThirdYear />
          </Route>
          <Route exact path="/4th-year">
            <FourthYear />
          </Route>
          <Route exact path="/1st-year/chem">
            <Chem />
          </Route>
          <Route exact path="/1st-year/pps">
            <Pps />
          </Route>
          <Route exact path="/1st-year/phy">
            <Phy />
          </Route>
          <Route exact path="/1st-year/bmp">
            <Bmp />
          </Route>
          <Route exact path="/1st-year/egd">
            <Egd />
          </Route>
          <Route exact path="/1st-year/bee">
            <Bee />
          </Route>
          <Route exact path="/1st-year/be">
            <Be />
          </Route>
          <Route exact path="/1st-year/maths-i">
            <MathsI />
          </Route>
          <Route exact path="/1st-year/maths-ii">
            <MathsII />
          </Route>
        </Switch>
      </Router>
      {/* FOOTER */}
      <Footer />
    </section>
  );
}

export default App;
