import React from "react";
import { Provider } from "react-redux";

import store from "./components/redux/store";
import "./App.css";
import DisplayControl from "./components/DisplayControl";

function App() {
  return (
    <Provider>
      <div className="App">
        <DisplayControl store={store} />
      </div>
    </Provider>
  );
}

export default App;
