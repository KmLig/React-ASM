import * as ActionTypes from './ActionTypes';
import { STAFFS } from "../shared/staff";


export const addStaff = ({newStaff}) => ({
    type: ActionTypes.ADD_STAFF,
    payload: {
        id: newStaff.id,
        name: newStaff.name,
        doB: newStaff.doB,
        startDate: newStaff.startDate,
        department: newStaff.department,  
        salaryScale: newStaff.salaryScale,
        annualLeave: newStaff.annualLeave,
        overTime: newStaff.overTime,
        image: newStaff.image
    }
});

export const fetchStaffs = () => (dispatch) => {
    dispatch(staffsLoading(true));

    setTimeout(()=>{
        dispatch(staffRendering(STAFFS))
    }, 2000);
}
export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

export const staffsFailed = (errmess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
})

export const staffRendering = (staffs) => ({
    type: ActionTypes.STAFFS_RENDERING,
    payload: staffs
})