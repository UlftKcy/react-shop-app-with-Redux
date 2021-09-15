import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopHeader from "../components/Header";
import { ProductDetail } from "../components/ProductDetail";
import { ProductList } from "../components/ProductList";

const AppRouter = () => {
  return (
    <Router>
      <ShopHeader />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/product/:productId" component={ProductDetail} />
        <Route>404 Not Found!</Route>
      </Switch>
    </Router>
  );
};
export default AppRouter;
