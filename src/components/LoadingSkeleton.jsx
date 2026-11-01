export default function LoadingSkeleton() {
  return (
    <div className="bento" aria-label="Memuat destinasi">
      <div className="skeleton">
        <span className="loading-pill">
          <span className="spinner" />
          Memuat destinasi…
        </span>
      </div>
      <div className="skeleton" />
      <div className="skeleton" />
    </div>
  );
}
