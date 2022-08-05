import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Staffs } from './staffs';
import { Departments } from './departments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialAddStaff } from './forms';
import { Salaries } from './salaries';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            departments: Departments,
            salaries: Salaries,
            ...createForms({
                addStaff: InitialAddStaff
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}

