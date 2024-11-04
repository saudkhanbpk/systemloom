// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // Define the shape of the user object
// interface User {
//   id: string; // Adjust fields as necessary
//   name: string;
//   email: string;
// }

// // Define the shape of the initial state
// interface AuthState {
//   user: User | null; // User can be null if not authenticated
// }

// // Initial state
// const initialState: AuthState = {
//   user: null,
// };

// // Create the auth slice
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     // Action to set the user
//     setUser: (state, action: PayloadAction<User | null>) => {
//       state.user = action.payload; // Update user state
//     },
//   },
// });

// // Export the action for use in components
// export const { setUser } = authSlice.actions;

// // Export the reducer to be used in the store
// export default authSlice.reducer;
