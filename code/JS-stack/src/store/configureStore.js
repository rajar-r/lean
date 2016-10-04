
import rootReducer from '../reducers'
import {createStore} from 'redux';

function configureStore(preloadedState) {
    
    const store = createStore(rootReducer, preloadedState);
    
    // for debugging in dev-tools
    //let store = createStore(rootReducer, preloadedState, window.devToolsExtension && window.devToolsExtension());
    return store;
    
}


export default configureStore;