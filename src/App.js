import React, { Component } from 'react';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import store from './store';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAIanvq7y71r209R-f2lSZy3PBfpQQFzzo",
    authDomain: "manager-af8af.firebaseapp.com",
    databaseURL: "https://manager-af8af.firebaseio.com",
    projectId: "manager-af8af",
    storageBucket: "manager-af8af.appspot.com",
    messagingSenderId: "801583834970"

    };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
    }
  }

  render() {

/*
    const store = createStore(reducers, compose(
    autoRehydrate(),
    applyMiddleware(ReduxThunk, loggerMiddleware)

));
    persistStore(store, { storage: AsyncStorage });
*/
    return (
      <Provider store={store}>
        <Router />
      </Provider>

    );
  }
}

export default App;
