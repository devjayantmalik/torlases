import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export default () => {
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  //   Compose is just for debugging.
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return store;
};
