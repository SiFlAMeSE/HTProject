import React, { Component } from 'react';
import Routing from "./routes";
import Footer from "./footer";
import Header from "./header";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="content">
          <Routing />
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
