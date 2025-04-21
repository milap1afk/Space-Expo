import { useState, useEffect } from 'react';

function MarsRoverPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const apiKey = "LPqsvHbVGPpxdBgW8NeJuFskTmrAP8OKGd6RuW8G";
      const sol = 1000;
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${apiKey}`;

      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error(`API Error: ${response.status} - ${response.statusText}`);

        const data = await response.json();
        
        if (!data.photos || data.photos.length === 0) {
          setError(`No photos found for Sol ${sol}. Try another day!`);
          return;
        }

        setPhotos(data.photos.slice(0, 3));
      } catch (error) {
        setError(`Failed to fetch rover photos: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRoverPhotos();
  }, []);

  return (
    <section className="glass-box">
      <div className="section-header">
        <h2>📸 Mars Rover Photos</h2>
      </div>
      <div>
        {loading && <p>⏳ Loading Mars photos...</p>}
        {error && <p>⚠ {error}</p>}
        {!loading && !error && photos.map((photo, index) => (
          <img 
            key={index} 
            src={photo.img_src} 
            alt={`Mars Rover Photo ${index + 1}`} 
          />
        ))}
      </div>
    </section>
  );
}

export default MarsRoverPhotos;
