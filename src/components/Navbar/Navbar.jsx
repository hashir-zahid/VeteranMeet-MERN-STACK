import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h1>VeteranConnect</h1>
      <div className="links">
        <Link to="/">Home</Link>
        
        {/* Only show Create Event if user is logged in */}
        {user && <Link to="/create">Create Event</Link>}

        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};
