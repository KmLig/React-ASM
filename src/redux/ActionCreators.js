import * as ActionTypes from './ActionTypes';
import { STAFFS, DEPARTMENTS } from "../shared/staff";

export const addStaff = ({newStaff}) => ({
    type: ActionTypes.ADD_STAFF,
    payload: STAFFS.concat(newStaff)
});

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    setTimeout(()=>{
        dispatch(staffsRendering(STAFFS))
    }, 2000);
}
export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
})

export const staffsRendering = (staffs) => ({
    type: ActionTypes.STAFFS_RENDERING,
    payload: staffs
})


export const fetchDepartments = () => (dispatch) => {
    dispatch(departmentsLoading(true));

    setTimeout(()=>{
        dispatch(departmentsRendering(DEPARTMENTS))
    }, 2000);
}
export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
});

export const departmentsFailed = (errmess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
})

export const departmentsRendering = (departments) => ({
    type: ActionTypes.DEPARTMENTS_RENDERING,
    payload: departments
})
