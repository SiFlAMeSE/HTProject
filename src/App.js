import React, { Component } from 'react';
import Routing from "./routes";
import Header from "./header";
import Headernew from "./headernew";
import Footer from "./footer";



class App extends Component {
  render() {
    return (
      <div>
        <Headernew />
        <Routing />
        <Footer />
      </div>
    );
  }
}

export default App;
