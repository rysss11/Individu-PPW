export default function DestinationStats({
  total,
  showForm,
  onToggleForm,
  onClearAll,
  onReset,
}) {
  return (
    <div className="stats-bar">
      <div className="stats-badge">
        <strong>{total}</strong> destinasi terdaftar
      </div>

      <div className="stats-actions">
        {total > 0 ? (
          <button
            type="button"
            className="btn-ghost"
            onClick={onClearAll}
            title="Kosongkan daftar untuk tes kondisi kosong"
          >
            Kosongkan
          </button>
        ) : (
          <button type="button" className="btn-ghost" onClick={onReset}>
            Muat ulang data
          </button>
        )}

        <button
          type="button"
          className="btn-toggle-form"
          onClick={onToggleForm}
        >
          {showForm ? 'Tutup form' : '+ Tambah destinasi'}
        </button>
      </div>
    </div>
  );
}
