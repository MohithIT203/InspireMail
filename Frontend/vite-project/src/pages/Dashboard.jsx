import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    api.get("/dashboard").then(res => setHistory(res.data));
  }, []);

  const unsubscribe = async () => {
    await api.post("/dashboard/unsubscribe");
    alert("You have unsubscribed from emails.");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Email History</h2>

      {history.length === 0 && <p>No emails sent yet.</p>}

      <ul>
        {history.map(h => (
          <li key={h._id}>
            {h.title} – {new Date(h.sentAt).toLocaleString()}
          </li>
        ))}
      </ul>

      <button onClick={unsubscribe} style={{ marginTop: 20 }}>
        Unsubscribe
      </button>
    </div>
  );
}
