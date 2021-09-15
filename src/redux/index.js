import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./reducers/reducer";

const rootReducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default rootReducers;
