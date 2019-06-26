import React, { Component } from "react";


import { Main } from "./Main";
import { Header } from "./view/common/Header/Header";
import { Footer } from "./view/common/Footer/Footer";


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
