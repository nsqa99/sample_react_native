import * as React from "react";
import RootStackNavigator from "./src/navigations/RootStackNavigator";

import store from "./src/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <RootStackNavigator />
    </Provider>
    // <RootStackNavigator />
  );
}

export default App;
