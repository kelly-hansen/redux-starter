import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch((dispatch, getState) => {
  dispatch({ type: 'bugsReceived', bugs: [1, 2, 3] })
  console.log(getState());
});


//Prior Exercises

// import configureStore from './store/configureStore';
// import { bugAssignedToUser, bugAdded, bugResolved, selectUnresolvedBugs, selectBugsByUser } from './store/bugs';
// import { projectAdded } from './store/projects';
// import { userAdded } from './store/users';


// const store = configureStore();

// store.subscribe(() => {
//   console.log('Store changed!');
// });

// store.dispatch(projectAdded({ name: 'My First Project' }));
// store.dispatch(bugAdded({ description: 'Bug 1' }));
// store.dispatch(bugAdded({ description: 'Bug 2' }));
// store.dispatch(bugAdded({ description: 'Bug 3' }));
// store.dispatch(bugResolved({ id: 1 }));

// store.dispatch(userAdded({ name: 'Trevor' }));

// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));
// store.dispatch(bugAssignedToUser({ bugId: 3, userId: 1 }));

// const unresolvedBugs = selectUnresolvedBugs(store.getState());
// console.log('unresolvedBugs:', unresolvedBugs);

// const user1Bugs = selectBugsByUser(1)(store.getState());
// console.log('user1Bugs:', user1Bugs);
