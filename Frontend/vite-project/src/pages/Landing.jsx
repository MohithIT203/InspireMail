import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Daily Motivation, Delivered.</h1>
      <p>Schedule motivational emails and stay consistent.</p>
      <Link to="/signup">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
