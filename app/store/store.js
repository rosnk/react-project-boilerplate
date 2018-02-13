import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

// export default function Store() {
//     const store = createStore(rootReducer, applyMiddleware(thunk));
//     return store;
// }


const store = () => createStore(rootReducer, applyMiddleware(thunk));

export default store;