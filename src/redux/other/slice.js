import {createSlice} from "@reduxjs/toolkit";  //5


export const dataSlice = createSlice({
    name:'veriler',
    initialState:{
        data:[
            {name:"example1" , number:16},
            {name:"example2" , number:14}

        ]
    },
    reducers:{},


});

export default dataSlice.reducer;