export default function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">jelajah<span>.</span></a>
        <nav className="nav">
          <a href="/" className="active">Destinasi</a>
          <a href="/">Itinerary</a>
          <a href="/">Tips</a>
        </nav>
        <a href="/" className="header-cta">Rencanakan trip</a>
      </div>
    </header>
  );
}
