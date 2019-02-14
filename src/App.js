import React, { Component } from 'react';
import Routing from "./routes";
import Header from "./header";
import Footer from "./footer";
import Header1 from "./header1";
import Header2 from "./header2";



class App extends Component {
  render() {
    return (
      <body>
        <Header2 />
        <Routing />
        <Footer />
      </body>
    );
  }
}

export default App;
