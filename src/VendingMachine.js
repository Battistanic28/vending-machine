import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./VendingMachine.css";
import Reeses from "./Reeses.js";
import LaysChips from "./LaysChips.js";
import ChewyBar from "./ChewyBar.js";

function VendingMachine() {
    return (
      <div className="VendingMachine">
          <h1>Vending Machine</h1>
          <BrowserRouter>
            <nav>
            <Link to="/reeses">Reeses Peanut Butter Cups</Link>
            <Link to="/lays-chips">Lay's BBQ Potato Chips</Link>
            <Link to="/chewy-bar">Chewy Bar</Link>
            <Link to="/">Home</Link>
            </nav>
            <Route exact path="/reeses">
                <Reeses />
            </Route>
            <Route exact path="/lays-chips">
                <LaysChips />
            </Route>
            <Route exact path="/chewy-bar">
                <ChewyBar />
            </Route>
            <Route exact path="/">
            </Route>
          </BrowserRouter>
      </div>
    );
  }
  
  export default VendingMachine;
  