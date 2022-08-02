import { STAFFS, DEPARTMENTS, ROLE } from '../shared/staff.jsx'
export const initialState = {
    staffs: STAFFS,
    departments: DEPARTMENTS
}

export const Reducer = (state = initialState, action) => {
    return state;
};