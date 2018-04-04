import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import PouchDB from "pouchdb";
import { persistentStore } from "redux-pouchdb";

const db = new PouchDB("users");
var remoteCouch = "http://192.168.1.23:5984/users";

var opts = { live: true };
db.replicate.to(remoteCouch, opts);
db.replicate.from(remoteCouch, opts);

const applyMiddlewares = applyMiddleware(thunk);
export const changeHandler = doc => {
  console.log(doc);
};
const createStoreWithMiddleware = compose(
  applyMiddlewares,
  persistentStore(db, changeHandler)
)(createStore);

export const store = createStoreWithMiddleware(rootReducer);
window.store = store;
