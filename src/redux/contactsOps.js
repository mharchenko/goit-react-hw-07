
import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL='https://6794c615aad755a134ea613d.mockapi.io//'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
async(__, thunkAPI)=>{
    try {
        const data = await axios.get('/contacts');
        return data.data;
    } catch (error) {
        
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const addContact = createAsyncThunk('contacts/addContact', 
    async(contact, thunkAPI)=>{
        try {
            const data = await axios.post('/contacts', contact);
            return data.data;
        } catch (error) {
            
            return thunkAPI.rejectWithValue(error.message);
        }
    }
    );

    export const deleteContact = createAsyncThunk('contacts/deleteContact', 
        async(id, thunkAPI)=>{
            try {
             await axios.delete(`/contacts/${id}`);
                return id;
            } catch (error) {
                
                return thunkAPI.rejectWithValue(error.message);
            }
        }
        );