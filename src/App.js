import React from "react";
// layout
import Footer from "../src/components/Layout/footer";
import Header from "../src/components/Layout/header";
// Home
import Home from "../src/components/Content/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewForm from "./components/Content/newForm";
import AboutUs from "./components/Content/aboutUs";


class App extends React.Component {
  render() {
    const footerText = "This is the footer text";
    return (
      <Router>
        <div className="app-container">
          <Header />
          <Switch>
            <Route exact path="/new-form" component={NewForm} />
			<Route exact path="/about" component={AboutUs} />
			<Route exact path="/" component={Home} /> 
          </Switch>
          <Footer footerText={footerText} />
        </div>
      </Router>
    );
  }
}

export default App;
