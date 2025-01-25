

// import { createSlice } from "@reduxjs/toolkit"

        
// const initialState = {
//     contacts: {
// 		items: [
//             { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
//             { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
//             { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
//             { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
//           ]
// 	},
// }

// const contactSlice = createSlice({
//     name:'contacts',
//     initialState,
//     reducers:{

//         addContact:(state, action)=> {
//             state.contacts.items.push(action.payload)
//         },
//         deleteContact:(state, action)=> {
//             state.contacts.items= state.contacts.items.filter(contact=> contact.id !==action.payload)
//         },
//         }
// })

// export const {addContact,deleteContact} = contactSlice.actions
// export const  contactsReducer = contactSlice.reducer;
// // export const selectContacts = (state) => state.contacts.contacts.items;



import { createSlice } from "@reduxjs/toolkit"

        
const initialState = {
    
    items: [
        { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
        { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
        { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
        { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
       ]

};

const contactSlice = createSlice({
    name:'contacts',
    initialState,
    reducers:{

        addContact:(state, action)=> {
            // state.contacts.items.push(action.payload)
            state.items.push(action.payload)
        },
        deleteContact:(state, action)=> {
            // state.contacts.items= state.contacts.items.filter(contact=> contact.id !==action.payload)
            state.items= state.items.filter(contact=> contact.id !==action.payload)
        },
        }
});

export const {addContact,deleteContact} = contactSlice.actions
export const  contactsReducer = contactSlice.reducer;
// export const selectContacts = (state) => state.contacts.contacts.items;

