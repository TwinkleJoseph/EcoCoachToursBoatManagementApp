import {  combineReducers, createStore } from "redux";

const swimlane = (state = { lists: [] }, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const reducers = combineReducers({
    swimlane
  });

const loadState = () => {
try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
    return undefined;
    }
    return JSON.parse(serializedState);
} catch (err) {
    return undefined;
}
};  

const persistedState = loadState();
const store = createStore(reducers, persistedState);
export default store;