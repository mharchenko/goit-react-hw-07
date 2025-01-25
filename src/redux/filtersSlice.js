

import { createSlice } from "@reduxjs/toolkit"

        
const initialState = {
    // filters: {
		name: "",
	// }

}

const filtersSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{

        changeFilter:(state, action)=> {
            state.name=action.payload;
        },
    }
})

export const {changeFilter} = filtersSlice.actions
export const  filtersReducer = filtersSlice.reducer;
// export const selectFilter = (state) => state.filters.name;