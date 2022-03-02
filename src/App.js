import "./App.css";

import Home from "./pages/Home";
import Demo from "./pages/Demo";

import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/demo" component={Demo} />
          </div>
        </Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
