import React from 'react';
import Content from './src/navigation';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import {configureStore} from './src/store';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const {store} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
};

export default App;
