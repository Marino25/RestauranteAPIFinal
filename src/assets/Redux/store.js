import { createStore } from 'redux';

import rootReducer from '././Modules/Reducers'

const store = createStore(rootReducer);

export default store;