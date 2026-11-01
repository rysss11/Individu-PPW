export default function ErrorMessage({ onRetry }) {
  return (
    <div className="error-wrap">
      <div className="error">
        <div className="error-icon" aria-hidden="true">!</div>
        <span className="error-badge">Gagal memuat data</span>
        <h2>Destinasi belum bisa ditampilkan.</h2>
        <p>
          Kami tidak dapat terhubung ke server untuk mengambil daftar destinasi
          wisata saat ini. Periksa koneksi internetmu, lalu muat ulang.
        </p>
        <button className="button" onClick={onRetry}>
          Coba lagi
        </button>
      </div>
    </div>
  );
}
