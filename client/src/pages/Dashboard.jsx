import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/auth/user', { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => window.location.href = '/');
  }, []);

  return (
    <div style={{ padding: '2rem', color: 'white', backgroundColor: '#1f2937', height: '100vh' }}>
      <h1>Welcome, {user?.username}</h1>
      {user && (
        <img
          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
          alt="avatar"
          style={{ width: '100px', borderRadius: '50%' }}
        />
      )}
    </div>
  );
};

export default Dashboard;
