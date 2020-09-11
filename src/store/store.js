import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export default () => {
  const initialState = JSON.parse(localStorage.getItem("store")) || {};

  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  //   Compose is just for debugging.
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("store", JSON.stringify(state));
  });

  return store;
};
