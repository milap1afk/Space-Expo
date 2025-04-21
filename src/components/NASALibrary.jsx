function NASALibrary() {
  const openNASAResources = () => {
    window.open("https://images.nasa.gov/", "_blank");
  };

  return (
    <section className="glass-box">
      <div className="section-header">
        <h2>🔭 NASA Image & Video Library</h2>
        <button className="refresh-button" onClick={openNASAResources}>
          📷 Open
        </button>
      </div>
      <p>Explore NASA's official media library.</p>
    </section>
  );
}

export default NASALibrary;
