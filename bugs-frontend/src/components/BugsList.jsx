import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadBugs, selectUnresolvedBugs, resolveBug } from '../store/bugs';

const BugsList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(selectUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <>
      <ul>
        {bugs.map(bug => (
          <li key={bug.id}>
            {bug.description}
            <button onClick={() => dispatch(resolveBug(bug.id))}>Resolve</button>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </>
  );
}

export default BugsList;
