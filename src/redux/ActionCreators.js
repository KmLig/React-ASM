import * as ActionTypes from './ActionTypes';
import { STAFFS, DEPARTMENTS } from "../shared/staff";
import { baseUrl } from '../shared/baseUrl';

export const addStaff = ({newStaff}) => ({
    type: ActionTypes.ADD_STAFF,
    payload: STAFFS.concat(newStaff)
});

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
    .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            const error = new Error(
              "Error" + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          let errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())      
      .then((staffs) => dispatch(staffsRendering(staffs)))
      .catch((error) => dispatch(staffsFailed(error.message)));
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

    return fetch(baseUrl + 'departments')
    .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            const error = new Error(
              "Error" + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          let errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())      
      .then((departments) => dispatch(departmentsRendering(departments)))
      .catch((error) => dispatch(departmentsFailed(error.message)));
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

export const fetchSalaries = () => (dispatch) => {
    dispatch(salariesLoading(true));

    return fetch(baseUrl + 'staffsSalary')
    .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            const error = new Error(
              "Error" + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          let errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())      
      .then((salaries) => dispatch(salariesRendering(salaries)))
      .catch((error) => dispatch(salariesFailed(error.message)));
}
export const salariesLoading = () => ({
    type: ActionTypes.SALARIES_LOADING
});

export const salariesFailed = (errmess) => ({
    type: ActionTypes.SALARIES_FAILED,
    payload: errmess
})

export const salariesRendering = (salaries) => ({
    type: ActionTypes.SALARIES_RENDERING,
    payload: salaries
})
