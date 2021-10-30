import React from 'react';
import {Provider} from "react-redux";
import List from "./components/List";
import {store} from './store';
import Form from "./components/Form";

function App() {
  return (
    <Provider store={store}>
      <Form />

      <List/>
    </Provider>
  );
}

export default App;
