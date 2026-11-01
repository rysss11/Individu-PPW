import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DestinationCard from './components/DestinationCard';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorMessage from './components/ErrorMessage';

const API_ENDPOINT = '/destinations.json';

export default function App() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDestinations = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_ENDPOINT);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} — ${API_ENDPOINT}`);
      }

      const data = await response.json();
      setDestinations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <>
      <Navbar />

      <main className="container">
        <section className="intro">
          <h1>
            Indonesia lagi <span>cantik-cantiknya.</span>
          </h1>
          <p>Jelajahi sekarang!</p>
        </section>

        {loading && <LoadingSkeleton />}

        {!loading && error && (
          <ErrorMessage error={error} onRetry={fetchDestinations} />
        )}

        {!loading && !error && (
          <div className="bento">
            {destinations.map((place) => (
              <DestinationCard key={place.id} place={place} />
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="container">© 2026 jelajah.</div>
      </footer>
    </>
  );
}
