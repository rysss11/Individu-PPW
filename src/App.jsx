import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DestinationStats from './components/DestinationStats';
import DestinationForm from './components/DestinationForm';
import DestinationCard from './components/DestinationCard';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';

// Endpoint mock API (file ada di public/destinations.json)
// Untuk tes error, ganti jadi URL yang salah, misalnya: '/destinasi-salah.json'
const API_ENDPOINT = '/destinations.json';

export default function App() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  const handleAddDestination = (newPlace) => {
    setDestinations((prev) => [...prev, newPlace]);
    setShowForm(false);
  };

  return (
    <>
      <Navbar />

      <main className="container">
        <section className="intro">
          <div>
            <h1>
              Indonesia lagi <span>cantik-cantiknya.</span>
            </h1>
            <p>Jelajahi sekarang!</p>
          </div>

          <DestinationStats
            total={destinations.length}
            showForm={showForm}
            onToggleForm={() => setShowForm((prev) => !prev)}
            onClearAll={() => setDestinations([])}
            onReset={fetchDestinations}
          />
        </section>

        {showForm && (
          <DestinationForm onAddDestination={handleAddDestination} />
        )}

        {loading && <LoadingSkeleton />}

        {!loading && error && (
          <ErrorMessage error={error} onRetry={fetchDestinations} />
        )}

        {!loading && !error && (
          destinations.length === 0 ? (
            <div className="empty-state">
              <p>Belum ada data destinasi wisata</p>
            </div>
          ) : (
            <div className={destinations.length <= 3 ? 'bento' : 'cards-grid'}>
              {destinations.map((place) => (
                <DestinationCard key={place.id} place={place} />
              ))}
            </div>
          )
        )}
      </main>

      <Footer />
    </>
  );
}
