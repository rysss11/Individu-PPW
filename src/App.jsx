import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DestinationStats from './components/DestinationStats';
import DestinationForm from './components/DestinationForm';
import DestinationCard from './components/DestinationCard';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';

// Endpoint API menuju Backend NestJS + Supabase (http://localhost:3001/destinations)
// Jika ingin pakai mock lokal tanpa menyalakan backend, ubah menjadi: '/destinations.json'
const API_ENDPOINT = 'http://localhost:3001/destinations';

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

  const handleAddDestination = async (newPlace) => {
    if (API_ENDPOINT.startsWith('http')) {
      try {
        const res = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: newPlace.name,
            location: newPlace.location,
            tag: newPlace.tag,
            image: newPlace.image,
            description: newPlace.description,
          }),
        });
        if (res.ok) {
          const created = await res.json();
          setDestinations((prev) => [...prev, created]);
          setShowForm(false);
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }
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
