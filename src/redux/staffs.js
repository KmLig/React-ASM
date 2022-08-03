import { STAFFS } from "../shared/staff";
import * as ActionTypes from './ActionTypes';

export const Staffs  = (state = STAFFS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_STAFF: 
            var staff  = action.payload;
            //
            console.log(state.concat(staff));
            return state.concat(staff);
        default:
            return state;
    }
}