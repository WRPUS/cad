const Login = () => {
  return (
    <div style={{ backgroundColor: '#111827', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>GSRP CAD System</h1>
      <a
        href="http://localhost:3000/auth/discord"
        style={{ backgroundColor: '#4f46e5', padding: '0.5rem 1rem', borderRadius: '5px', textDecoration: 'none', color: 'white' }}
      >
        Login with Discord
      </a>
    </div>
  );
};

export default Login;
