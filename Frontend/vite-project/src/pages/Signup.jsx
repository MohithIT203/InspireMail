import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    await api.post("/auth/signup", {
      email,
      password,
      scheduleTime: time
    });
    navigate("/login");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Signup</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <br />
      <input type="time" onChange={e => setTime(e.target.value)} />
      <br />
      <button onClick={submit}>Create Account</button>
    </div>
  );
}
