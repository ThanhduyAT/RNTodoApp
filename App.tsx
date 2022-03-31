import React from 'react';
import Routes from './src/navigation/Routes';
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
      <Routes />
    </Provider>
  );
};

export default App;
