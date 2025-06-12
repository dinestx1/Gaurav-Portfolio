import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// const API_URL = "https://api.anveraesports.com/api/admin/";
const API_URL = "http://localhost:3000/api/v0.1/";

export const getPapers = createAsyncThunk("auth/getPapers", async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`${API_URL}fetch-research-paper`, { withCredentials: true });
  
      return { status: response.status, data: response.data };
    } catch (err) {
   
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });
  

  export const getPaperByid = createAsyncThunk("auth/getPaperByid", async ({id}, { rejectWithValue, dispatch }) => {
    try {
       console.log(id)
      const response = await axios.get(`${API_URL}fetch-research-paper/${id}`, { withCredentials: true });
  
      return { status: response.status, data: response.data };
    } catch (err) {
   
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });



  export const getWorks = createAsyncThunk("auth/getWorks", async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`${API_URL}fetch-work`, { withCredentials: true });
  
      return { status: response.status, data: response.data };
    } catch (err) {
   
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });
  
  
  export const getEvents = createAsyncThunk("auth/getEvents", async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`${API_URL}fetch-event`, { withCredentials: true });
  
      return { status: response.status, data: response.data };
    } catch (err) {
   
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });



  const initialState = {
    papers:[],
    works:[],
    events:[],
    paper:null,
    loading:false,
    message: null,

    error: null,
    errordata:null
  };
  
  // Auth Slice
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder
    
        // Handle Get Data
        .addCase(getPapers.pending, (state) => {
          state.loading= true;
          state.errordata = null;
        })
        .addCase(getPapers.fulfilled, (state, action) => {
          state.loading = false;
    
          state.papers = action.payload.data.data;
        })
        .addCase(getPapers.rejected, (state, action) => {
          state.loading = false;
          state.papers = null;
          state.errordata = action.payload;
        })
     //ny id
        .addCase(getPaperByid.pending, (state) => {
          state.loading= true;
          state.errordata = null;
        })
        .addCase(getPaperByid.fulfilled, (state, action) => {
          state.loading = false;
    
          state.paper = action.payload.data.data;
        })
        .addCase(getPaperByid.rejected, (state, action) => {
          state.loading = false;
          state.paper = null;
          state.errordata = action.payload;
        })

        //fetch work
        .addCase(getWorks.pending, (state) => {
          state.loading= true;
          state.errordata = null;
        })
        .addCase(getWorks.fulfilled, (state, action) => {
          state.loading = false;
    
          state.works = action.payload.data.data;
        })
        .addCase(getWorks.rejected, (state, action) => {
          state.loading = false;
          state.papers = null;
          state.errordata = action.payload;
        })
        //fetch-events

   .addCase(getEvents.pending, (state) => {
          state.loading= true;
          state.errordata = null;
        })
        .addCase(getEvents.fulfilled, (state, action) => {
          state.loading = false;
    
          state.events = action.payload.data.data;
        })
        .addCase(getEvents.rejected, (state, action) => {
          state.loading = false;
          state.papers = null;
          state.errordata = action.payload;})
    },
  });
  
  export default authSlice.reducer;

