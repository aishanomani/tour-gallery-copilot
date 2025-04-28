import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

const App = () => {
  {/* state variables for tours data, loading, and error */}
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    {/* fetch tours from API */}
    setLoading(true);
    try {
       {/* slight change made to link since it was showing an error in the browser */}
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
    {/* fetch tours when component mounts */}
  }, []);
  if (loading) {
    return (
      <main>
        <h2>Loading</h2> {/* conditional rendering was added at the beginning */}
        {/* loading message while data is being fetched */}
      </main>
    );
  }
  if (error) {
    return (
      <main>
        <h2>Error: {error}</h2> {/* conditional rendering was added at the beginning */}
        {/* display error message if API fetch fails */}
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>No tours available</h2>
        <button onClick={fetchTours}>Refresh</button>
        {/* no tours left message and refresh button */}
      </main>
    );
  }

  return (
    <main>
      <h1>Tours</h1>
      <Gallery tours={tours} setTours={setTours} />
      {/* gallery component to display list of tours */}
    </main>
  );
};

export default App;