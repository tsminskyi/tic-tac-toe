import { createStore } from 'redux';
import reducer from './reducer';
import initialSate from './initialState';

const store = createStore(reducer, initialSate);

export default store;
