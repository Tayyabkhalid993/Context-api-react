import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Profile</h1>
      {user ? <p>Welcome, {user}!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default Profile;