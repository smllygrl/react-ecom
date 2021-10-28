import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import Nav from "./components/Nav/Nav";
import ProductPage from "../src/containers/ProductPage";

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/products/:id">
          <ProductPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
