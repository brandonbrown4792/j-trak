import { createStore, combineReducers } from 'redux';
import jobsReducer from './Reducers/jobsReducer';
import contactsReducer from './Reducers/contactsReducer';

const rootReducer = combineReducers({
    jobsReducer: jobsReducer,
    contactsReducer: contactsReducer
});

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);