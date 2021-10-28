import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import ProductPage from "./";

function App() {
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
}
