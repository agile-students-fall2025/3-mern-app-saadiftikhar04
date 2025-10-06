import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API = process.env.REACT_APP_API_BASE || 'http://localhost:7001';

export default function About() {
  const [about, setAbout] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`${API}/api/about`)
      .then(r => setAbout(r.data))
      .catch(err => setError(err?.message || "Failed to load"));
  }, []);

  if (error) return <div style={{ padding: 24 }}>Error: {error}</div>;
  if (!about) return <div style={{ padding: 24 }}>Loading...</div>;

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24, lineHeight: 1.6 }}>
      <h1>About Us</h1>
      <h2 style={{ marginTop: 8 }}>{about.name}</h2>
      <img
        src={about.photoUrl}
        alt={about.name}
        style={{ width: 220, height: 220, objectFit: 'cover', borderRadius: '50%', margin: '16px 0' }}
      />
      {about.paragraphs?.map((p, i) => (
        <p key={i} style={{ marginBottom: 12 }}>{p}</p>
      ))}
    </div>
  );
}
