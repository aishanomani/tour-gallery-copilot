import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
      if (!response.ok) {
        throw new Error('Unable to fetch tours');
      }
      const data = await response.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <h2>Loading</h2>
      </main>
    );
  }
  if (error) {
    return (
      <main>
        <h2>Error: {error}</h2>
      </main>
    );
  }
  return (
    <main>
      <h1>Tours</h1>
      <Gallery tours={tours} setTours={setTours} />
    </main>
  );
};

export default App;