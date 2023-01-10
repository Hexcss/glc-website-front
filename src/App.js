import React from 'react';

import { About, Footer, Header, Testimonials, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;