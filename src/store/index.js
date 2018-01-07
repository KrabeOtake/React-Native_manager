import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const loggerMiddleware = store => next => action => {
  console.log('++++++++++++++++++');
  console.log('dispatching: ', action);
  console.log('------------------');
  console.log('State: ', store.getState());
  console.log('++++++++++++++++++');
  next(action);
}

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, loggerMiddleware),
    autoRehydrate()
  )
);

persistStore(store, { storage: AsyncStorage });


export default store;
