import React, { Component } from "react";
import Menu from "./components/Menu/Menu";
import './App.css'
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import ProductListPage from "./pages/ProductListPage/ProductListPage";
export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
             {/* <ProductListPage /> */}
              {this.showContentMenus(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }

  showContentMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return(
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />

        )
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
