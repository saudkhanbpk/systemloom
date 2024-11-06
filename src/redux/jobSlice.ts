import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Job {
  _id: string;
  category: string;
  title: string;
  location: string;
  employmentType: string;
  company: string;
  timeAgo: string;
}

interface JobState {
  allJobs: Job[];
}

const initialState: JobState = {
  allJobs: [],
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setAllJobs(state, action: PayloadAction<Job[]>) {
      state.allJobs = action.payload;
    },
  },
});

export const { setAllJobs } = jobSlice.actions;
export default jobSlice.reducer;
