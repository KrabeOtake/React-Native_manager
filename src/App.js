import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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

    if (firebase.apps.length === 0){
      firebase.initializeApp(config);
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
