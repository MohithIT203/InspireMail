import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ marginRight: 10, color: "#fff" }}>MotiMail</Link>

      {isAuth ? (
        <>
          <Link to="/dashboard" style={{ marginRight: 10, color: "#fff" }}>
            Dashboard
          </Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: 10, color: "#fff" }}>
            Login
          </Link>
          <Link to="/signup" style={{ color: "#fff" }}>
            Signup
          </Link>
        </>
      )}
    </nav>
  );
}
