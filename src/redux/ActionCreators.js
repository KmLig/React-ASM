import * as ActionTypes from "./ActionTypes";
import { STAFFS, DEPARTMENTS } from "../shared/staff";
import { baseUrl } from "../shared/baseUrl";
import { createBrowserHistory } from "history";

export const addStaff = (staff) => ({
  type: ActionTypes.ADD_STAFF,
  payload: staff,
});

export const postStaff = ({ newStaff }) => (dispatch) => {
  const newStaff_add = {
    id: newStaff.id,
    name: newStaff.name,
    doB: newStaff.doB,
    startDate: newStaff.startDate,
    departmentId: newStaff.departmentId,
    salaryScale: newStaff.salaryScale,
    annualLeave: newStaff.annualLeave,
    overTime: newStaff.overTime,
    image: newStaff.image
  };

  return fetch(baseUrl + "staffs", {
    method: "POST",
    body: JSON.stringify(newStaff_add),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin"
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addStaff(response)))
    .catch((error) => {
      console.log("Post staff", error.message);
      alert("New staff could not be posted\nError: " + error.message);
    });
};
export const updateStaff = (staff) => ({
  type: ActionTypes.UPDATE_STAFF,
  payload: staff
});

export const patchStaff =
  ({ updatedStaff }) =>
    (dispatch) => {
      const updatedStaff_patch = {
        id: updatedStaff.id,
        name: updatedStaff.name,
        doB: updatedStaff.doB,
        startDate: updatedStaff.startDate,
        departmentId: updatedStaff.departmentId,
        salaryScale: updatedStaff.salaryScale,
        annualLeave: updatedStaff.annualLeave,
        overTime: updatedStaff.overTime,
        image: updatedStaff.image
      };

      return fetch(baseUrl + "staffs", {
        method: "PATCH",
        body: JSON.stringify(updatedStaff_patch),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then(
          (response) => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error(
                "Error " + response.status + ": " + response.statusText
              );
              error.response = response;
              throw error;
            }
          },
          (error) => {
            throw error;
          }
        )
        .then((response) => response.json())
        .then((response) => dispatch(updateStaff(response)))
        .catch((error) => {
          console.log("Patch staff", error.message);
          alert("This staff could not be patched\nError: " + error.message);
        });
    };

export const removeStaff = (staff) => ({
  type: ActionTypes.DELETE_STAFF,
  payload: staff
});
const browserHistory = createBrowserHistory();

export const deleteStaff =
  ({ deletedStaff }) =>
    (dispatch) => {
      const staff_delete = {
        id: deletedStaff.id,
        name: deletedStaff.name,
        doB: deletedStaff.doB,
        startDate: deletedStaff.startDate,
        departmentId: deletedStaff.departmentId,
        salaryScale: deletedStaff.salaryScale,
        annualLeave: deletedStaff.annualLeave,
        overTime: deletedStaff.overTime,
        image: deletedStaff.image
      };

      return fetch(baseUrl + "staffs/" + staff_delete.id, {
        method: "DELETE",
        //body: JSON.stringify(staff_delete),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then(
          (response) => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error(
                "Error " + response.status + ": " + response.statusText
              );
              error.response = response;
              throw error;
            }
          },
          (error) => {
            throw error;
          }
        )
        .then(() => window.location.replace("/employee/"))
        .then((response) => dispatch(removeStaff(response)))
        .catch((error) => {
          console.log("Patch staff", error.message);
          alert("This staff could not be patched\nError: " + error.message);
        });
    };

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));

  return fetch(baseUrl + "staffs")
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
};
export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING
});

export const staffsFailed = (errmess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess
});

export const staffsRendering = (staffs) => ({
  type: ActionTypes.STAFFS_RENDERING,
  payload: staffs
});

export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentsLoading(true));

  return fetch(baseUrl + "departments")
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
};
export const departmentsLoading = () => ({
  type: ActionTypes.DEPARTMENTS_LOADING
});

export const departmentsFailed = (errmess) => ({
  type: ActionTypes.DEPARTMENTS_FAILED,
  payload: errmess
});

export const departmentsRendering = (departments) => ({
  type: ActionTypes.DEPARTMENTS_RENDERING,
  payload: departments
});

export const fetchSalaries = () => (dispatch) => {
  dispatch(salariesLoading(true));

  return fetch(baseUrl + "staffsSalary")
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
};
export const salariesLoading = () => ({
  type: ActionTypes.SALARIES_LOADING
});

export const salariesFailed = (errmess) => ({
  type: ActionTypes.SALARIES_FAILED,
  payload: errmess
});

export const salariesRendering = (salaries) => ({
  type: ActionTypes.SALARIES_RENDERING,
  payload: salaries
});
