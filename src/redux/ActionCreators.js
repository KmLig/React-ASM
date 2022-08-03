import * as ActionTypes from './ActionTypes';

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