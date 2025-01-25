
// import { createSlice } from "@reduxjs/toolkit"

        
// const initialState = {
    
//     items: [
//         { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
//         { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
//         { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
//         { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
//        ]

// };

// const contactSlice = createSlice({
//     name:'contacts',
//     initialState,
//     reducers:{

//         addContact:(state, action)=> {
            
//             state.items.push(action.payload)
//         },
//         deleteContact:(state, action)=> {
            
//             state.items= state.items.filter(contact=> contact.id !==action.payload)
//         },
//         }
// });

// export const {addContact,deleteContact} = contactSlice.actions
// export const  contactsReducer = contactSlice.reducer;



import { createSlice } from "@reduxjs/toolkit"
import { deleteContact, fetchContacts,addContact } from "./contactsOps";

        


const contactSlice = createSlice({
    name:'contacts',
    initialState:{
        items: [],
    loading: false,
    error: null,
    },

    extraReducers:(builder)=> {
    builder.addCase(fetchContacts.pending, (state)=>{
            state.loading=true;
            state.error= null;
        })
        .addCase(fetchContacts.fulfilled, (state, action)=>
            {
                state.loading=false;
                    state.items= action.payload;
            })
    .addCase(fetchContacts.rejected, (state, action)=>
    {
        state.loading=false;
            state.error= action.payload;
    })


    .addCase(addContact.pending, (state)=>{
        state.loading=true;
        state.error= null;
    })
    .addCase(addContact.fulfilled, (state, action)=>
        {
            state.loading=false;
                state.items.push(action.payload);
        })
.addCase(addContact.rejected, (state, action)=>
{
    state.loading=false;
        state.error= action.payload;
})


.addCase(deleteContact.pending, (state)=>{
    state.loading=true;
    state.error= null;
})
.addCase(deleteContact.fulfilled, (state, action)=>
    {
        state.loading=false;
            state.items= state.items.filter((item)=> item.id !==action.payload);
    })
.addCase(deleteContact.rejected, (state, action)=>
{
state.loading=false;
    state.error= action.payload;
})
    }
});


export const  contactsReducer = contactSlice.reducer;

