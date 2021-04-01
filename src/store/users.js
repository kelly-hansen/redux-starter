import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name,
        assignedBugIds: []
      });
    },

    assignedBug: (users, action) => {
      const userIndex = users.findIndex(user => user.id === action.payload.userId);
      users[userIndex].assignedBugIds.push(action.payload.bugId);
    }
  }
});

export const {userAdded, assignedBug} = slice.actions;
export default slice.reducer;
