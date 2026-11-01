# Jelajah — Travel Destination (React + Vite)

Tugas Bab 7: AJAX dan Konsumsi API Eksternal/Mock.
Menampilkan 3 rekomendasi tempat wisata (foto, nama, deskripsi) yang diambil dengan `fetch()`.

## Menjalankan
```bash
npm install
npm run dev
```

## Struktur
```
public/destinations.json        # mock API (data 3 destinasi)
src/App.jsx                     # state loading/error/data + fetch
src/components/Navbar.jsx
src/components/DestinationCard.jsx
src/components/LoadingSkeleton.jsx
src/components/ErrorMessage.jsx   # pesan error + tombol "Coba lagi"
src/index.css
```

## Testing 3 kondisi
Atur `API_ENDPOINT` di `src/App.jsx`:
- **Success**: `'/destinations.json'`
- **Error**: ganti ke URL yang salah, mis. `'/destinasi-salah.json'`
- **Loading**: DevTools (F12) → Network → Slow 3G → refresh
