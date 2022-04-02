import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import AppRoot from './src/AppRoot';
import store from './src/store';

const App = (props) => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppRoot />
      </View>
    </Provider>
  );
};

export default App;
