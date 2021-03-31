// Action types
export const BUG_ADDED = "bugAdded";
export const BUG_REMOVED = "bugRemoved";
export const BUG_RESOLVED = "bugResolved";

// Action creators
export function bugAdded(description) {
  return {
    type: BUG_ADDED,
    payload: {
      description
    }
  }
}

export function bugRemoved(id) {
  return {
    type: BUG_REMOVED,
    payload: {
      id
    }
  }
}

export function bugResolved(id) {
  return {
    type: BUG_RESOLVED,
    payload: {
      id
    }
  }
}
