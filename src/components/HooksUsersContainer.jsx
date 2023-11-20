import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

const HooksUsersContainer = () => {
    const usersId = useSelector(state => state.user.users);
    const dispatch = useDispatch();

  return (
    <div>
      <h3>Number Of Users {usersId}</h3>
      <button onClick={() => dispatch(fetchUsers())}>Click Me</button>
    </div>
  )
}

export default HooksUsersContainer
