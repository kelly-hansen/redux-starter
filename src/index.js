import configureStore from './store/configureStore';
import { bugAdded, bugResolved, selectUnresolvedBugs, selectBugsAssignedTo } from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded, assignedBug } from './store/users';


const store = configureStore();

store.subscribe(() => {
  console.log('Store changed!');
});

store.dispatch(projectAdded({ name: 'My First Project' }));
store.dispatch(bugAdded({ description: 'Bug 1' }));
store.dispatch(bugAdded({ description: 'Bug 2' }));
store.dispatch(bugAdded({ description: 'Bug 3' }));
store.dispatch(bugResolved({ id: 1 }));

store.dispatch(userAdded({ name: 'Trevor' }));

store.dispatch(assignedBug({ bugId: 2, userId: 1 }));
store.dispatch(assignedBug({ bugId: 3, userId: 1 }));

const x = selectUnresolvedBugs(store.getState());
const y = selectUnresolvedBugs(store.getState());
console.log(x === y);

console.log(selectBugsAssignedTo(store.getState()));
