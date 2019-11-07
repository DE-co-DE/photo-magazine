import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./style/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
serviceWorker.unregister();
