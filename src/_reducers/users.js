import { GET_USER } from "../config/constant";

const initialState = {
    data: [],
    isLoading: false,
    error: false
};
// user for about page
export const getUser = (state = initialState, action) =>{
    switch (action.type) {
        case `${GET_USER}_PENDING`:
            return{
                ...state,
                isLoading: true,
            }
        case `${GET_USER}_FULFILLED`:
            return{
                ...state,
                data: action.payload.data.results,
                isLoading:false
            }
        case `${GET_USER}_REJECTED`:
            return{
                ...state,
                error: true,
                isLoading: false
            }
        default:
            return state;
    }
};