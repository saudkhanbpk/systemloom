import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface User {
  id: string; 
  name: string;
  email: string;
}


interface AuthState {
  user: User | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the user
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload; 
    },
  },
});


export const { setUser } = authSlice.actions;


export default authSlice.reducer;
