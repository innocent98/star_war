import {NavigationContainer} from '@react-navigation/native';
import MainApp from './MainApp';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainApp />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
