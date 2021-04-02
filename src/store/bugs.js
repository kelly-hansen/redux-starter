import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from './api';

let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
    },

    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.list.findIndex(bug => bug.id === bugId);
      bugs.list[index].userId = userId;
    },

    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      });
    },

    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    }
  }
});

export const {
  bugAssignedToUser,
  bugAdded,
  bugResolved,
  bugsReceived
} = slice.actions;
export default slice.reducer;

// Action creators
const url = '/bugs';

export const loadBugs = () => apiCallBegan({
  url,
  onSuccess: bugsReceived.type
});

// Selectors
export const selectUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => !bug.resolved)
);

export const selectBugsByUser = userId => createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.userId === userId)
);
