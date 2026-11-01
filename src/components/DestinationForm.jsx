import { useState } from 'react';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80';

export default function DestinationForm({ onAddDestination }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [tag, setTag] = useState('Alam');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !location.trim() || !description.trim()) return;

    onAddDestination({
      id: Date.now(),
      name: name.trim(),
      location: location.trim(),
      tag,
      image: image.trim() || DEFAULT_IMAGE,
      description: description.trim(),
    });

    setName('');
    setLocation('');
    setTag('Alam');
    setImage('');
    setDescription('');
  };

  return (
    <form className="dest-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          placeholder="Nama destinasi (mis. Labuan Bajo)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Lokasi (mis. Nusa Tenggara Timur)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <select value={tag} onChange={(e) => setTag(e.target.value)}>
          <option value="Laut">Laut</option>
          <option value="Gunung">Gunung</option>
          <option value="Budaya">Budaya</option>
          <option value="Alam">Alam</option>
        </select>
        <input
          type="url"
          placeholder="URL foto (opsional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="form-row-bottom">
        <input
          type="text"
          placeholder="Deskripsi singkat destinasi wisata..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="button">
          Tambah
        </button>
      </div>
    </form>
  );
}
