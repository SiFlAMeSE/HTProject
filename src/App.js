import React, { Component } from 'react';
import Routing from "./routes";
import Header from "./header";
import Footer from "./footer";


class App extends Component {
  render() {
    return (
      <div>

        <Header />
        <Routing />
        <Footer />


      </div>
    );
  }
}

export default App;
